import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, KeyValueDiffers, OnInit, DoCheck } from '@angular/core';
import { ProductModel } from '../../../models/product-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit, DoCheck {

  @Input() product: ProductModel;
  @Input() index: number;

  private differ: any;

  constructor(public cartService: CartService, private cdr: ChangeDetectorRef,
    private differs: KeyValueDiffers) { }

    ngOnInit(): void {
      this.differ = this.differs.find(this.product).create();
    }
  
    ngDoCheck(): void {
      const changes = this.differ.diff(this.product);
  
      if (changes) {
        this.cdr.markForCheck();
      }
    }
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
