import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Empser {
  employees = [
    { id: 1, name: 'Gopika', role: 'Developer' }
  ];

  addEmployee(emp: any) {
    emp.id = this.employees.length + 1;
    this.employees.push(emp);
  }

  getEmployees() {
    return this.employees;
  }

}
