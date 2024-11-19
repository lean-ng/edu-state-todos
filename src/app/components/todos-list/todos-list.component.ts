import { Component } from '@angular/core';
import { TodosItemComponent } from "../todos-item/todos-item.component";

@Component({
  selector: 'todos-list',
  standalone: true,
  imports: [TodosItemComponent],
  templateUrl: './todos-list.component.html',
  styles: ``
})
export class TodosListComponent {

}
