import { CommonModule } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { Form } from '../form/form';
import { FormsModule } from '@angular/forms';
import { Car } from '../car';

@Component({
  selector: 'app-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit{
  // @Input()carNames:string[]=['Ford','Ferrari']
  carNames:string[]=[];

  constructor(private carService: Car){

  }
  ngOnInit(): void {
    this.carService.carNames$.subscribe((names)=> {
      this.carNames = names;
    })
  }

}
