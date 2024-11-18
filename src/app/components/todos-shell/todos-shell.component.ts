import { Component } from '@angular/core';
import { TodosMainComponent } from "../todos-main/todos-main.component";
import { TodosActionbarComponent } from "../todos-actionbar/todos-actionbar.component";
import { TodosInputComponent } from "../todos-input/todos-input.component";

@Component({
  selector: 'todos-shell',
  standalone: true,
  imports: [TodosMainComponent, TodosActionbarComponent, TodosInputComponent],
  templateUrl: './todos-shell.component.html',
  styles: ``
})
export class TodosShellComponent {
  todos = [
    { id: 1, title: 'Template Syntax', completed: false },
    { id: 2, title: 'Angular CLI', completed: true },
    { id: 3, title: 'Inputs / Outputs', completed: false }
  ];
}
