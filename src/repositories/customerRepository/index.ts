import { getRepository, Repository } from 'typeorm';
import { Customer } from '../../entities';
import { ICustomer, ICustomerRepository } from './interfaces';

class CustomerRepository implements ICustomerRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }
  saveCustomer = async (Customer: ICustomer) =>
    await this.ormRepository.save(Customer);
  findCustomers = async () => await this.ormRepository.find();
  findByEmail = async (email: string) =>
    await this.ormRepository.findOne({ where: { email } });
  findById = async (id: string) =>
    await this.ormRepository.findOne({ where: { id } });
  deleteCustomer = async (id: string) => await this.ormRepository.delete(id);
  updateCustomer = async (id: string, data: ICustomer) =>
    await this.ormRepository.update(id, data);
}

export { CustomerRepository, ICustomer };
