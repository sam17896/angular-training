import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h1>{{ title }}</h1>`
})
export class TitleComponent {
  @Input() title: string;

}
