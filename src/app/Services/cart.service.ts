import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any[] = [];

  constructor() { }

  addToCart(product: any) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  clearCartById(product:any){
    const productIndex = this.cart.findIndex((item: any) => item.id === product.id);
    if (productIndex !== -1) {
        this.cart.splice(productIndex, 1);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCartItems() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
  }
}
