import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable( {providedIn: "root"})
export class BlogService {

  constructor(private http: HttpClient){}

  createBlog(title: string, content: string){
    const blogData= {
      title: title,
      content: content,
      by: localStorage.getItem("user_email")
    }
    this.http.post("http://localhost:3000/blog/create", blogData )
      .subscribe(response => {
        console.log(response);
      })
  }

  getAllBlog(callback) {
    this.http.get("http://localhost:3000/blog")
    .subscribe(res => {
      callback(res)
    })
  }

  getBlogById(id,callback) {
    this.http.get("http://localhost:3000/blog/"+id)
    .subscribe(res => {
      callback(res)
    })
  }

  // bulkTestcaseDownload( callback) {
	// 	this.http.get(
	// 		"http://localhost:3000/blog",
	// 		{},
	// 		(observable) => {
	// 			observable.subscribe(
	// 				(response) => callback(null, response),
	// 				(error) => callback(error, null)
	// 			);
	// 		}
	// 	);
	// }



  addComment(blogId: string, content: string, callback) {
    const comment = {
      by: localStorage.getItem("user_email"),
      blogid: blogId,
      content: content
    }

    this.http
      .post<any>(
        'http://localhost:3000/blog/comment',
        comment
      )
      .subscribe((responseData) => {
        callback(responseData);
      });
  }

  getAllCommentsOfBlog(blogId: string, callback) {
    this.http.get("http://localhost:3000/blog/comment/"+blogId)
    .subscribe(res => {
      console.log(res);
      callback(res)
    })

  }

  replyOnComment(commentId: string, comment: string, callback) {
    const reply = {
      id: commentId,
      comment: comment
    }
    this.http
      .post<any>(
        'http://localhost:3000/blog/comment/reply',
        reply
      )
      .subscribe((responseData) => {
        callback(responseData);
      });
  }
}
