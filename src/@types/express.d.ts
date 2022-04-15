import { Customer, User } from '../entities';

declare global {
  namespace Express {
    interface Request {
      validated: User | Customer;
      user: User;
      token: string;
    }
  }
}
