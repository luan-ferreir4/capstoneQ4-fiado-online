import * as yup from 'yup';

import { hashSync } from 'bcrypt';

const updateAdmin = yup.object().shape({
  name: yup.string(),
  email: yup.string().email().lowercase(),
  password: yup.string().transform((pwd) => hashSync(pwd, 10)),
});

export default updateAdmin;
