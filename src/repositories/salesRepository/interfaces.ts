/* eslint-disable no-unused-vars */
import { Customer, ResourceSale, Sale, User } from '../../entities';

interface ResourceToSaleI {
  resource_id: string;
  quantity: number;
}

interface SaleI {
  id_sale?: string;
  sold_at: Date;
  expires_in: Date;
  resources: ResourceToSaleI[];
  closed: boolean;
  user: User;
  customer: Customer;
  resources_sales?: ResourceSale[];
}

interface SaleRepoI {
  createSale: (requestSaleData: SaleI) => Sale;
  saveSale: (saleData: SaleI) => Promise<Sale>;
  updateSale: (id_sale: string, updateData: any) => Promise<any>;
  deleteSale: (id_sale: string) => Promise<any>;
  getAllSales: () => Promise<Sale[]>;
  getOneSale: (id_sale: string) => Promise<Sale>;
}

export { SaleI, SaleRepoI };
