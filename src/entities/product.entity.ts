import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Timestamp
  } from 'typeorm';
  import { Category } from './categories.entity';
  
  @Entity('products')
  export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', length: 250 })
    productName: string;
  
    @Column({ type: 'text' })
    description: string;
  
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;
  
    @Column({ type: 'int' })
    stockQuantity: number;
  
    @Column({ nullable: true })
    categoryId: string;
  
    @ManyToOne(() => Category, { onDelete: 'SET NULL', nullable: true })
    @JoinColumn({ name: 'categoryId' })
    category: Category;
  
    @CreateDateColumn()
    createdAt: Timestamp;
  
    @UpdateDateColumn()
    updatedAt: Timestamp;
  }
  