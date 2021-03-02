import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { CartModule } from '../cart/cart.module';
import { HighlightDirective, FontSizeDirective } from './directives';
import { OrderByPipe } from './pipes/order-by.pipe';


@NgModule({
  declarations: [
    NavigationComponent,
    HighlightDirective,
    FontSizeDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    HighlightDirective,
    FontSizeDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
