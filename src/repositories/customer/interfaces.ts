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
  createCustomer: (requestCustomerData: ICustomer) => Promise<ICustomer>;
  saveCustomer: (customerData: ICustomer) => Promise<ICustomer>;
  deleteCustomer: (id: string) => Promise<DeleteResult>;
  updateCustomer: (id: string, data: ICustomer) => Promise<UpdateResult>;
  getAllCustomers: () => Promise<ICustomer[]>;
  getOneByEmail: (email: string) => Promise<ICustomer>;
  getOneById: (id: string) => Promise<ICustomer>;
}

export { ICustomer, ICustomerRepository };
