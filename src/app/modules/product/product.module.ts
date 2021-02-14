import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product/product-item/product-item.component';
import { ProductListComponent } from '../product/product-list/product-list.component';



@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductItemComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
