import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "./todo.service";
import * as TodoAction from "./todo.action";
import { map, mergeMap } from "rxjs/operators"; // Optional: depends on your RxJS version
import { Itodo } from "./todo.store";

@Injectable()
export class TodoEffect {
  private actions$ = inject(Actions);

  constructor(private todoService: TodoService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoAction.loadTodos),
      mergeMap(() =>
        this.todoService.getTodo().pipe(
          map((todos: Itodo[]) => TodoAction.loadTodosSuccess({ todos }))
        )
      )
    )
  );
}
