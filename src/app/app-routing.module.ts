import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { CreateBlogComponent } from './blog/create-blog/create-blog.component';
import { SingleBlogComponent } from './blog/single-blog/single-blog.component';


const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateBlogComponent },
  {
    path: 'blogs/:blogId',
    component: SingleBlogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
