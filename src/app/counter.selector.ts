import { createSelector } from "@ngrx/store";
import { Icounter } from "./counter.store";



export const selectCounter = (state: Icounter) => state.counter;
export const counterSelector = createSelector(
  selectCounter,
  (counter) => counter
);