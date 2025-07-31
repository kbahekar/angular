import { createReducer, on } from "@ngrx/store";
import { Category } from "./category.store";
import { categoryAction } from "./category.action";


export const initialState: Category[] = [
    
];

export const categoryReducer = createReducer(
  initialState,
  on(categoryAction, (state, { category }) => {
    console.log('Category Action Triggered:', category); // Debugging log
    return {
      ...state,
      category
    };
  })
);
