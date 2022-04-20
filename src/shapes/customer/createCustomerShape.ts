import * as yup from 'yup';

const createCustomerShape = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().lowercase().required(),
  phone_number: yup.string().required(),
});

export default createCustomerShape;
