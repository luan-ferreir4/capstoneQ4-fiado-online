import { QueryFailedError } from 'typeorm';
import { CustomerRepository, ISale, SaleRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

class CreateSaleService {
  async format(saleData: ISale, id_User: string): Promise<any> {
    const customerRepository = new CustomerRepository();

    const { sold_at, expires_in, customer_email, closed } = saleData;

    const customerFound = await customerRepository.getOneByEmail(
      customer_email
    );

    const formatedSale = {
      sold_at,
      expires_in,
      closed,
      user: id_User,
      customer: customerFound.id_customers,
    };

    return formatedSale;
  }

  async execute(formatedSaleData: ISale) {
    try {
      const saleRepository = new SaleRepository();

      const newSale = saleRepository.createSale(formatedSaleData);

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
