import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  content =''
  constructor(public blogService: BlogService) {  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form, this.content);
    this.blogService.createBlog(form.value.title, this.content);
    form.resetForm();
    this.content='';
  }
}
