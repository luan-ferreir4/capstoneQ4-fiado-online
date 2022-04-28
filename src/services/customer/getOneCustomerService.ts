import { CustomerRepository, ICustomer } from '../../repositories';

class GetOneCustomerService {
  async execute(id_customer: string) {
    const customer: ICustomer = await new CustomerRepository().getOneById(
      id_customer
    );
    return customer;
  }
}

export default GetOneCustomerService;
