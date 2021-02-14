import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { ProductModel } from '../../../models/product-model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})

export class CartListComponent{
  constructor(public cartService: CartService) { }
  trackByItem(index: number, item: ProductModel): number {return item.id; }
}
