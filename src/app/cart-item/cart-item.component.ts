import { Component, Input } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() product: ProductModel;
  @Input() index: number;

  constructor(public cartService: CartService) { }

  trackByItem(index: number, item: ProductModel): number { return item.id; }

  onIncreaseQuantity(id: number): void {
    this.cartService.increaseQuantity(id);
  }

  onDecreaseQuantity(id: number): void{
    this.cartService.decreaseQuantity(id);
  }

  onRemove(): void {
    this.cartService.removeProductFromCart(this.product.id);
  }
}
