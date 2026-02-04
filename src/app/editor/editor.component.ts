import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Uri, editor } from 'monaco-editor/esm/vs/editor/editor.api';

import * as monaco from 'monaco-editor';
import { configureMonacoYaml } from 'monaco-yaml';

@Component({
  selector: 'k-editor',
  standalone: true,
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements OnInit {
  @ViewChild('editorContainer', { static: true }) _editorContainer!: ElementRef;
  codeEditorInstance!: editor.IStandaloneCodeEditor;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit() {
    const modelUri = Uri.parse('a://b/foo.yaml');
    configureMonacoYaml(monaco, {
      enableSchemaRequest: true,
      hover: true,
      completion: true,
      validate: true,
      format: true,
      schemas: [
        {
          // Id of the first schema
          uri: './assets/schemas/metallb-schema.json',
          // Associate with our model
          fileMatch: [String(modelUri)]
          // schema: {
          //   type: 'object',
          //   properties: {
          //     p1: {
          //       enum: ['v1', 'v2'],
          //     },
          //     p2: {
          //       // Reference the second schema
          //       $ref: 'http://myserver/bar-schema.json',
          //     },
          //   },
        }
        //}
      ]
    });

    this.codeEditorInstance = editor.create(this._editorContainer.nativeElement, {
      theme: 'vs-dark',
      //  wordWrap: 'on',
      //  wrappingIndent: 'indent',
      minimap: { enabled: true },
      automaticLayout: true,
      language: 'yaml',
      model: editor.createModel('', 'yaml', modelUri)
    });
  }
}
