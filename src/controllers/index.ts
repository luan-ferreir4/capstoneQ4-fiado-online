import createUserController from './user/createUser';
import loginUserController from './user/loginUser';
import deleteUserController from './user/deleteUser';
import updateUserController from './user/upgradeUser';

import createCustomerController from './customer/createCustomer';
import deleteCustomerController from './customer/deleteCustomer';
import getAllCustomersController from './customer/getAllCustomers';
import updateCustomerController from './customer/updateCustomer';
import getOneCustomerController from './customer/getOneCustomer';
import getAllCustomersPerUser from './customer/getAllCustomersPerUser';

import createSaleController from './sale/createSale';
import deleteSaleController from './sale/deleteSale';
import getAllSalesController from './sale/getAllSales';
import getOneSaleController from './sale/getOneSale';
import updateSaleController from './sale/updateSale';

export {
  createUserController,
  loginUserController,
  deleteUserController,
  updateUserController,
};

export {
  createCustomerController,
  deleteCustomerController,
  getAllCustomersController,
  updateCustomerController,
  getOneCustomerController,
  getAllCustomersPerUser,
};

export {
  createSaleController,
  deleteSaleController,
  getAllSalesController,
  getOneSaleController,
  updateSaleController,
};
