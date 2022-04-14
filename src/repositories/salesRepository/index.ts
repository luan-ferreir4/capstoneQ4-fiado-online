import { getRepository, Repository } from 'typeorm';
import { Sale } from '../../entities';
import { SaleI, SaleRepoI } from './interfaces';

class SalesRepository implements SaleRepoI {
  private ormRepository: Repository<Sale>;

  constructor() {
    this.ormRepository = getRepository(Sale);
  }

  createSale = (requestSaleData: SaleI) =>
    this.ormRepository.create(requestSaleData);

  saveSale = async (saleData: SaleI) => await this.ormRepository.save(saleData);

  updateSale = async (id_sale: string, updateData: any) =>
    await this.ormRepository.update({ id_sale }, updateData);

  deleteSale = async (id_sale: string) =>
    await this.ormRepository.delete({ id_sale });

  getAllSales = async () => await this.ormRepository.find();

  getOneSale = async (id_sale: string) =>
    await this.ormRepository.findOne({ id_sale });
}

export default SalesRepository;
