import * as yup from 'yup';

const loginAdmin = yup.object().shape({
  email: yup.string().lowercase().required(),
  password: yup.string().required(),
});

export default loginAdmin;
