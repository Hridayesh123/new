import { Client } from 'pg';
import * as dot from 'dotenv';
dot.config();

const client = new Client({
    host: process.env.HOST,
    user: process.env.USER,
    port: parseInt(process.env.PORT ?? '5432'),
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

client.connect();

export default client;
