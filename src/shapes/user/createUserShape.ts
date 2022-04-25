import * as yup from 'yup';

import { hashSync } from 'bcrypt';

const createUserShape = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().lowercase().required(),
  cpf: yup
    .string()
    .matches(/[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/, 'Invalid CPF format')
    .required(),
  password: yup
    .string()
    .transform((pwd) => hashSync(pwd, 10))
    .required(),
  balance: yup.number().required(),
  weekly_report_day: yup.number().optional(),
  monthly_report_day: yup.number().optional(),
});
export default createUserShape;
