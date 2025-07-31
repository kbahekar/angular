import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from '../category.store';
import { CategoryState, selectCategory } from '../category.selector';
import { Observable } from 'rxjs';

import { AsyncPipe, CommonModule } from '@angular/common';
import { categoryAction } from '../category.action';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { RouterModule } from '@angular/router';
import { hoverDirective } from '../hover.directive';
import { starPipe } from '../star.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CommonModule, DashboardComponent,RouterModule,hoverDirective,starPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  categories = [
    { categoryId: 1, categoryName: 'Electronics' },
    { categoryId: 2, categoryName: 'Books' },
    { categoryId: 3, categoryName: 'Clothing' }
  ];
  category$: Observable<Category | null>;
constructor(public store: Store<{ category: CategoryState }>) {
  this.category$ = this.store.select(selectCategory);
}




ngOnInit(): void {

}

onSelect(e: any) {
console.log(e.target.value);
this.store.dispatch(categoryAction({
  category: {
    categoryId: e.target.value,
    categoryName: e.target.options[e.target.selectedIndex].text
  }
}))

}
}
