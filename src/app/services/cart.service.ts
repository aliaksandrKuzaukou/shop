import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { ProductService } from '../services/product.service';

@Injectable()
export class CartService {
  public totalSum = 0;
  public totalQuantity = 0;

  shoppingList: ProductModel[] = [];

  constructor(private productsService: ProductService) { }

  get getShoppingList(): ProductModel[] {
    return this.shoppingList;
  }

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
          this.increaseQuantity(id);
        }
        this.updateCartTotalSumAndQuantity();
      });
    }
  }

  increaseQuantity(id: number): void {
    this.changeQuantity(id, 1);
  }

  decreaseQuantity(id: number): void {
    const currentProduct = this.getShoppingList.find((item) => item.id === id);
    if (currentProduct.quantity === 1){
      this.removeProductFromCart(id);
    }
    else {
      this.changeQuantity(id, -1);
    }
  }

  removeProductFromCart(id: number): void {
    this.shoppingList = this.shoppingList.filter(item => item.id !== id);
    this.productsService.updateProductByIdIsAvailableValue(id, true);
    this.updateCartTotalSumAndQuantity();
  }

  updateCartTotalSumAndQuantity(): void{
    this.totalQuantity = this.shoppingList.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.quantity;
    }, 0);

    this.totalSum = this.shoppingList.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price;
    }, 0);
  }

  private isProductInCart(id: number): boolean {
    return this.shoppingList.some(item => item.id === id);
  }

  private changeQuantity(id: number, diffQuantity: number): void{
    this.shoppingList = this.getShoppingList.map((item) => {
      return item.id === id
        ? {
            ...item,
            quantity: item.quantity + diffQuantity,
            price: this.productsService.getProductById(id).price * (item.quantity + diffQuantity),
        }
        : {
            ...item,
        };
    });
    this.updateCartTotalSumAndQuantity();
  }
}
