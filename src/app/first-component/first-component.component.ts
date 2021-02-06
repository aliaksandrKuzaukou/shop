import { Component, Input } from '@angular/core';
import { ProductModel } from '../models/product-model';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent{
  @Input() product: ProductModel;
}
