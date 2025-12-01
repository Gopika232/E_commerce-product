import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Car {
  constructor(){

  }
  private carNameSubject = new BehaviorSubject<string[]>([]);
  carNames$ = this.carNameSubject.asObservable();


  addCarName(name:string){
    const currentNames = this.carNameSubject.getValue();
    const updateNames = [...currentNames,name];
    this.carNameSubject.next(updateNames);


  }
  
}
