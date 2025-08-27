import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { Cart } from './components/cart/cart';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: Cart }
];