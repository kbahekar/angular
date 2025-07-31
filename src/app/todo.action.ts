import { createAction, props } from "@ngrx/store";
import { Itodo } from "./todo.store";



export const loadTodos = createAction('[TODO] load todo' );
export const loadTodosSuccess = createAction('[TODO] load todo success',props<{todos:Itodo[]}>()) 