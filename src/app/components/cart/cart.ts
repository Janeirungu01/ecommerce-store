import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
})
export class Cart implements OnInit {
  items: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    alert('Cart cleared!');
  }
}
