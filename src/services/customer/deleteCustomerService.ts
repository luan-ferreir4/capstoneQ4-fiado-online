import { CustomerRepository } from '../../repositories';

class DeleteCustomerService {
  async execute(id_customer: string) {
    await new CustomerRepository().deleteCustomer(id_customer);
  }
}
export default DeleteCustomerService;
