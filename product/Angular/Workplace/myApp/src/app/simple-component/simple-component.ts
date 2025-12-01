import { Component, ContentChildren, OnInit ,QueryList,ElementRef, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-simple-component',
  imports: [],
  templateUrl: './simple-component.html',
  styleUrl: './simple-component.css',
})
export class SimpleComponent implements AfterContentInit{
  @ContentChildren('messageContent')messageElements !: QueryList <ElementRef>;
 ngAfterContentInit(): void {
    this.messageElements.forEach(element =>{
      console.log('Projected content',element.nativeElement.textContent)
    })
  }

}
