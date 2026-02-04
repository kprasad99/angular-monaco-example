import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EditorComponent, EditorSchema } from './editor/editor';

@Component({
  selector: 'k-root',
  standalone: true,
  imports: [MatToolbarModule, EditorComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  host: {
    class: 'flex flex-col h-screen w-full',
  },
})
export class AppComponent {
  readonly title = signal('angular-monaco-example');

  // Editor configuration
  readonly editorContent = signal('');

  readonly schemaConfig: EditorSchema = {
    uri: './assets/schemas/metallb-schema.json',
  };
}
