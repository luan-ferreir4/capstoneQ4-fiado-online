/* eslint-disable no-unused-vars */
import express, { NextFunction, Request, Response } from 'express';
import { CronJob } from 'cron';

import dotenv from 'dotenv';
import router from './routes';
import { ErrorHandler, handleErrors } from './utils';
import { CronVerifyService } from './services';

dotenv.config();

const timer = process.env.CRON_EMAIL_TIME;

const job = new CronJob(timer, () => {
  new CronVerifyService().execute();
});
job.start();

const app = express();
app.use(express.json());
app.use('', router);

app.use(
  (error: ErrorHandler, req: Request, res: Response, _next: NextFunction) => {
    return handleErrors(error, res);
  }
);

export default app;
