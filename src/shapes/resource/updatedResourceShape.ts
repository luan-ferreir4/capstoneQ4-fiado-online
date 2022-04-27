import * as yup from 'yup';

const updatedResourceShape = yup.object().shape({
  name: yup.string(),
  unit_cost: yup.number().positive(),
  units: yup.number().positive().integer(),
  description: yup.string(),
  updatedAt: yup.date().default(() => new Date()),
});

export default updatedResourceShape;
