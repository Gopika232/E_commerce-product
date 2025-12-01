import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empser } from '../empser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empform',
  imports: [FormsModule],
  templateUrl: './empform.html',
  styleUrl: './empform.css',
})
export class Empform {
  name: string = '';
  role: string = '';

  constructor(private empService: Empser, private router: Router) {}

  add() {
    if (this.name && this.role) {
      this.empService.addEmployee({ name: this.name, role: this.role });
      this.name = '';
      this.role = '';
      this.router.navigate(['/list']);
    }
  }

}
