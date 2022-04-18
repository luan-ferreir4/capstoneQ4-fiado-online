import { Admin, Customer, User } from '../entities';

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
