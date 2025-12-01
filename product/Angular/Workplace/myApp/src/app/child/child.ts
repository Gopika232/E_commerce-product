import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnChanges{
  @Input() items:any[] =[];
  @Input() title = '';

 ngOnChanges(changes: SimpleChanges): void {
  if (changes['items']){
    console.log('Items property changes',changes['items']);
   }
  if (changes['title']){
    console.log('Title property changes',changes['title'].firstChange);
   }
 }

}
