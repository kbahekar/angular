import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DecreseCounter, IncreaseCounter, Reset } from '../counter.action';
import { Observable } from 'rxjs';
import { counterSelector, selectCounter } from '../counter.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Icounter } from '../counter.store';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent  implements OnInit{
  count$: Observable<null | number>;
    constructor(public store:Store<Icounter>){
      this.count$ = this.store.select(('counter'));
      
    }
  
  
  
    ngOnInit(): void {
      // this.store.dispatch
    
  }

OnIncrease(){
 this.store.dispatch(IncreaseCounter())
}
OnDecrease(){
  this.store.dispatch(DecreseCounter())
}
OnReset(){
  this.store.dispatch(Reset());
}
}
