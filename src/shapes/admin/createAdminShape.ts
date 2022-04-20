import * as yup from 'yup';

const createAdmin = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().lowercase().required(),
  password: yup.string().required(),
  isAdm: yup.bool().default(true),
});

export default createAdmin;
