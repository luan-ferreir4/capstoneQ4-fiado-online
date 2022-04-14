/* eslint-disable no-unused-vars */
import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { ErrorHandler, handleErrors } from './utils';

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  (error: ErrorHandler, req: Request, res: Response, _next: NextFunction) => {
    handleErrors(error, res);
  }
);

export default app;
