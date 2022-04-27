import * as yup from 'yup';

const currentDate = new Date();

const dueDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate() + 14
);

const createSaleShape = yup.object().shape({
  resources: yup
    .array()
    .of(
      yup.object().shape({
        resource_name: yup
          .string()
          .strict()
          .required(
            'resource_name is a required field in resources list itens'
          ),
        quantity: yup
          .number()
          .strict()
          .required('quantity is a required field in resources list itens'),
        unit_sold_cost: yup
          .number()
          .strict()
          .required(
            'unit_sold_cost is a required field in resources list itens'
          ),
      })
    )
    .strict()
    .required(),
  customer_email: yup.string().strict().required(),
  closed: yup.boolean().default(() => false),
  sold_at: yup.date().default(() => currentDate),
  expires_in: yup.date().default(() => dueDate),
});

export default createSaleShape;
