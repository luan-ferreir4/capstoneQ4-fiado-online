import * as yup from 'yup';

import { hashSync } from 'bcrypt';

const createAdmin = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().lowercase().required(),
  password: yup
    .string()
    .transform((pwd) => hashSync(pwd, 10))
    .required(),
  isAdm: yup.bool().default(true),
});

export default createAdmin;
