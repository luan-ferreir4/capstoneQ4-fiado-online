import * as yup from 'yup';

import { hashSync } from 'bcrypt';

const createUserShape = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().lowercase().required(),
  cpf: yup
    .string()
    // eslint-disable-next-line no-useless-escape
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'Invalid CPF format')
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
