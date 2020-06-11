import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnChanges {

  items: string[];
  todoItem: string;
  sample: string = 'test';


  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
    this.sampleService.getTodo().subscribe(res => {
      console.log(res);
      this.items = res;
    });
  }

  ngOnChanges(simple: SimpleChanges) {
    console.log(simple);
  }

  onClick() {
    this.sampleService.setTodo([...this.items, this.todoItem]);
    //  this.addTodo.emit(this.todoItem);
  }

}
