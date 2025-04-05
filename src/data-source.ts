import "reflect-metadata"
import 'dotenv/config'
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    // @ts-ignore
    port: parseInt(process.env.DB_PORT, 10) || 3306 as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: process.env.DB_LOGGING === 'true',
    entities: [__dirname + '/entities/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    subscribers: [],
})
