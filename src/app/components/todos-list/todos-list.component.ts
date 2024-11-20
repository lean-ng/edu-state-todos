import { Component, inject } from '@angular/core';
import { TodosItemComponent } from '../todos-item/todos-item.component';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'todos-list',
  standalone: true,
  imports: [TodosItemComponent],
  templateUrl: './todos-list.component.html',
  styles: ``,
})
export class TodosListComponent {
  todosSvc = inject(TodosService);
}
