import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/product-model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent{
  @Input() product: ProductModel;
  // не стоит тут внедрять зависимость.
  // лучше сделать аутпут, а зависимость внедрить в родителе, там уже есть одна зависимость
  constructor(private cartService: CartService) { }

  onBuy(): void {
    this.cartService.addProductToCart(this.product.id);
    console.log('You have bought a new product');
  }
}
