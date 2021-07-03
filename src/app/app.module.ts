import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuillModule } from 'ngx-quill';
import { CreateBlogComponent } from './blog/create-blog/create-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SingleBlogComponent } from './blog/single-blog/single-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogListComponent,
    NavbarComponent,
    CreateBlogComponent,
    SingleBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
