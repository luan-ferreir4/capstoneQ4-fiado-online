import { CustomerRepository } from '../../repositories';

class GetAllCustomersService {
  async execute() {
    const customers = await new CustomerRepository().getAllCustomers();
    return customers;
  }
}

export default GetAllCustomersService;
