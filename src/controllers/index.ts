import createUserController from './user/createUser';
import loginUserController from './user/loginUser';
import deleteUserController from './user/deleteUser';
import updateUserController from './user/upgradeUser';
import getUserProfileController from './user/getUserProfile';

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

import getAdminsController from './admin/getAdmins';
import registerAdminController from './admin/registerAdmin';
import loginAdminController from './admin/loginAdmin';
import updateAdminController from './admin/updateAdmin';
import deleteAdminController from './admin/deleteAdmin';

import createResourceController from './resource/createResource';
import deleteResourceController from './resource/deleteResource';
import getOneResourceController from './resource/getOneResource';
import getAllResourcesController from './resource/getAllResources';
import updateResourcesController from './resource/updateResource';

import createRelatoryConstroller from './relatory/createRelatory';

export { createRelatoryConstroller };
export {
  createUserController,
  loginUserController,
  deleteUserController,
  updateUserController,
  getUserProfileController,
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

export {
  getAdminsController,
  registerAdminController,
  loginAdminController,
  updateAdminController,
  deleteAdminController,
};

export {
  createResourceController,
  deleteResourceController,
  getOneResourceController,
  getAllResourcesController,
  updateResourcesController,
};
