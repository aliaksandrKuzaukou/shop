import { CategoryEnum } from '../enums/category-enum';

export interface ProductModel{
   readonly id: number;
   readonly name: string;
   readonly description: string;
   readonly price: number;
   readonly category: CategoryEnum;
   isAvailable: boolean;
   quantity?: number;
}
