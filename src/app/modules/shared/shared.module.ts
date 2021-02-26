import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { CartModule } from '../cart/cart.module';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    NavigationComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    CartModule
  ],
  exports: [
    NavigationComponent,
    HighlightDirective
  ]
})
export class SharedModule { }
