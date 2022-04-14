import express, { Router } from 'express';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app = express();
app.use('', router);
app.use(express.json());

export default app;
