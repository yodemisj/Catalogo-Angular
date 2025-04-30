import { Injectable } from '@angular/core';
import { products } from '../fakeDB';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts() {
    return products;
  }

  getProduct(id: number) {
    return products.find((product) => product.id === id);
  }
}
