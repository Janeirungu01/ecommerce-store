import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  template: ` 
  <app-navbar></app-navbar>
  <router-outlet></router-outlet> 
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('commerce-store');
}
