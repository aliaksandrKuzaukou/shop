import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements AfterViewInit {

  constructor(public cartService: CartService) { }

  @ViewChild('appTitle') appTitle: ElementRef | null = null;

  ngAfterViewInit(): void {
    if (this.appTitle) {
      this.appTitle.nativeElement.textContent = 'My Super Store';
    }
  }
}
