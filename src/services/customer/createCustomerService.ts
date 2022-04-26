import { QueryFailedError } from 'typeorm';
import { CustomerRepository, ICustomer } from '../../repositories';
import { ErrorHandler } from '../../utils';

class CreateCustomerService {
  async execute(requestData: ICustomer, id_user: string) {
    try {
      const customer = await new CustomerRepository().createCustomer({
        user: id_user,
        ...requestData,
      });

      const newCustomer = await new CustomerRepository().saveCustomer(customer);

      return newCustomer;
    } catch (error) {
      const { detail } = error;
      if (error instanceof QueryFailedError) {
        throw new ErrorHandler(400, `QueryFailedError:\n${detail}`);
      }
      throw new ErrorHandler(400, detail);
    }
  }
}

export default CreateCustomerService;
