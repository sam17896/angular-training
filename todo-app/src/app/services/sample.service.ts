import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SampleService {


  todo$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([
    'item1',
    'item2',
    'item3'
  ]);

  constructor() {}


  getTodo() {
    return this.todo$.asObservable();
  }


  setTodo(todo: string[]) {
    this.todo$.next(todo);
  }
}
