import * as yup from 'yup';

import { hashSync } from 'bcrypt';

const upgradeUserShape = yup.object().shape({
  name: yup.string(),
  email: yup.string().email().lowercase(),
  cpf: yup
    .string()
    // eslint-disable-next-line no-useless-escape
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'Invalid CPF format')
    .required(),
  password: yup.string().transform((pwd) => hashSync(pwd, 10)),
  balance: yup.number(),
  weekly_report_day: yup.number(),
  monthly_report_day: yup.number(),
});
export default upgradeUserShape;
