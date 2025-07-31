import { createSelector } from '@ngrx/store';
import { Category } from './category.store';

export interface CategoryState {
  category: Category | null;
}

export const selectCategoryState = (state: { category: CategoryState }) => state.category;

export const selectCategory = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.category
);
