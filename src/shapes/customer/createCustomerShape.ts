import * as yup from 'yup';

const createCustomerShape = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().lowercase().required(),
  phone_number: yup
    .string()
    .matches(
      /[0-9]{2}-9[0-9]{4}-[0-9]{4}/,
      'Format number: 00-90000-0000. ps: the third digit must equal 9'
    )
    .required(),
});

export default createCustomerShape;
