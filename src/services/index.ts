import createUserService from './user/createUserService';
import LoginUserService from './user/loginUserService';

import CreateCustomerService from './customer/createCustomerService';
import DeleteCustomerService from './customer/deleteCustomerService';
import GetAllCustomersPerUserService from './customer/getAllCustomerPerUserService';
import GetAllCustomersService from './customer/getAllCustomersService';
import UpdateCustomerService from './customer/updateCustomerService';

import updateAdminService from './admin/updateAdminService';
import deleteAdminService from './admin/deleteAdminService';
import registerAdminService from './admin/registerAdminService';
import loginAdminService from './admin/loginAdminService';

import CreateSaleService from './sale/createSaleService';
import FormatSaleService from './sale/formatSaleService';
import UpdateSaleService from './sale/updateSaleService';
import DeleteSaleService from './sale/deleteSaleService';

import RegisterResourcesOnSale from './resourceSale/registerResourcesOnSale';

export {
  createUserService,
  LoginUserService,
  GetAllCustomersPerUserService,
  GetAllCustomersService,
};

export {
  updateAdminService,
  deleteAdminService,
  registerAdminService,
  loginAdminService,
};

export { CreateCustomerService, DeleteCustomerService, UpdateCustomerService };

export {
  CreateSaleService,
  FormatSaleService,
  UpdateSaleService,
  DeleteSaleService,
};

export { RegisterResourcesOnSale };
