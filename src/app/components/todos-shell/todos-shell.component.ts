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

}
