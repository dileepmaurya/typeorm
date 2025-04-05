// typeorm.config.ts
import { DataSource } from 'typeorm';
import 'dotenv/config'
export default new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    // @ts-ignore
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/src/entities/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/src/migrations/**/*{.ts,.js}'],
});