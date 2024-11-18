import { Component } from '@angular/core';
import { TodosItemComponent } from "../todos-item/todos-item.component";

@Component({
  selector: 'todos-shell',
  standalone: true,
  imports: [TodosItemComponent],
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
