import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Todo } from '../models/Todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos$ = new BehaviorSubject<Todo[]>([
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
  ]);
  todos: Todo[] = [];
  constructor() {
    this.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  // Get Todos
  getTodos():Observable<Todo[]> {
    return this.todos$.asObservable();
  }

  // Delete Todo
  deleteTodo(todo: Todo) {
    const todos = this.todos.filter(x => x.id != todo.id);
    this.todos$.next(todos);
  }

  // Add Todo
  addTodo(todo:Todo) {
    this.todos$.next([...this.todos, todo]);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo) {
    const todos = this.todos.map(x => {
      if(x.id == todo.id) {
        x.completed = !x.completed;
      }
      return x;
    })
    this.todos$.next(todos);
  }
}
