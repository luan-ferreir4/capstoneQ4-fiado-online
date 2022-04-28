import createUserService from './user/createUserService';
import UpdateUserService from './user/updateUserService';
import DeleteUserService from './user/deleteUserService';
import LoginUserService from './user/loginUserService';

import UpdateAdminService from './admin/updateAdminService';
import DeleteAdminService from './admin/deleteAdminService';
import RegisterAdminService from './admin/registerAdminService';
import LoginAdminService from './admin/loginAdminService';

import CreateCustomerService from './customer/createCustomerService';
import DeleteCustomerService from './customer/deleteCustomerService';
import GetAllUserCustomerService from './customer/getAllUserCustomerService';
import GetAllCustomersService from './customer/getAllCustomersService';
import UpdateCustomerService from './customer/updateCustomerService';
import GetOneCustomerService from './customer/getOneCustomerService';

import CreateSaleService from './sale/createSaleService';
import UpdateSaleService from './sale/updateSaleService';
import DeleteSaleService from './sale/deleteSaleService';
import GetAllUserSalesService from './sale/getAllUserSalesService';
import GetOneSaleService from './sale/getOneSaleService';

import RegisterResourcesOnSale from './resourceSale/registerResourcesOnSaleService';
import SaleValueToBalance from './resourceSale/saleValueToBalanceService';
import UpdateResourcesQuantity from './resourceSale/updateResourcesQuantityService';

import DeleteResourceService from './resource/deleteResourceService';
import CreateResourceService from './resource/createResourceService';
import GetAllUserResourceService from './resource/getAllUserResourceService';
import GetOneResourceService from './resource/getOneResourceService';
import FormatResourceService from './resource/formatResourceService';
import UpdateResourceService from './resource/updateResourceService';

import SendEmail from './mailer/mailerService';
import CreateRelatory from './pdf/relatory';

export { SendEmail, CreateRelatory };

export {
  createUserService,
  LoginUserService,
  DeleteUserService,
  UpdateUserService,
};

export {
  UpdateAdminService,
  DeleteAdminService,
  RegisterAdminService,
  LoginAdminService,
};

export {
  CreateCustomerService,
  DeleteCustomerService,
  UpdateCustomerService,
  GetAllUserCustomerService,
  GetAllCustomersService,
  GetOneCustomerService,
};

export {
  CreateSaleService,
  UpdateSaleService,
  DeleteSaleService,
  GetAllUserSalesService,
  GetOneSaleService,
};

export { RegisterResourcesOnSale, SaleValueToBalance, UpdateResourcesQuantity };

export {
  CreateResourceService,
  DeleteResourceService,
  GetAllUserResourceService,
  GetOneResourceService,
  FormatResourceService,
  UpdateResourceService,
};
