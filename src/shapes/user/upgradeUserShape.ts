import * as yup from 'yup';

import { hashSync } from 'bcrypt';

const upgradeUserShape = yup.object().shape({
  name: yup.string(),
  email: yup.string().email().lowercase(),
  password: yup.string().transform((pwd) => hashSync(pwd, 10)),
  balance: yup.number(),
  weekly_report_day: yup.number(),
  monthly_report_day: yup.number(),
});
export default upgradeUserShape;
