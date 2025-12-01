import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './03-Signals/counter/counter';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Counter,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
// protected readonly title = signal('counter-app');
movies=['zoo','3','love','today']
}
