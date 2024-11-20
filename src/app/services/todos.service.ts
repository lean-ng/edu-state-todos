import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos = signal<Todo[]>([
    { id: 1, title: 'Template Syntax', completed: false },
    { id: 2, title: 'Angular CLI', completed: true },
    { id: 3, title: 'Inputs / Outputs', completed: false },
  ]);

  createTodo(title: string) {
    const id = (this.todos().at(-1)?.id || 0) + 1;
    const todo = { id, title, completed: false };
    this.todos.update((todos) => [...todos, todo]);
  }

  toggleTodo(id: number) {
    this.todos.update((todos) =>
      todos.map((t) => (t.id !== id ? t : { ...t, completed: !t.completed }))
    );
  }

  destroyTodo(id: number) {
    this.todos.update((todos) => todos.filter((t) => t.id !== id));
  }
}
