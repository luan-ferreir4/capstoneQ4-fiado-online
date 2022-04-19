import createUserController from './user/createUser';
import loginUserController from './user/loginUser';
import deleteUserController from './user/deleteUser';
import updateUserController from './user/upgradeUser';
import getUserProfileController from './user/getUserProfile';

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

export {
  createUserController,
  loginUserController,
  deleteUserController,
  updateUserController,
  getUserProfileController,
};

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
