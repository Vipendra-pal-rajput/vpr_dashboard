import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = [
    { id: 1, name: 'Fastrack Optimus Pro', description: '1.43 AMOLED Display with AOD and Industry Best 466 x 466 Pixel Resolution', price: 2999 , image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/z/r/d/-original-imagywnzhh3dnqvk.jpeg?q=70&crop=false'},
    { id: 2, name: 'Mivi Play 5 W Portable Bluetooth Speaker', description: 'Power Output(RMS): 5 ', price: 800 ,image: 'https://rukminim2.flixcart.com/image/416/416/kplisnk0/speaker/mobile-tablet-speaker/8/k/e/bs5pl-bk-mivi-original-imag3sgmv9hzrncf.jpeg?q=70&crop=false'},
    { id: 3, name: 'Google Pixel 9', description: 'Meet the Pixel 9 with Gemini. Engineered by Google, Pixel gets the best of Google’s AI first. So that you can take amazing photos, make edits like magic, and get things done even easier.', price: 70000, image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/f/q/pixel-9-ga05843-in-google-original-imah3pfghdwgzmfd.jpeg?q=70&crop=false' },
  ];


  cart = [];

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }

  addProduct(product: any) {
    this.products.push(product);
  }

  editProduct(id: number, updatedProduct: any) {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
  

}
