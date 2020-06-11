import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from '../models/Post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  post$ = new BehaviorSubject<Post[]>([]);
  url: string = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
  constructor(private http: HttpClient) {
  }

  // Get post
  getPost(): Observable<Post[]> {
    return this.http.get(this.url) as Observable<Post[]>;
  }

  // Add post
  addPost(post: Post) {
    return this.http.post(this.url, post);
  }
}
