import { Component } from '@angular/core';
import { TodosMainComponent } from '../todos-main/todos-main.component';
import { TodosActionbarComponent } from '../todos-actionbar/todos-actionbar.component';
import { TodosInputComponent } from '../todos-input/todos-input.component';

@Component({
  selector: 'todos-shell',
  standalone: true,
  imports: [TodosMainComponent, TodosActionbarComponent, TodosInputComponent],
  templateUrl: './todos-shell.component.html',
  styles: ``,
})
export class TodosShellComponent {}
