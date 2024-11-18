import { Component } from '@angular/core';
import { TodosShellComponent } from "./components/todos-shell/todos-shell.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TodosShellComponent],
})
export class AppComponent {
}
