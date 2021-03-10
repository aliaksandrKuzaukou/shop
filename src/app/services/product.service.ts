import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { listProducts } from '../database/database';
import { ProductModel } from '../models/product-model';
@Injectable()
export class ProductService {

  getProducts(): Observable<ProductModel[]> {
    return of(listProducts);
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
