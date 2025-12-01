import { Component, OnInit, viewChild ,ElementRef, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
// export class Hello implements AfterViewInit {
//   @viewChild('nameInput') nameInput!: ElementRef;
//   ngAfterViewInit(): void {
//     this.nameInput.nativeElement.focus();
    
//   }
//   //focus the input once view Initialized
// }
export class Hello implements OnInit,OnDestroy{
  counter:number=0;
  private intervalId:any;

  //Starts the timer
  ngOnInit(): void {
    setInterval(()=>{
      this.counter++;

    },1000)
    console.log('Interval Id',this.intervalId)
  }
  //clear the timer
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    console.log('Ondestroy timer stopped')
  }

}