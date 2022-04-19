import createUserController from './user/createUser';

import createCustomController from './customer/createCustomer';
import deleteCustomerController from './customer/deleteCustom';
import getAllCustomersController from './customer/getAllCustomers';
import updateCustomerController from './customer/updateCustomer';
import getOneCustomerController from './customer/getOneCustomer';

import createSaleController from './sale/createSale';
import deleteSaleController from './sale/deleteSale';
import getAllSalesController from './sale/getAllSales';
import getOneSaleController from './sale/getOneSale';
import updateSaleController from './sale/updateSale';

import createResourceController from './resource/createResource';
import deleteResourceController from './resource/deleteResource';
import getOneResourceController from './resource/getOneResource';
import getAllResourcesController from './resource/getAllResources';

export { createUserController };

export {
  createCustomController,
  deleteCustomerController,
  getAllCustomersController,
  updateCustomerController,
  getOneCustomerController,
};

export {
  createSaleController,
  deleteSaleController,
  getAllSalesController,
  getOneSaleController,
  updateSaleController,
};

export {
  createResourceController,
  deleteResourceController,
  getOneResourceController,
  getAllResourcesController,
};
