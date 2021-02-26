import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product/product-item/product-item.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductItemComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
