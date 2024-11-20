import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'todos-actionbar',
  standalone: true,
  imports: [],
  templateUrl: './todos-actionbar.component.html',
  styles: ``,
})
export class TodosActionbarComponent {
  todosSvc = inject(TodosService);

  activeCount = computed(
    () => this.todosSvc.todos().filter((t) => !t.completed).length
  );

  hasCompletedTodos = computed(() =>
    this.todosSvc.todos().some((t) => t.completed)
  );
}
