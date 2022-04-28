import { getRepository, Repository } from 'typeorm';
import { Sale } from '../../entities';
import { ISale, ISaleRepo, IResourceRequest } from './interfaces';

class SaleRepository implements ISaleRepo {
  private ormRepository: Repository<Sale>;

  constructor() {
    this.ormRepository = getRepository(Sale);
  }

  createSale = (requestSaleData: ISale) =>
    this.ormRepository.create(requestSaleData);

  saveSale = async (saleData: Sale) => await this.ormRepository.save(saleData);

  deleteSale = async (id_sale: string) =>
    await this.ormRepository.delete({ id_sale });

  getAllSales = async () => await this.ormRepository.find();

  getAllSalesPerCustomer = async (id_customers) =>
    await this.ormRepository.find(id_customers);

  getOneSale = async (id_sale: string) =>
    await this.ormRepository.findOne({ id_sale });
}

export { SaleRepository, ISale, IResourceRequest };
