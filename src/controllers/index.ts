import createUserController from './user/createUser';
import loginUserController from './user/loginUser';

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

import getAdminsController from './admin/getAdmins';
import registerAdminController from './admin/registerAdmin';
import loginAdminController from './admin/loginAdmin';
import updateAdminController from './admin/updateAdmin';
import deleteAdminController from './admin/deleteAdmin';

export { createUserController, loginUserController };

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
  getAdminsController,
  registerAdminController,
  loginAdminController,
  updateAdminController,
  deleteAdminController,
};
