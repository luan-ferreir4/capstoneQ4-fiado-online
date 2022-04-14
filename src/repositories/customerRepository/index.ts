import { getRepository, Repository } from 'typeorm';
import { Customer } from '../../entities';
import { ICustomer, ICustomerRepository } from './interfaces';

class CustomerRepository implements ICustomerRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }
  createCustomer = async (requestCustomerData: ICustomer) =>
    this.ormRepository.create(requestCustomerData);

  saveCustomer = async (CustomerData: ICustomer) =>
    await this.ormRepository.save(CustomerData);

  getAllCustomers = async () => await this.ormRepository.find();

  getOneByEmail = async (email: string) =>
    await this.ormRepository.findOne({ where: { email } });

  getOneById = async (id: string) =>
    await this.ormRepository.findOne({ where: { id } });

  deleteCustomer = async (id: string) => await this.ormRepository.delete(id);

  updateCustomer = async (id: string, data: ICustomer) =>
    await this.ormRepository.update(id, data);
}

export { CustomerRepository, ICustomer };
