import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    Timestamp
  } from 'typeorm';

  import { Product } from './product.entity';
  
  @Entity('categories')
  export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', length: 150 })
    categoryName: string;
  
    @Column({ type: 'varchar', length: 250, nullable: true })
    description: string;
  
    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];

  
    @CreateDateColumn()
    createdAt: Timestamp;
  
    @UpdateDateColumn()
    updatedAt: Timestamp;
  }
  