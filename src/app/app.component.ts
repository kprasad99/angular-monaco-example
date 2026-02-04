import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EditorComponent } from './editor/editor.component';

@Component({
  selector: 'k-root',
  standalone: true,
  imports: [MatToolbarModule, EditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-monaco-example';
}
