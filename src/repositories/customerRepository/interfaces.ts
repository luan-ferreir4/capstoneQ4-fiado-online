import { DeleteResult, UpdateResult } from 'typeorm';
import { Sale, User } from '../../entities';

interface ICustomer {
  id_customers: string;
  name: string;
  email: string;
  phone_number: number;
  user: User;
  sales: Sale[];
}

interface ICustomerRepository {
  saveCustomer: (customer: ICustomer) => Promise<ICustomer>;
  deleteCustomer: (id: string) => Promise<DeleteResult>;
  updateCustomer: (id: string, data: ICustomer) => Promise<UpdateResult>;
  findCustomers: () => Promise<ICustomer[]>;
  findByEmail: (email: string) => Promise<ICustomer>;
  findById: (id: string) => Promise<ICustomer>;
}

export { ICustomer, ICustomerRepository };
