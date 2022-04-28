import authAdmin from './jwt/authAdminMiddleware';
import authUser from './jwt/authUserMiddleware';
import checkLogin from './jwt/checkLoginMiddleware';
import verifyIdResourceExistsMiddleware from './resource/verifyIdResourceExistsMiddleware';
import verifyExistingResourceMiddleware from './resource/verifyExistingResourceMiddleware';
import verifyExistingSale from './sale/verifyExistingSaleMiddleware';
import verifyExistingCustomer from './sale/verifyExistingCustomerMiddleware';
import verifyExistingResources from './sale/verifyExistingResourcesMiddlewares';
import verifyStock from './sale/verifyStockMiddeware';
import verifyEmailAlreadyExists from './user/verifyEmailAlreadyExists';
import validateShape from './yup/validateShapeMiddleware';
import verifyResquestBodyToUpdateMiddleware from './yup/verifyRequestBodyToUpdateMiddleware';
import verifyCustomersEmailMiddleware from './customer/verifyCustomersEmailMiddleware';
import verifyResourceOwnerMiddleware from './resource/veifyResourceOwnerMiddleware';
import validateUuidMiddleware from './uuid/validateUuidMiddleware';

export {
  authUser,
  authAdmin,
  checkLogin,
  verifyExistingResourceMiddleware,
  verifyIdResourceExistsMiddleware,
  verifyExistingSale,
  verifyExistingCustomer,
  verifyExistingResources,
  verifyStock,
  verifyEmailAlreadyExists,
  verifyResquestBodyToUpdateMiddleware,
  validateShape,
  verifyCustomersEmailMiddleware,
  verifyResourceOwnerMiddleware,
  validateUuidMiddleware,
};
