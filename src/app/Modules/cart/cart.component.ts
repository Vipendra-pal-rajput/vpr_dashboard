import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../Services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
    alert('Cart cleared');
  }
  clearCartById(product:any){
    this.cartService.clearCartById(product);
    this.cartItems = this.cartService.getCartItems();
    alert('Product Removed From cart');
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
