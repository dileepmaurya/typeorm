import { AppDataSource } from '../data-source';
import { Category } from '../entities/categories.entity'
import { Product } from '../entities/product.entity'
import { v4 as uuidv4 } from 'uuid';

async function seed() {
  await AppDataSource.initialize();

  const categoryRepo = AppDataSource.getRepository(Category);
  const productRepo = AppDataSource.getRepository(Product);

  const category1 = categoryRepo.create({
    id: uuidv4(),
    categoryName: 'Electronics',
    description: 'Devices and gadgets',
    isActive: true,
  });
  await categoryRepo.save(category1);

  const category2 = categoryRepo.create({
    id: uuidv4(),
    categoryName: 'Toys',
    description: 'Toys for children',
    isActive: true,
  });
  await categoryRepo.save(category2);

  const category3 = categoryRepo.create({
    id: uuidv4(),
    categoryName: 'Mobile',
    description: 'Mobile phoone',
    isActive: true,
  });
  await categoryRepo.save(category3);

  const category4 = categoryRepo.create({
    id: uuidv4(),
    categoryName: 'furniture',
    description: 'furniture for office and home',
    isActive: true,
  });
  await categoryRepo.save(category4);

 

  const products = await productRepo.insert([
    {
        id: uuidv4(),
        productName: 'Smartphone',
        description: 'Latest smartphone model',
        price: 699.99,
        stockQuantity: 100,
        categoryId: category1.id,
    },
    {
        id: uuidv4(),
        productName: 'Laptop',
        description: 'Latest laptop model',
        price: 699.99,
        stockQuantity: 100,
        categoryId: category1.id,
    },
    {
        id: uuidv4(),
        productName: 'Piano',
        description: 'Latest Piano toys',
        price: 699.99,
        stockQuantity: 100,
        categoryId: category2.id,
    },
    {
        id: uuidv4(),
        productName: 'Scooter',
        description: 'Latest Scooter for your child',
        price: 699.99,
        stockQuantity: 100,
        categoryId: category2.id,
    },
    {
        id: uuidv4(),
        productName: 'Iphone',
        description: 'Latest Iphone',
        price: 699.99,
        stockQuantity: 100,
        categoryId: category3.id,
    },
    {
        id: uuidv4(),
        productName: 'OnePlus',
        description: 'Latest OnePlus',
        price: 699.99,
        stockQuantity: 100,
        categoryId: category3.id,
    },
    {
        id: uuidv4(),
        productName: 'Chair',
        description: 'comcomfortable chair',
        price: 699.99,
        stockQuantity: 100,
        categoryId: category4.id,
    },
    {
        id: uuidv4(),
        productName: 'Table',
        description: 'office table and work stations',
        price: 699.99,
        stockQuantity: 100,
        categoryId: category4.id,
    }
  ]);

  console.log("created profucts:: ", products);

//   await productRepo.save(product);

  console.log('✅ Seeding complete');
  process.exit();
}

seed().catch((error) => {
  console.error('❌ Error seeding data:', error);
  process.exit(1);
});
