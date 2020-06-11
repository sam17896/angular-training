import { Directive, AfterViewInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[paint]'
})
export class PaintDirective implements AfterViewInit {

  @Input() customColor = 'red';
  constructor(private elementRef: ElementRef) {

  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.style.backgroundColor = this.customColor;
  }
}
