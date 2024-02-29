import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../services/cart.service';
import type { CartItem } from '../app.types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private cartService: CartService) {}
  items: Array<CartItem> = [];
  cartOpen: boolean = false;
  get total(): number {
    return this.cartService.cart.reduce((sum, value) => {
      return sum + value.price * value.quantity;
    }, 0);
  }
  cartShowBtnValue() {
    return this.cartOpen ? 'X' : 'Voir le panier';
  }
  ngOnInit() {
    this.items = this.cartService.cart;
  }

  toggleCart() {
    this.cartOpen = !this.cartOpen;
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = this.cartService.cart;
  }
}
