import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
  inject,
  input,
  model,
  effect,
  signal,
} from '@angular/core';
import { MonacoService, YamlConfiguration } from '../services/monaco.service';

export interface EditorSchema {
  uri: string;
  fileMatch?: string[];
}

type Monaco = typeof import('monaco-editor');
type Editor = import('monaco-editor').editor.IStandaloneCodeEditor;

@Component({
  selector: 'k-editor',
  standalone: true,
  imports: [],
  templateUrl: './editor.html',
  styleUrls: ['./editor.scss'],
})
export class EditorComponent implements OnInit, OnDestroy {
  @ViewChild('editorContainer', { static: true }) _editorContainer!: ElementRef;

  // Configurable inputs
  readonly language = input<string>('yaml');
  readonly theme = input<string>('vs-dark');
  readonly schema = input<EditorSchema | null>(null);
  readonly enableValidation = input<boolean>(true);
  readonly enableHover = input<boolean>(true);
  readonly enableCompletion = input<boolean>(true);
  readonly enableMinimap = input<boolean>(true);

  // Two-way binding for editor value
  readonly value = model<string>('');

  // Internal state
  private readonly monacoService = inject(MonacoService);
  private codeEditorInstance: Editor | null = null;
  private monaco: Monaco | null = null;
  private modelUri: import('monaco-editor').Uri | null = null;
  private isUpdatingFromEditor = false;
  private initialized = signal(false);
  private previousSchema: EditorSchema | null = null;
  private previousYamlOptions = { validation: true, hover: true, completion: true };

  constructor() {
    // Effect to handle theme changes
    effect(() => {
      const theme = this.theme();
      if (this.initialized() && this.monaco) {
        this.monaco.editor.setTheme(theme);
      }
    });

    // Effect to handle minimap changes
    effect(() => {
      const enableMinimap = this.enableMinimap();
      if (this.initialized() && this.codeEditorInstance) {
        this.codeEditorInstance.updateOptions({
          minimap: { enabled: enableMinimap },
        });
      }
    });

    // Effect to handle language changes
    effect(() => {
      const language = this.language();
      if (this.initialized() && this.codeEditorInstance && this.monaco) {
        this.recreateModel(language);
      }
    });

    // Effect to handle schema and YAML option changes
    effect(() => {
      const schema = this.schema();
      const enableValidation = this.enableValidation();
      const enableHover = this.enableHover();
      const enableCompletion = this.enableCompletion();
      const language = this.language();

      if (this.initialized() && language === 'yaml') {
        // Check if options actually changed to avoid unnecessary reconfiguration
        const schemaChanged = JSON.stringify(schema) !== JSON.stringify(this.previousSchema);
        const optionsChanged =
          enableValidation !== this.previousYamlOptions.validation ||
          enableHover !== this.previousYamlOptions.hover ||
          enableCompletion !== this.previousYamlOptions.completion;

        if (schemaChanged || optionsChanged) {
          this.previousSchema = schema;
          this.previousYamlOptions = { validation: enableValidation, hover: enableHover, completion: enableCompletion };
          this.updateYamlConfiguration();
        }
      }
    });

    // Effect to handle external value changes
    effect(() => {
      const value = this.value();
      if (this.initialized() && this.codeEditorInstance && !this.isUpdatingFromEditor) {
        const currentValue = this.codeEditorInstance.getValue();
        if (currentValue !== value) {
          // Preserve cursor position
          const position = this.codeEditorInstance.getPosition();
          this.codeEditorInstance.setValue(value);
          if (position) {
            this.codeEditorInstance.setPosition(position);
          }
        }
      }
    });
  }

  ngOnInit(): void {
    this.initializeEditor();
  }

  private async initializeEditor(): Promise<void> {
    // Lazily load Monaco
    this.monaco = await this.monacoService.getMonaco();

    // Create model URI
    this.modelUri = this.monaco.Uri.parse(`editor://model/${Date.now()}.${this.getFileExtension()}`);

    // Configure YAML if needed and store initial values
    if (this.language() === 'yaml') {
      this.previousSchema = this.schema();
      this.previousYamlOptions = {
        validation: this.enableValidation(),
        hover: this.enableHover(),
        completion: this.enableCompletion(),
      };
      await this.configureYaml();
    }

    // Create editor instance
    this.codeEditorInstance = this.monaco.editor.create(this._editorContainer.nativeElement, {
      theme: this.theme(),
      minimap: { enabled: this.enableMinimap() },
      automaticLayout: true,
      language: this.language(),
      model: this.monaco.editor.createModel(this.value(), this.language(), this.modelUri),
    });

    // Listen for content changes
    this.codeEditorInstance.onDidChangeModelContent(() => {
      if (this.codeEditorInstance) {
        this.isUpdatingFromEditor = true;
        this.value.set(this.codeEditorInstance.getValue());
        this.isUpdatingFromEditor = false;
      }
    });

    this.initialized.set(true);
  }

  ngOnDestroy(): void {
    if (this.codeEditorInstance) {
      this.codeEditorInstance.dispose();
      this.codeEditorInstance = null;
    }
  }

  private async configureYaml(): Promise<void> {
    const config = this.buildYamlConfig();
    await this.monacoService.configureYaml(config);
  }

  private async updateYamlConfiguration(): Promise<void> {
    const config = this.buildYamlConfig();
    await this.monacoService.updateYamlConfig(config);
  }

  private buildYamlConfig(): YamlConfiguration {
    const schema = this.schema();
    const schemas: YamlConfiguration['schemas'] = [];

    if (schema && this.modelUri) {
      schemas.push({
        uri: schema.uri,
        fileMatch: schema.fileMatch ?? [String(this.modelUri)],
      });
    }

    return {
      enableSchemaRequest: true,
      hover: this.enableHover(),
      completion: this.enableCompletion(),
      validate: this.enableValidation(),
      format: true,
      schemas,
    };
  }

  private recreateModel(language: string): void {
    if (!this.monaco || !this.codeEditorInstance) {
      return;
    }

    const currentValue = this.codeEditorInstance.getValue();

    // Dispose old model
    const oldModel = this.codeEditorInstance.getModel();
    if (oldModel) {
      oldModel.dispose();
    }

    // Create new model URI with appropriate extension
    this.modelUri = this.monaco.Uri.parse(`editor://model/${Date.now()}.${this.getFileExtension()}`);

    // Create new model
    const newModel = this.monaco.editor.createModel(currentValue, language, this.modelUri);
    this.codeEditorInstance.setModel(newModel);

    // Configure YAML if switching to YAML
    if (language === 'yaml') {
      this.configureYaml();
    }
  }

  private getFileExtension(): string {
    const lang = this.language();
    const extensionMap: Record<string, string> = {
      yaml: 'yaml',
      json: 'json',
      javascript: 'js',
      typescript: 'ts',
      html: 'html',
      css: 'css',
    };
    return extensionMap[lang] ?? lang;
  }
}
