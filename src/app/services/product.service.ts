import { Injectable } from '@angular/core';
import { listProducts } from '../database/database';
import { ProductModel } from '../models/product-model';
@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): ProductModel[] {
    return listProducts;
  }

  getProductById(id: number): ProductModel | undefined {
    return listProducts.find((item) => item.id === id);
  }

  updateProductByIdIsAvailableValue(id: number, isAvailableValue: boolean): void{
    const productToReturn = listProducts.find((item) => item.id === id);
    const index = listProducts.indexOf(productToReturn);
    listProducts[index].isAvailable = isAvailableValue;
  }
}
