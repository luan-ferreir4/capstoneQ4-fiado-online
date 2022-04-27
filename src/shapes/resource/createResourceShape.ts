import * as yup from 'yup';

const createResourceShape = yup.object().shape({
  resource_name: yup.string().required(),
  unit_cost: yup.number().positive().required(),
  units: yup.number().integer().positive().required(),
  description: yup.string().required(),
  createdOn: yup.date().default(() => new Date()),
  updatedAt: yup.date().default(() => new Date()),
});

export default createResourceShape;
