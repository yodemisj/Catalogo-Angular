import { Component, inject, input, output } from '@angular/core';
import { Product } from './product.model';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  private cartService = inject(CartService);
  product = input.required<Product>();
  selectProduct = output<Product>();

  addToCart(procut: Product) {
    return this.cartService.addItem(procut);
  }

  onSelect() {
    this.selectProduct.emit(this.product());
  }
}
