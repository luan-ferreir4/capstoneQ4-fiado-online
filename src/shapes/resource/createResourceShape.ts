import * as yup from 'yup';

const createResourceShape = yup.object().shape({
  unit_cost: yup.number().required(),
  units: yup.number().required(),
  description: yup.string().required(),
  createdOn: yup.date().default(new Date()),
  updatedAt: yup.date().default(new Date()),
});

export default createResourceShape;
