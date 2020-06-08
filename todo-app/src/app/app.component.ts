import { Component, OnInit } from '@angular/core';
import { SampleService } from './services/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-app sdads';
  items: string[];


  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
    this.sampleService.getTodo().subscribe(res => {
      console.log(res);
      this.items = res;
    });
  }

  addTodo(todo: string) {
    //this.items.push(todo);
    this.items = [...this.items, todo];
  }
}
