import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title.component';
import { TodosComponent } from './components/todos/todos.component';
import { SampleService } from './services/sample.service';
import { PaintDirective } from './directive/paint.directive';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { ListComponent } from './components/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TodosComponent,
    PaintDirective,
    PostsComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
