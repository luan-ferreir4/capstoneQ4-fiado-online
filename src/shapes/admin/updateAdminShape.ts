import * as yup from 'yup';

const updateAdmin = yup.object().shape({
  name: yup.string(),
  email: yup.string().email().lowercase(),
  password: yup.string(),
});

export default updateAdmin;
