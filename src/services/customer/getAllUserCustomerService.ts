import { User } from '../../entities';

class GetAllUserCustomerService {
  async execute(user: User) {
    const userCustomers = user.customers;

    return userCustomers;
  }
}

export default GetAllUserCustomerService;
