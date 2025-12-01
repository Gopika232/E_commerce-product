import { Component, OnInit } from '@angular/core';
import { Postservice } from '../postservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule,Postservice],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post implements OnInit {
  constructor(private postservice:Postservice){

  }


  ngOnInit(): void {
    this.postservice.getPosts().subscribe((data)=>{
      this.posts = DataTransferItemList
    })
  newPost:partial<Post> = {"title:"",body:"",userId:1}
  
  submitPost(){
    this.postservice.addPost()
  }

}
