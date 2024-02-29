import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article, CartItem } from '../app.types';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() article!: Article;
  @Input() visible!: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();
  constructor(private cartService: CartService) {}
  items: Array<CartItem> = [];

  addToCart(article: Article) {
    this.cartService.increaseCartItem(article);
  }
}
