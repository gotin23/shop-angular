import { Component } from '@angular/core';
import { ShopComponent } from '../shop/shop.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ShopComponent, CartComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
