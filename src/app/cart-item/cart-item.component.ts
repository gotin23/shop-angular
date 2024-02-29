import { Component, Input } from '@angular/core';
import { CartItem } from '../app.types';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() item!: CartItem;
  constructor(private cartService: CartService) {}
  addToCart(item: CartItem) {
    this.cartService.increaseCartItem(item);
  }
  removeFromCart(item: CartItem) {
    this.cartService.decreaseCartItem(item);
  }
  deleteFromCart(item: CartItem) {
    this.cartService.deleteFromCart(item);
  }
}
