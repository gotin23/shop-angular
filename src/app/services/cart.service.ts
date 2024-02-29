import { Injectable } from '@angular/core';
import type { CartItem, Article } from '../app.types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Array<CartItem> = [];

  increaseCartItem(article: CartItem | Article) {
    let item = this.cart.find((item) => item.id === article.id);
    if (!item) {
      this.cart.push({
        id: article.id,
        name: article.name,
        price: article.price,
        quantity: 1,
        image: article.image,
      });
    } else {
      item.quantity++;
    }
  }

  decreaseCartItem(article: Article | CartItem) {
    let item = this.cart.find((item) => item.id === article.id);

    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.deleteFromCart(item);
      }
    }
  }

  deleteFromCart(article: Article | CartItem) {
    let itemIndex = this.cart.findIndex((item) => item.id === article.id);
    this.cart.splice(itemIndex, 1);
  }

  clearCart() {
    this.cart = [];
  }
}
