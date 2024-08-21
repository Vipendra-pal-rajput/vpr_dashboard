import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { CartService } from '../../Services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = [];
  searchQuery: string = '';

  constructor(private productService: ProductService, private cartService: CartService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }

  searchProducts() {
    this.products = this.productService.getProducts().filter(p => p.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

}
