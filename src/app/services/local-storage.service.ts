import { InjectionToken } from '@angular/core';

export enum LocalStorageKeys {
  id = 'id',
  name = 'name'
}

export const STORAGE = new InjectionToken<LocalStorageService>('Storage');

export class LocalStorageService {
  set(key: LocalStorageKeys, value: string): void {
    localStorage.setItem(LocalStorageKeys[key], value);
  }

  get(key: LocalStorageKeys): string {
    return localStorage.getItem(LocalStorageKeys[key]);
  }

  remove(key: LocalStorageKeys): void {
    localStorage.removeItem(LocalStorageKeys[key]);
  }

  clear(): void{
    localStorage.clear();
  }
}
