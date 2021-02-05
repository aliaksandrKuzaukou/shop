import { TestBed, async, inject } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('Service: Products', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
  });

  it('should ...', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
