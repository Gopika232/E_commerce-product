import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Empser } from '../empser';
import { NamePipe } from '../pipes/name-pipe';

@Component({
  selector: 'app-emplist',
  imports: [CommonModule,NamePipe],
  templateUrl: './emplist.html',
  styleUrl: './emplist.css',
})
export class Emplist implements OnInit {
  employees: any[]=[];

  constructor(private empService: Empser) {}

  ngOnInit() {
    this.employees = this.empService.getEmployees();
  }

}
