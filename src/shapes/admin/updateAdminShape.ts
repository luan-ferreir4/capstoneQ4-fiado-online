import * as yup from 'yup';

const updateAdmin = yup.object().shape({
  name: yup.string().optional(),
  email: yup.string().email().lowercase().optional(),
  password: yup.string().optional(),
});

export default updateAdmin;
