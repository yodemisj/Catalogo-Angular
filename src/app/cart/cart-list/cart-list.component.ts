import { Component, computed, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart-list',
  imports: [CartItemComponent],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css',
})
export class CartListComponent {
  private cartService = inject(CartService);
  total = computed(() => {
    const products = this.cartService.getCartItems();
    return products.reduce((acc, product) => acc + product.price, 0);
  });

  getCartItems() {
    return this.cartService.getCartItems();
  }
}
