import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

type Post = any;

@Injectable({
  providedIn: "root"
})
export class JsonPlaceholderService {
  private API_URL: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {}

  getAllPost(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/posts`);
  }

  getSinglePost(postID: string): Observable<Post> {
    return this.http.get<Post>(`${this.API_URL}/posts/${postID}`);
  }
}
