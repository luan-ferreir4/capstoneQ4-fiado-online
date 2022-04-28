import authAdmin from './jwt/authAdminMiddleware';
import authUser from './jwt/authUserMiddleware';
import checkLogin from './jwt/checkLoginMiddleware';

import verifyIdResourceExistsMiddleware from './resource/verifyIdResourceExistsMiddleware';
import verifyExistingResources from './sale/verifyExistingResourcesMiddlewares';
import verifyResourceOwnerMiddleware from './resource/veifyResourceOwnerMiddleware';

import verifyExistingCustomer from './sale/verifyExistingCustomerMiddleware';
import verifyCustomersEmailMiddleware from './customer/verifyCustomersEmailMiddleware';
import verifyCustomerOwner from './customer/verifyCustomerOwnerMiddleware';

import verifyExistingSale from './sale/verifyExistingSaleMiddleware';
import verifyExistingResourceMiddleware from './resource/verifyExistingResourceMiddleware';
import verifyStock from './sale/verifyStockMiddeware';

import verifyEmailAlreadyExists from './user/verifyEmailAlreadyExists';
import verifyResquestBodyToUpdateMiddleware from './yup/verifyRequestBodyToUpdateMiddleware';

import validateUuidMiddleware from './uuid/validateUuidMiddleware';
import validateShape from './yup/validateShapeMiddleware';

export { authUser, authAdmin, checkLogin };

export {
  verifyExistingResourceMiddleware,
  verifyIdResourceExistsMiddleware,
  verifyResourceOwnerMiddleware,
};

export {
  verifyExistingCustomer,
  verifyCustomersEmailMiddleware,
  verifyCustomerOwner,
};

export { verifyExistingSale, verifyExistingResources, verifyStock };

export { verifyEmailAlreadyExists, verifyResquestBodyToUpdateMiddleware };

export { validateShape, validateUuidMiddleware };
