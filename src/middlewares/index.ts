import authAdmin from './jwt/authAdminMiddleware';
import authUser from './jwt/authUserMiddleware';
import checkLogin from './jwt/checkLoginMiddleware';
import verifyIdResourceExistsMiddleware from './resource/verifyIdResourceExistsMiddleware';
import verifyExistingResourceMiddleware from './resource/verifyExistingResourceMiddleware';
import verifyExistingSale from './sale/verifyExistingSaleMiddleware';
import verifyExistingCustomer from './sale/verifyExistingCustomerMiddleware';
import verifyStock from './sale/verifyStockMiddeware';
import verifyEmailAlreadyExists from './user/verifyEmailAlreadyExists';
import validateShape from './yup/validateShapeMiddleware';
import verifyResquestBodyToUpdateMiddleware from './yup/verifyRequestBodyToUpdateMiddleware';
import verifyCustomersEmailMiddleware from './customer/verifyCustomersEmailMiddleware';
import verifyResourceOwnerMiddleware from './resource/veifyResourceOwnerMiddleware';

export {
  authUser,
  authAdmin,
  checkLogin,
  verifyExistingResourceMiddleware,
  verifyIdResourceExistsMiddleware,
  verifyExistingSale,
  verifyExistingCustomer,
  verifyStock,
  verifyEmailAlreadyExists,
  verifyResquestBodyToUpdateMiddleware,
  validateShape,
  verifyCustomersEmailMiddleware,
  verifyResourceOwnerMiddleware,
};
