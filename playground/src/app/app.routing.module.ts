import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { PostsComponent } from './components/posts/posts.component';
import { AuthGuard } from './guards/auth.guard';
import { PostResolver } from './resolvers/post.resolver';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent
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
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
