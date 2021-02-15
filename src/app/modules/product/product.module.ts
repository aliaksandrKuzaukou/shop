import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product/product-item/product-item.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { FirstComponentComponent } from '../product/first-component/first-component.component';


@NgModule({
  declarations: [
    FirstComponentComponent,
    ProductItemComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstComponentComponent,
    ProductItemComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
