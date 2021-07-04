import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() id = null;
  @Input() blog = null;
  isuserauthor = false;
  comments =[];

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
    this.getAllComment();
  }
  ngAfterViewInit(): void {

  }

  onComment(form: NgForm){
    console.log(form);
    this.blogService.addComment(this.id, form.value.comment, (comment) =>{
      this.comments.push(comment);
      form.resetForm();
      console.log(comment);
    })
  }
  getAllComment(){
    this.blogService.getAllCommentsOfBlog(this.id, (comments) => {
      this.isuserauthor= localStorage.getItem("user_email") === this.blog.by
      this.comments= comments;
    })
  }

  replyOnComment(id, form: NgForm){
    console.log(id, form);

     this.blogService.replyOnComment(id, form.value.reply, (response) => {
       console.log(response);
      this.getAllComment()
     })
  }


}
