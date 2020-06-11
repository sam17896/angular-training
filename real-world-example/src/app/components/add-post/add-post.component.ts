import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  title: string;
  body: string;

  @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.onAddPost.emit({
      title: this.title,
      body: this.body,
      userId: 1,
      id: 1
    })
  }

}
