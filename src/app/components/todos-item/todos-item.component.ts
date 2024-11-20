import { Component, inject, input } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'todos-item',
  standalone: true,
  imports: [],
  templateUrl: './todos-item.component.html',
  styles: ``,
})
export class TodosItemComponent {
  todo = input.required<Todo>();
  todosSvc = inject(TodosService);
}
