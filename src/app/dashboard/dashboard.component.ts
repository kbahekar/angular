import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category.store';
import { Store } from '@ngrx/store';
import { CategoryState, selectCategory } from '../category.selector';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe,CommonModule, JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  category$: Observable<Category | null>;
constructor(public store: Store<{ category: CategoryState }>) {
  this.category$ = this.store.select(selectCategory);
}
}
