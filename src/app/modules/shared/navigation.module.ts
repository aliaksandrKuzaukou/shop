import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { CartModule } from '../cart/cart.module';


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    CartModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }
