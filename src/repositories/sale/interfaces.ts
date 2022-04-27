/* eslint-disable no-unused-vars */
import { DeleteResult, UpdateResult } from 'typeorm';
import { Customer, ResourceSale, Sale, User } from '../../entities';

interface IResourceRequest {
  resource_name: string;
  quantity: number;
  unit_sold_cost: number;
}

interface ISale {
  id_sale?: string;
  sold_at: Date;
  expires_in: Date;
  closed: boolean;
  customer_email: string;
  user?: User;
  customer?: Customer;
  resources?: IResourceRequest[];
  resources_sales?: ResourceSale[];
}

interface ISaleRepo {
  createSale: (requestSaleData: ISale) => Sale;
  saveSale: (saleData: Sale) => Promise<Sale>;
  deleteSale: (id_sale: string) => Promise<DeleteResult>;
  getAllSales: () => Promise<Sale[]>;
  getOneSale: (id_sale: string) => Promise<Sale>;
}

export { ISale, ISaleRepo, IResourceRequest };
