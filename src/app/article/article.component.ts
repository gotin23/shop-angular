import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import type { Article } from '../app.types';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input() article!: Article;
  showModal: boolean = false;
  displayModal: () => void = () => {
    this.showModal = true;
  };
  constructor(private cartService: CartService) {}
  addToCart(article: Article) {
    this.cartService.increaseCartItem(article);
  }
}
