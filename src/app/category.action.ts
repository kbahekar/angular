import { createAction, props } from "@ngrx/store";
import { Category } from "./category.store";


export const categoryAction = createAction('[CATEGORY]', props<{ category: Category }>());




