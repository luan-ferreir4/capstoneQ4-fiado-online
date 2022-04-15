import { getRepository, Repository } from 'typeorm';
import { Sale } from '../../entities';
import { ISale, ISaleRepo } from './interfaces';

class SaleRepository implements ISaleRepo {
  private ormRepository: Repository<Sale>;

  constructor() {
    this.ormRepository = getRepository(Sale);
  }

  createSale = (requestSaleData: ISale) =>
    this.ormRepository.create(requestSaleData);

  saveSale = async (saleData: Sale) => await this.ormRepository.save(saleData);

  updateSale = async (id_sale: string, updateData: any) =>
    await this.ormRepository.update({ id_sale }, updateData);

  deleteSale = async (id_sale: string) =>
    await this.ormRepository.delete({ id_sale });

  getAllSales = async () => await this.ormRepository.find();

  getOneSale = async (id_sale: string) =>
    await this.ormRepository.findOne({ id_sale });
}

export { SaleRepository, ISale };
