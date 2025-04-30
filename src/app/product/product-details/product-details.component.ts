import { Component, inject, signal } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../../cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  // product = input.required<Product>();
  product = signal<Product | undefined>(undefined);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
     this.product.set(this.productService.getProduct(id));
  }

  addToCart(product: Product) {
    this.cartService.addItem(product);
    this.router.navigateByUrl("/cart");
  }
}
