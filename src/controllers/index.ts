import createUserController from './user/createUser';
import loginUserController from './user/loginUser';
import deleteUserController from './user/deleteUser';
import deleteUserByIdController from './user/deleteUserById';
import updateUserController from './user/upgradeUser';
import updateUserByIdController from './user/upgradeUserById';
import getUserProfileController from './user/getUserProfile';
import sendCatalogueByEmailController from './user/sendCatalogue';
import getAllUsersController from './user/getAllUsers';

import createCustomerController from './customer/createCustomer';
import deleteCustomerController from './customer/deleteCustomers';
import updateCustomerController from './customer/updateCustomer';
import getOneCustomerController from './customer/getOneCustomer';
import getAllUserCustomer from './customer/getAllUserCustomer';

import createSaleController from './sale/createSale';
import deleteSaleController from './sale/deleteSale';
import getAllSalesController from './sale/getAllSales';
import getOneSaleController from './sale/getOneSale';
import updateSaleController from './sale/updateSale';

import getAdminsController from './admin/getAdmins';
import getAdminProfileController from './admin/getAdminProfile';
import registerAdminController from './admin/registerAdmin';
import loginAdminController from './admin/loginAdmin';
import updateAdminController from './admin/updateAdmin';
import deleteAdminController from './admin/deleteAdmin';

import createResourceController from './resource/createResource';
import deleteResourceController from './resource/deleteResource';
import getOneResourceController from './resource/getOneResource';
import getAllUserResourcesController from './resource/getAllUserResources';
import updateResourcesController from './resource/updateResource';

import createRelatoryController from './relatory/createRelatory';

export { createRelatoryController };
export {
  createUserController,
  loginUserController,
  deleteUserController,
  deleteUserByIdController,
  updateUserController,
  updateUserByIdController,
  getUserProfileController,
  sendCatalogueByEmailController,
  getAllUsersController,
};

export {
  createCustomerController,
  deleteCustomerController,
  updateCustomerController,
  getOneCustomerController,
  getAllUserCustomer,
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
  getAdminProfileController,
  registerAdminController,
  loginAdminController,
  updateAdminController,
  deleteAdminController,
};

export {
  createResourceController,
  deleteResourceController,
  getOneResourceController,
  getAllUserResourcesController,
  updateResourcesController,
};
