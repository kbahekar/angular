import { createAction, props } from "@ngrx/store";

export const IncreaseCounter =  createAction('[INCREASE] Increse counter');
export const DecreseCounter = createAction('[DECREASE] Decrese counter');
export const Reset = createAction('[RESET]');

