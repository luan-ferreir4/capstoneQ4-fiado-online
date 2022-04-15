/* eslint-disable no-unused-vars */
import { Customer, ResourceSale, Sale, User } from '../../entities';

interface ResourceToSaleI {
  resource_id: string;
  quantity: number;
}

interface ISale {
  id_sale?: string;
  sold_at: Date;
  expires_in: Date;
  resources: ResourceToSaleI[];
  closed: boolean;
  user: User;
  customer: Customer;
  resources_sales?: ResourceSale[];
}

interface ISaleRepo {
  createSale: (requestSaleData: ISale) => Sale;
  saveSale: (saleData: ISale) => Promise<Sale>;
  updateSale: (id_sale: string, updateData: any) => Promise<any>;
  deleteSale: (id_sale: string) => Promise<any>;
  getAllSales: () => Promise<Sale[]>;
  getOneSale: (id_sale: string) => Promise<Sale>;
}

export { ISale, ISaleRepo };
