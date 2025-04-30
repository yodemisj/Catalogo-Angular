import { Injectable, signal } from "@angular/core"; 
import { Product } from "../product/product.model";

@Injectable({providedIn: 'root'})
export class CartService {
    private items = signal<Product[]>([]);
    
    getCartItems () {
        return this.items();
    }

    addItem(item: Product) {
        const currentItems = this.items();
        const itemExists = currentItems.some(existingItem => existingItem.id === item.id);
        if (!itemExists) {
            this.items.set([...currentItems, item]);
            window.alert("Produto adicionado com sucesso!");
        } else {
            window.alert("O produto já está no carrinho!");
        }
    }

    removeItem(id: number) {
        const currentItems = this.items();
        const itemExists = currentItems.some(existingItem => existingItem.id === id);
        if (itemExists) {
            this.items.set(currentItems.filter(item => item.id !== id));
        }
    }
}