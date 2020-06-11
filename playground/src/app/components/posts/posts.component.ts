import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { SampleService } from 'src/app/services/sample.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnChanges {

  @Input() sample: string = 'red';
  constructor(private sampleService: SampleService, private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.data.subscribe(res => {
      console.log(res);
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    console.log('hello');
  }

  addPost() {
    this.sample = 'some other stting';
    const body = {
      userId: 1,
      id: 1,
      title: 'sample',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    }

    this.sampleService.addPost(body).subscribe(res => {
      console.log(res);
    })
  }

}
