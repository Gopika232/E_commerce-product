import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { List } from './list/list';
import { Form } from './form/form';
import { Child } from './child/child';
import { SimpleComponent } from './simple-component/simple-component';
import { Hello } from './Hello/hello';
import { Post } from './post/post';
import { Postservice } from './postservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,List,Form,Child,SimpleComponent,Hello,Post,Postservice],
  templateUrl: './app.html',
  // template : "{{title}}",
  styleUrl: './app.css'
})
export class App{
  showHello=true;

}
// export class App implements DoCheck{ 
//   title = 'Hello';
//   prevtitle = "Hello";
//   ngDoCheck(): void {
//     if (this.title!== this.prevtitle){
//       console.log("Title property changed value",this.title);
//       this.prevtitle=this.title;
//     }
//     console.log('change');
//   }
  // message = '';
  // ngOnInit(): void {
  //   this.message = ' Welcome to our Angular Course!';

  // }
//   itemList = [
//     {id:1,name: 'Apple' },
//     {id:2,name: 'Mango' },
//     {id:3,name: 'Orange' },
//     {id:4,name: 'grapes' },
//     {id:5,name: 'Papaya' },
//     {id:1,name: 'Apple' },
//   ]
// title='hello';

  //  protected readonly title = signal('myApp');
  // fullname="good";
  // getName(){
  // return 'gopika';
  // imageUrl="C:\Users\gopik\OneDrive\Pictures\Screenshots\Screenshot 2024-08-31 134825.png";
  // imageAlt = "Angular logo";
//   carNames:string[]=[];
//   onCarAdded(carName:string){
//     console.log(carName,'From App')
//     this.carNames.push(carName);
// }
