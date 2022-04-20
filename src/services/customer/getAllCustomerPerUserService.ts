import { CustomerRepository, IUser } from '../../repositories';

class GetAllCustomersPerUserService {
  async execute(user: IUser) {
    const costumersUser = await new CustomerRepository().getAllPerUser(user);
    return costumersUser;
  }
}

export default GetAllCustomersPerUserService;
