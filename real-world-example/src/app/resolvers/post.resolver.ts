import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { Injectable } from '@angular/core';
import { PostService } from '../services/post.service';


@Injectable({
  providedIn: "root"
})
export class PostResolver implements Resolve<Observable<Post[]>> {
  constructor(private postService: PostService) {

  }

  resolve() {
    return this.postService.getPost();
  }
}
