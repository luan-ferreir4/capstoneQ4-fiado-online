import { Sale } from '../../entities';
import { SaleRepository } from '../../repositories';

class GetOneSaleService {
  async execute(id_sale: string): Promise<Sale> {
    const saleFound: Sale = await new SaleRepository().getOneSale(id_sale);

    return saleFound;
  }
}

export default GetOneSaleService;
