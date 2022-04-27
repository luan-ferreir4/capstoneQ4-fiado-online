import { CustomerRepository, ICustomer } from '../../repositories';

class UpdateCustomerService {
  async execute(id_customer: string, requestData: ICustomer) {
    const customer = await new CustomerRepository().getOneById(id_customer);
    if (customer) {
      await new CustomerRepository().updateCustomer(id_customer, requestData);
      const newcustomer = await new CustomerRepository().getOneById(
        id_customer
      );
      return newcustomer;
    }
    return customer;
  }
}

export default UpdateCustomerService;
