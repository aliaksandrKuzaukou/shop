import { Component, Input, OnInit } from '@angular/core';
import { CategoryEnum } from '../enums/category-enum';
import { ProductModel } from '../models/product-model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  @Input() product: ProductModel;

  name: string;
  description: string;
  price: number;
  category: CategoryEnum;
  isAvailable: boolean;

  constructor(private cartService: CartService) {}
  onBuy(): void {
    this.cartService.addProductToCart(this.product.id);
    console.log('You have bought new product');
  }
  ngOnInit(): void {
    this.name = this.product.name;
    this.description = this.product.description;
    this.price = this.product.price;
    this.category = this.product.category;
    this.isAvailable = this.product.isAvailable;
  }
}
