import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  items: string[];
  todoItem: string;


  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
    this.sampleService.getTodo().subscribe(res => {
      console.log(res);
      this.items = res;
    });
  }

  onClick() {
    this.sampleService.setTodo([...this.items, this.todoItem]);
  //  this.addTodo.emit(this.todoItem);
  }

}
