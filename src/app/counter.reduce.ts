import { createReducer, on } from "@ngrx/store";
import { DecreseCounter, IncreaseCounter, Reset } from "./counter.action";



const initialCounter = 0;


export const counterReduce = createReducer(initialCounter,on(IncreaseCounter,(state)=> state + 1)
,on(DecreseCounter,(state)=> state -1),
on(Reset,(state)=> 0))