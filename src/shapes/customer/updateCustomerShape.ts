import * as yup from 'yup';

const updateCustomerShape = yup.object().shape({
  name: yup.string(),
  email: yup.string().email().lowercase(),
  phone_number: yup.string(),
});

export default updateCustomerShape;
