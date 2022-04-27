import { QueryFailedError } from 'typeorm';
import { User } from '../../entities';
import { CustomerRepository, ISale, SaleRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

class CreateSaleService {
  async format(saleData: ISale, user: User): Promise<any> {
    const customerRepository = new CustomerRepository();

    const { sold_at, expires_in, customer_email, closed } = saleData;

    const customerFound = await customerRepository.getOneByEmail(
      customer_email
    );

    const formatedSale = {
      sold_at,
      expires_in,
      closed,
      user: user.id_user,
      customer: customerFound.id_customers,
    };

    return formatedSale;
  }

  async execute(formatedSaleData: ISale) {
    const saleRepository = new SaleRepository();

    const newSale = saleRepository.createSale(formatedSaleData);

    await saleRepository.saveSale(newSale);

    return newSale;
  }
}

export default CreateSaleService;
