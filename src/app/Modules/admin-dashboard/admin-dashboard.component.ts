import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  products: any[] = [];
  newProduct: any = { id: 0, name: '', description: '', price: 0 };

  constructor(private productService: ProductService) {  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    this.productService.addProduct(this.newProduct);
    this.products = this.productService.getProducts();
    this.newProduct = { id: 0, name: '', description: '', price: 0 };
  }

  editProduct(product: any) {
    this.productService.editProduct(product.id, product);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }


  // addProduct() {
  //   this.newProduct.id = this.products.length + 1;
  //   this.products.push(this.newProduct);
  //   this.newProduct = { id: null, name: '', price: null };
  // }

  // deleteProduct(product) {
  //   this.products = this.products.filter(p => p !== product);
  // }

}
