import { Timestamp } from 'typeorm';
import { Category } from './categories.entity';
export declare class Product {
    id: string;
    productName: string;
    description: string;
    price: number;
    stockQuantity: number;
    categoryId: string;
    category: Category;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
