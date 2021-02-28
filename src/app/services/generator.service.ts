import { Injectable } from '@angular/core';
import { ALPHABET } from '../database/alphabet'

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  generate(n: number): string {
    if (n < 1) {
      return '';
    }
    return this.getRandomlySortedArray(ALPHABET).slice(0, n).join('');
  }

  private getRandomlySortedArray(array: string[]): string[] {
    const arrayCopy = [...array];
    const compareRandom = (): number => {
      return Math.random() - 0.5;
    };
    arrayCopy.sort(compareRandom);
    return arrayCopy;
  }
}
