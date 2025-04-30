import { Component, inject, input } from '@angular/core';
import { Product } from '../../product/product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  private cartService = inject(CartService);
  item = input.required<Product>();

  removeFromCart(id: number) {
    this.cartService.removeItem(id);
  }
}
