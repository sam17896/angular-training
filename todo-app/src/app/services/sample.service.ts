import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SampleService {


  todo$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([
    'item1',
    'item2',
    'item3'
  ]);
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get(this.url);
  }

  addPost(body) {
    return this.http.post(this.url, body);
  }
  getTodo() {
    return this.todo$.asObservable();
  }


  setTodo(todo: string[]) {
    this.todo$.next(todo);
  }
}
