import { InjectionToken } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

export const GeneratedString = new InjectionToken<number[]>('GeneratedString');

export function GeneratorFactory(n: number): (gen: GeneratorService) => string {
  return (gen: GeneratorService): string => gen.generate(n);
}