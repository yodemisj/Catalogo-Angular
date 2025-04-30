import { Component, inject } from '@angular/core';
import { ProductComponent } from "../product.component";
import { ProductService } from "../product.service";
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  private productService = inject(ProductService);
  selectedProduct: Product | null = null;

  getProductList() {
    return this.productService.getProducts();
  }

  onProductSelected(product: Product) {
    this.selectedProduct = product;
  }
}
