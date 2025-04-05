"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// typeorm.config.ts
const typeorm_1 = require("typeorm");
require("dotenv/config");
exports.default = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/src/entities/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/src/migrations/**/*{.ts,.js}'],
});
