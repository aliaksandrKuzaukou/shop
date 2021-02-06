import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { ProductService } from '../services/product.service';
@Injectable()
export class CartService {
  public totalSum = 0;
  public totalQuantity = 0;
  shoppingList: ProductModel[] = [];
  constructor(private productsService: ProductService) { }

  addProductToCart(id: number): void {
    if (!this.isProductInCart(id)) {
      const product: ProductModel = this.productsService.getProductById(id);
      product.quantity = 1;
      this.shoppingList.push(this.productsService.getProductById(id));
      this.productsService.updateProductByIdIsAvailableValue(id, false);
      this.updateCartTotalSumAndQuantity();
    } else {
      this.shoppingList.forEach(item => {
        if (item.id === id) {
          item.quantity += 1;
        }
        this.updateCartTotalSumAndQuantity();
      });
    }
  }

  removeProductFromCart(id: number): void {
    this.shoppingList = this.shoppingList.filter(item => item.id !== id);
    this.updateCartTotalSumAndQuantity();
  }

  updateCartTotalSumAndQuantity(): void{
    this.totalQuantity = this.shoppingList.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.quantity
    }, 0);

    this.totalSum = this.shoppingList.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price
    }, 0);
  }

  private isProductInCart(id: number): boolean {
    return this.shoppingList.some(item => item.id === id);
  }
}
