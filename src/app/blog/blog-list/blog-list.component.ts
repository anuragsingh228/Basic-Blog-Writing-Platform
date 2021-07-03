import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  expanded : boolean
  navbarWidth : any
  allblogs: any;
  main=[];
  viewOnlyEditorOption = {
		toolbar: false,
		clipboard: {
			matchVisual: false
		}
	};
  constructor(public blogService: BlogService) {
   }

  ngOnInit(): void {
    this.expanded=true;
    this.navbarWidth ={'width': 'auto'}
    this.allblogs= '';
    this.getAllBlogs();
  }
  toggleNavbar(){
    if (!this.expanded) {
      this.expanded = true;
      this.navbarWidth ={'width': 'auto'}
    } else {
      this.expanded = false;
      this.navbarWidth ={'width': 0}
    }
  }

   getAllBlogs(){
    this.blogService.getAllBlog((blogs) => {
      this.allblogs=blogs;
    });
  }

  async trimContent(content){
    let trimcontent = await content.split(' ').slice(0,2).join('+');
    trimcontent=trimcontent+"...";
    console.log(trimcontent);
    return trimcontent;
  }


}
