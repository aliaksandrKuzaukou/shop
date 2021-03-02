import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from '../cart/cart-list/cart-list.component';
import { CartItemComponent } from '../cart/cart-item/cart-item.component';
import { CartService } from '../../services/cart.service';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [CartService],
  exports: [
    CartListComponent,
    CartItemComponent
  ]
})
export class CartModule { }
