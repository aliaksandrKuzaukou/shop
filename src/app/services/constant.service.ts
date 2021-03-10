import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  getAllData(): any {
    return { App: 'AngularShop', Ver: '0.1.0', API_URL: 'https://sauchanka-kuzaukou-angular-shop.app' };
  }
}

export const сonstantsInstance = new ConstantsService();
