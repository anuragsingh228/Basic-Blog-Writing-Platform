import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

  id=""
  title=""
  content=""
  viewOnlyEditorOption = {
		toolbar: false,
		clipboard: {
			matchVisual: false
		}
	};
  constructor(public blogService : BlogService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
			if (true) {
				this.id = params['blogId'];
        console.log(this.id)
			}
		});
    this.getBlog(this.id);

  }

  getBlog(id){
    this.blogService.getBlogById(id, (blog) => {
      this.title=blog.title;
      this.content=blog.content;
    });
  }

}
