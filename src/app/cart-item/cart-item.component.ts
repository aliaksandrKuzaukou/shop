import { Component, Input } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() product: ProductModel;
  @Input() index: number;

  constructor(public cartService: CartService, public productService: ProductService) { }

  trackByItem(index: number, item: ProductModel): number { return item.id; }

  onRemove(): void {
    this.cartService.removeProductFromCart(this.product.id);
    this.productService.updateProductByIdIsAvailableValue(this.product.id, true);
  }
}
