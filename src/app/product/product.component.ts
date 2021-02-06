import { Component, Input } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  @Input() product: ProductModel;
  constructor(private cartService: CartService) { }

  onBuy(): void {
    this.cartService.addProductToCart(this.product.id);
    console.log('You have bought new product');
  }
}
