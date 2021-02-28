import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { CartModule } from '../cart/cart.module';
import { HighlightDirective, FontSizeDirective } from './directives';


@NgModule({
  declarations: [
    NavigationComponent,
    HighlightDirective,
    FontSizeDirective,
  ],
  imports: [
    CommonModule,
    CartModule
  ],
  exports: [
    NavigationComponent,
    HighlightDirective,
    FontSizeDirective
  ]
})
export class SharedModule { }
