import { QueryFailedError } from 'typeorm';
import { ISale, SaleRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

class CreateSaleService {
  async execute(newSaleData: ISale) {
    try {
      const saleRepository = new SaleRepository();

      const newSale = saleRepository.createSale(newSaleData);

      await saleRepository.saveSale(newSale);

      return newSale;
    } catch (error) {
      const { detail } = error;

      if (error instanceof QueryFailedError) {
        throw new ErrorHandler(400, `QueryFailedError:\n${detail}`);
      }

      throw new ErrorHandler(400, detail);
    }
  }
}

export default CreateSaleService;
