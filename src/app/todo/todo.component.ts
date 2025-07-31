import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTodos } from '../todo.selector';
import { loadTodos } from '../todo.action';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

private store = inject(Store)

todoData$ = this.store.select(selectTodos)
ngOnInit(): void {
 this.store.dispatch(loadTodos())
}
}
