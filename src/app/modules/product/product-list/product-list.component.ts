import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  constructor(public productService: ProductService) { }
}
