import { Sale } from '../../entities';
import { SaleRepository } from '../../repositories';

class GetAllSalesService {
  async execute(): Promise<Sale[]> {
    const salesList: Sale[] = await new SaleRepository().getAllSales();

    return salesList;
  }
}

export default GetAllSalesService;
