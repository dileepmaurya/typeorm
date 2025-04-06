import { Timestamp } from 'typeorm';
import { Product } from './product.entity';
export declare class Category {
    id: string;
    categoryName: string;
    description: string;
    isActive: boolean;
    products: Product[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
