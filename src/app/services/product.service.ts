import { Injectable } from '@angular/core';
import { ListProducts } from '../database/database';
import { ProductModel } from '../models/product-model';
@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): ProductModel[] {
    return ListProducts;
  }

  getProductById(id: number): ProductModel | undefined {
    return ListProducts.find((item) => item.id === id);
  }
  
  updateProductByIdIsAvailableValue(id: number, isAvailableValue: boolean): void{
    const productToReturn = ListProducts.find((item) => item.id === id);
    const index = ListProducts.indexOf(productToReturn);
    ListProducts[index].isAvailable = isAvailableValue;
  }
}
