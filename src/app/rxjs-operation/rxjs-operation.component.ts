import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concat, concatMap, exhaustMap, filter, interval, map, mergeMap, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-rxjs-operation',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './rxjs-operation.component.html',
  styleUrl: './rxjs-operation.component.css'
})
export class RxjsOperationComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  // let postId = of(1, 2, 3, 4, 5);
  // postId.pipe(switchMap(id=>{
  //   return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // })).subscribe(data => {

  //     console.log('Data fetched successfully');
  //     console.log(data);
   
    
  // })

let source1$ = interval(1000).pipe(
  take(5),
  map(val => `Source 1: ${val}`)
)
let source2$ = interval(1000).pipe(
  take(5),
  map(val => `Source 2: ${val}`)
)
// concat(source1$, source2$).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('All sources completed')
// });
// source1$.pipe(
//   concatMap(() => source2$)
// ).subscribe(console.log)
// source1$.pipe(concatMap(variable => {
//   console.log(variable);
//   return source2$.pipe(
//     map(val => `${variable} - ${val}` )
//   );
// }
// )).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('All sources completed')  
// });
    const newObservable = interval(1000);
    newObservable.pipe(
      filter((n) => {
        return n % 2 === 0;
      }),
      map((n) => {
        return `Even number: ${n}`;
      })
    ).subscribe((number) => {
      console.log('Interval number:', number);
    });
  }
}
