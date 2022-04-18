import { Admin, Customer, User } from '../entities';

declare global {
  namespace Express {
    interface Request {
      validated: User | Customer | Admin;
      user: User;
      token: string;
      admin: Admin;
    }
  }
}
