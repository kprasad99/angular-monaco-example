import { Injectable } from '@angular/core';
import * as monaco from 'monaco-editor';
import { exampleLanguageCode } from '../constants/example-language/example-language.code';
import { exampleLanguageTheme } from 'src/app/core/constants/example-language/example-language.theme';
import { exampleLanguageCompletion } from '../constants/example-language/example-language.completion';
import { exampleLanguageTokens } from '../constants/example-language/example-language.tokens';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  createEditor(
    container: HTMLElement,
    options?: monaco.editor.IStandaloneEditorConstructionOptions
  ): monaco.editor.IStandaloneCodeEditor {
    
    // Register a new language
    monaco.languages.register({ id: 'exampleLanguage' });

    // Register a tokens provider for the language
    monaco.languages.setMonarchTokensProvider('exampleLanguage', exampleLanguageTokens);

    // Define a new theme that contains only rules that match this language
    monaco.editor.defineTheme('exampleLanguageTheme', exampleLanguageTheme);

    // Register a completion item provider for the new language
    monaco.languages.registerCompletionItemProvider('exampleLanguage', exampleLanguageCompletion);

    // Create the editor instance
    return monaco.editor.create(container, {
      theme: 'exampleLanguageTheme',
      value: exampleLanguageCode,
      language: "exampleLanguage",
    });
  }
}
