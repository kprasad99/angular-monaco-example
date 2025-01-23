import { Component, ElementRef, inject, OnInit, viewChild, ViewChild } from '@angular/core';
import { Uri, editor } from 'monaco-editor/esm/vs/editor/editor.api';

import * as monaco from 'monaco-editor';
import { configureMonacoYaml } from 'monaco-yaml';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'k-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  standalone: true
})
export class EditorComponent implements OnInit {

  private readonly _editorSrv = inject(EditorService); 

  editorContainer = viewChild.required<ElementRef>('editorContainer');
  codeEditorInstance?: editor.IStandaloneCodeEditor;

  ngOnInit() {
    this.codeEditorInstance = this._editorSrv.createEditor(this.editorContainer()!.nativeElement);
  }
}
