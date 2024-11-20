import { Component } from '@angular/core';
import { TodosListComponent } from '../todos-list/todos-list.component';

@Component({
  selector: 'todos-main',
  standalone: true,
  imports: [TodosListComponent],
  templateUrl: './todos-main.component.html',
  styles: ``,
})
export class TodosMainComponent {}
