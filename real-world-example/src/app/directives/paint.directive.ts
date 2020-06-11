import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[paint]'
})
export class PaintDirective implements AfterViewInit {


  @Input() customColor = '#e3e3e3';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.style.backgroundColor = this.customColor;
  }

}
