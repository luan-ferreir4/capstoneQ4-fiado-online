import * as yup from 'yup';

const createSaleShape = yup.object().shape({
  cold_at: yup.date().default(() => new Date()),
  expires_in: yup.date().required(),
  closed: yup.boolean().optional(),
});

export default createSaleShape;
