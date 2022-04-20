/* eslint-disable no-unused-vars */
import { User } from '../entities';
import { IAdminToken } from '../repositories';

declare global {
  namespace Express {
    interface Request {
      validated: any;
      user: User;
      token: string;
      admin: IAdminToken;
    }
  }
}
