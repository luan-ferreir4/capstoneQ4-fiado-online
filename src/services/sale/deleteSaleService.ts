import { SaleRepository } from '../../repositories';

class DeleteSaleService {
  async execute(id_sale: string): Promise<void> {
    const saleRepository = new SaleRepository();

    await saleRepository.deleteSale(id_sale);
  }
}
export default DeleteSaleService;
