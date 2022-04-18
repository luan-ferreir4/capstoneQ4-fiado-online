import * as yup from 'yup';

const currentDate = new Date();

const dueDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate() + 14
);

const createSaleShape = yup.object().shape({
  resources: yup.array().strict().required(),
  customer: yup.string().strict().required(),
  closed: yup.boolean().strict().default(false),
  sold_at: yup
    .date()
    .strict()
    .default(() => currentDate),
  expires_in: yup
    .date()
    .strict()
    .default(() => dueDate),
});

export default createSaleShape;
