import { ICreateSaleRequest } from '../../repositories';
import { CustomerRepository } from '../../repositories/customer';

class FormatSaleService {
  async execute(saleData: ICreateSaleRequest, id_User: string): Promise<any> {
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
}

export default FormatSaleService;
