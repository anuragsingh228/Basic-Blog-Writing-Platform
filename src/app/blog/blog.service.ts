import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable( {providedIn: "root"})
export class BlogService {

  constructor(private http: HttpClient){

  }

  createBlog(title: string, content: string){
    const blogData= {
      title: title,
      content: content
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
}
