import { ProductModel } from '../models/product-model';
import { CategoryEnum } from '../models/enums/category-enum';
export const listProducts: ProductModel[] = [
    {
        id: 0, name: 'Cat', description: 'Best Cat', price: 1000, category: CategoryEnum.Animal, isAvailable: true
    },
    {
        id: 1, name: 'Sousage', description: 'Best Sousage', price: 1000, category: CategoryEnum.Food, isAvailable: true
    },
    {
        id: 2, name: 'IPhone', description: 'Best Phone', price: 10000, category: CategoryEnum.Electronic, isAvailable: true
    }
];
