// import { Component } from '@angular/core';
// import { RouterOutlet, RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   imports: [RouterLink, RouterOutlet],
//   styleUrl: './navbar.css'
//   template: `
//     <nav>
//       <a routerLink="/">Home</a> |
//       <a routerLink="/cart">Cart</a>
//     </nav>
//     <router-outlet></router-outlet>
//   `
// })
// export class Navbar {

// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/cart">Cart</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class Navbar {}
