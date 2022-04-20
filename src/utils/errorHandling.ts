import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

interface IDetail extends QueryFailedError {
  detail: string;
}

class ErrorHandler extends Error {
  statusCode: number;

  constructor(statuscode: number, message: string) {
    super();
    this.statusCode = statuscode;
    this.message = message;
  }
}

const handleErrors = (error: ErrorHandler, res: Response): Response => {
  const { statusCode, message } = error;
  return res.status(statusCode).json({ message });
};

export { ErrorHandler, handleErrors, IDetail };
