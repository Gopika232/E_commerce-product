import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../car';

@Component({
  selector: 'app-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
    carName:string ='';
    // @Output()carAdded = new EventEmitter<string>();
    constructor(private CarService:Car){

    }

    onSubmit() {
      console.log(this.carName);
      //Sending the value outside
      // this.carAdded.emit(this.carName);
      //Sending the value using Car Service
      this.CarService.addCarName(this.carName)

      this.carName='';
  }
}
