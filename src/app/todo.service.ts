import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itodo } from './todo.store';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private base_URL ='https://jsonplaceholder.typicode.com/todos'
  constructor(private http:HttpClient) { }


  getTodo():Observable<Itodo[]> {
    return this.http.get<Itodo[]>(this.base_URL )
  }
}
