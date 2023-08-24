import dotenv from 'dotenv';
import express from 'express';

console.clear();
dotenv.config();
const Express=express();

Express.use(express.json());

const config=JSON.parse(process.env.MY_CONFIG);
Express.listen(config,()=>{console.log(`http://${config.hostname}:${config.port}`)});