import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product/product-item/product-item.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { FirstComponentComponent } from '../product/first-component/first-component.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    FirstComponentComponent,
    ProductItemComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FirstComponentComponent,
    ProductItemComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
