import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `<ul>
    <li *ngFor="let item of items">{{item}}</li>
  </ul>`
})
export class ListComponent implements OnChanges {
  @Input() items: string[];

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
