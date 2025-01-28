import { Injectable } from '@angular/core';
import * as monaco from 'monaco-editor';
import { validate } from '../scripts/iba-language/iba-parser';
import { ibaLanguageTheme } from '../scripts/iba-language/iba-theme';
import { IbaLanguageTokensProvider } from '../scripts/iba-language/iba-tokens-provider';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  createEditor(
    container: HTMLElement,
    options?: monaco.editor.IStandaloneEditorConstructionOptions
  ): monaco.editor.IStandaloneCodeEditor {
    
    // Register a new language
    monaco.languages.register({ id: 'ibaLanguage' });

    // Register a tokens provider for the language
    // monaco.languages.setMonarchTokensProvider('exampleLanguage', exampleLanguageTokens);
    monaco.languages.setTokensProvider('ibaLanguage', new IbaLanguageTokensProvider())

    // Define a new theme that contains only rules that match this language
    monaco.editor.defineTheme('ibaLanguageTheme', ibaLanguageTheme);

    // Register a completion item provider for the new language
    // monaco.languages.registerCompletionItemProvider('exampleLanguage', exampleLanguageCompletion);

    // Create the editor instance
    let editor = monaco.editor.create(container, {
      theme: 'ibaLanguageTheme',
      value: [].join('\n'),
      language: "ibaLanguage",
    });

    editor.onDidChangeModelContent(function (e) {
      let code = editor.getValue()
      let syntaxErrors = validate(code);
      let monacoErrors = [];
      for (let e of syntaxErrors) {
          monacoErrors.push({
              startLineNumber: e.startLine,
              startColumn: e.startCol,
              endLineNumber: e.endLine,
              endColumn: e.endCol,
              message: e.message,
              severity: monaco.MarkerSeverity.Error
          });
      };
      // window.syntaxErrors = syntaxErrors;
      let model = monaco.editor.getModels()[0];
      monaco.editor.setModelMarkers(model, "owner", monacoErrors);
    });

    return editor;
  }
}
