import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post{
  id:number;
  title:string;
  body:string;
  userId:number
}
@Injectable({
  providedIn: 'root',
})
export class Postservice {
  private apiurl="https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient){}
  //GET REQUEST
  getPosts():Observable <Post[]>{
    return this.http.get<Post[]>(this.apiurl)
  }
  //
  getPost(id:number):Observable<Post>{
    return this.http.get<Post>(`${this.apiurl}/${id}`);
  }
  //POST REQUEST
  addPost(post:Partial<Post>):Observable<Post>{
    return this.http.post<Post>(this.apiurl, post)
  }
  //UPDATE OR PUT REQUEST
  updatePost(post:Post){
    return this.http.put<Post>(`${this.apiurl}/${post.id}`,post);
  }
  //DELETE REQUEST
  deletePost(id:number):Observable<any>{
    return this.http.delete(`${this.apiurl}/${id}`)

  }
}
