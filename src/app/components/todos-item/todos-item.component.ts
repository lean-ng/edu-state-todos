import { Component } from '@angular/core';

@Component({
  selector: 'todos-item',
  standalone: true,
  imports: [],
  templateUrl: './todos-item.component.html',
  styles: ``
})
export class TodosItemComponent {
  todo = { id: 3, title: 'Inputs / Outputs', completed: false };
}
