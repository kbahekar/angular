import { createReducer, on } from "@ngrx/store";
import { Itodo } from "./todo.store";
import { loadTodos, loadTodosSuccess } from "./todo.action";




export interface ITodoState {
    todos:Itodo[];
}

export const initialState : ITodoState ={
    todos:[]
}

export const todoReduce = createReducer(
    initialState,
    on(loadTodos,(state)=> state),
    on(loadTodosSuccess,(state,{todos})=> ({ ...state, todos}))
)