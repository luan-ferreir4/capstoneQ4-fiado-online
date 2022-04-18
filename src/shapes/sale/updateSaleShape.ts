import * as yup from 'yup';

const updateSaleShape = yup.object().shape({
  expires_in: yup.date(),
  closed: yup.boolean(),
});

export default updateSaleShape;
