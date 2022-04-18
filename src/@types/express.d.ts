/* eslint-disable no-unused-vars */
import { Customer, Sale, User } from '../entities';

declare global {
  namespace Express {
    interface Request {
      validated: any;
      user: User;
      token: string;
    }
  }
}
