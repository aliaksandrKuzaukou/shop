import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { ProductModel } from '../../../models/product-model';
import { Subscription } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

type Options = {
  value: string,
  name: string,
};

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})

export class CartListComponent implements OnInit, OnDestroy {
  isAsc = true;
  options: Options[] = [
    { value: 'name', name: 'Name' },
    { value: 'totalPrice', name: 'Price' },
    { value: 'quantity', name: 'Amount' },
  ];
  products: ProductModel[] = [];
  selectedOption: string = this.options[0].value;
  private itemsChanged: Subscription;

  constructor(public cartService: CartService) { }
  trackByItem(index: number, item: ProductModel): number { return item.id; }

  ngOnInit(): void {
    this.itemsChanged = this.cartService.itemsChanged$.pipe(
      startWith('start'), // фейковый старт потока, чтобы запустить updateProducts
      tap(() => this.updateProducts()),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.itemsChanged.unsubscribe();
  }

  private updateProducts(): void {
    this.products = this.cartService.getShoppingList;
  }
}
