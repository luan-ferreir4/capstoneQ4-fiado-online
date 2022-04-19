/* eslint-disable no-unused-vars */
import { Admin, User } from '../entities';

declare global {
  namespace Express {
    interface Request {
      validated: any;
      user: User;
      token: string;
      admin: Admin;
    }
  }
}
