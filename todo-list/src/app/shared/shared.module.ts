import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/layout/header/header.component';
import { PaintDirective } from '../directives/paint.directive';
import { PointerDirective } from '../directives/cursorpointer.directive';

@NgModule({
  declarations: [HeaderComponent, PaintDirective, PointerDirective],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, PaintDirective, PointerDirective]
})
export class SharedModule { }
