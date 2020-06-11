import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { PostsComponent } from './components/posts/posts.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './guards/auth.guard';
import { PostResolver } from './resolvers/post.resolver';


const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'post',
    component: PostsComponent,
    canActivate: [AuthGuard],
    resolve: {
      posts: PostResolver
    }
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: 'about',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
