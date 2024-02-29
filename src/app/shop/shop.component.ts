import { Component } from '@angular/core';
import type { Article } from '../app.types';
import { CartService } from '../services/cart.service';
import { ArticleComponent } from '../article/article.component';
import data from '../../assets/data/data';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  title: string = 'hello world';
  counter: number = 0;
  articles: Array<Article> = [];

  ngOnInit() {
    this.articles = data;
  }
}
