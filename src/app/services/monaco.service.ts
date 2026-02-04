import { Injectable } from '@angular/core';

export interface YamlConfiguration {
  schemas?: Array<{
    uri: string;
    fileMatch: string[];
  }>;
  enableSchemaRequest?: boolean;
  hover?: boolean;
  completion?: boolean;
  validate?: boolean;
  format?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MonacoService {
  private monacoPromise: Promise<typeof import('monaco-editor')> | null = null;
  private yamlConfigured = false;
  private fontInjected = false;
  private yamlDisposable: { dispose: () => void } | null = null;

  /**
   * Lazily loads Monaco Editor on first call, returns cached instance on subsequent calls
   */
  async getMonaco(): Promise<typeof import('monaco-editor')> {
    this.monacoPromise ??= this.loadMonaco();
    return this.monacoPromise;
  }

  /**
   * Configures monaco-yaml for YAML language support
   * Only loads monaco-yaml when actually needed (language === 'yaml')
   */
  async configureYaml(config: YamlConfiguration = {}): Promise<void> {
    // Dispose previous configuration to avoid duplicate providers
    if (this.yamlDisposable) {
      this.yamlDisposable.dispose();
      this.yamlDisposable = null;
    }

    const monaco = await this.getMonaco();

    // Dynamically import monaco-yaml only when needed
    const { configureMonacoYaml } = await import('monaco-yaml');

    this.yamlDisposable = configureMonacoYaml(monaco, {
      enableSchemaRequest: config.enableSchemaRequest ?? true,
      hover: config.hover ?? true,
      completion: config.completion ?? true,
      validate: config.validate ?? true,
      format: config.format ?? true,
      schemas: config.schemas ?? [],
    });

    this.yamlConfigured = true;
  }

  /**
   * Updates YAML configuration (schemas, validation options, etc.)
   */
  async updateYamlConfig(config: YamlConfiguration): Promise<void> {
    // Always reconfigure by disposing and recreating
    await this.configureYaml(config);
  }

  /**
   * Disposes the YAML configuration
   */
  disposeYaml(): void {
    if (this.yamlDisposable) {
      this.yamlDisposable.dispose();
      this.yamlDisposable = null;
      this.yamlConfigured = false;
    }
  }

  /**
   * Check if YAML support has been configured
   */
  isYamlConfigured(): boolean {
    return this.yamlConfigured;
  }

  private async loadMonaco(): Promise<typeof import('monaco-editor')> {
    // Inject codicon font override before loading Monaco
    this.injectCodiconFontOverride();

    // Dynamic import - this is the key to lazy loading
    const monaco = await import('monaco-editor');
    return monaco;
  }

  private injectCodiconFontOverride(): void {
    if (this.fontInjected) {
      return;
    }

    // Remove any existing override
    const existingStyle = document.getElementById('codicon-font-override');
    if (existingStyle) {
      existingStyle.remove();
    }

    // Create and append font override style
    const codiconFontStyle = document.createElement('style');
    codiconFontStyle.id = 'codicon-font-override';
    codiconFontStyle.textContent = `
      @font-face {
        font-family: "codicon";
        font-display: block;
        src: url("/assets/fonts/codicon.ttf") format("truetype");
      }
    `;
    document.head.appendChild(codiconFontStyle);
    this.fontInjected = true;
  }
}
