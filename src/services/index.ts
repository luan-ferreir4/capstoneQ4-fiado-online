import createUserService from './user/createUserService';
import LoginUserService from './user/loginUserService';

import CreateCustomerService from './customer/createCustomerService';
import DeleteCustomerService from './customer/deleteCustomerService';
import GetAllCustomersPerUserService from './customer/getAllCustomerPerUserService';
import GetAllCustomersService from './customer/getAllCustomersService';
import UpdateCustomerService from './customer/updateCustomerService';
import GetOneCustomerService from './customer/getOneCustomerService';

import updateAdminService from './admin/updateAdminService';
import deleteAdminService from './admin/deleteAdminService';
import registerAdminService from './admin/registerAdminService';
import loginAdminService from './admin/loginAdminService';

import CreateSaleService from './sale/createSaleService';
import FormatSaleService from './sale/formatSaleService';
import UpdateSaleService from './sale/updateSaleService';
import DeleteSaleService from './sale/deleteSaleService';
import GetAllSalesService from './sale/getAllSalesService';
import GetOneSaleService from './sale/getOneSaleService';

import RegisterResourcesOnSale from './resourceSale/registerResourcesOnSale';

import DeleteResourceService from './resource/deleteResourceService';
import CreateResourceService from './resource/createResourceService';
import GetAllResourceService from './resource/getAllResourceService';
import GetOneResourceService from './resource/getOneResourceService';
import FormatResourceService from './resource/formatResourceService';
import UpdateResourceService from './resource/updateResourceService';

export { createUserService, LoginUserService };

export {
  updateAdminService,
  deleteAdminService,
  registerAdminService,
  loginAdminService,
};

export {
  CreateCustomerService,
  DeleteCustomerService,
  UpdateCustomerService,
  GetAllCustomersPerUserService,
  GetAllCustomersService,
  GetOneCustomerService,
};

export {
  CreateSaleService,
  FormatSaleService,
  UpdateSaleService,
  DeleteSaleService,
  GetAllSalesService,
  GetOneSaleService,
};

export { RegisterResourcesOnSale };

export {
  CreateResourceService,
  DeleteResourceService,
  GetAllResourceService,
  GetOneResourceService,
  FormatResourceService,
  UpdateResourceService,
};
