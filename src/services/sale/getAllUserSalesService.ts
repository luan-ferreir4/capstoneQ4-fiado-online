import { Sale, User } from '../../entities';

class GetAllUserSalesService {
  async execute(user: User): Promise<Sale[]> {
    const salesList: Sale[] = user.sales;

    return salesList;
  }
}

export default GetAllUserSalesService;
