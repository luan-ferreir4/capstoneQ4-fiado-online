import * as yup from 'yup';

const updatedResourceShape = yup.object().shape({
  name: yup.string(),
  unit_cost: yup.number(),
  units: yup.number(),
  description: yup.string(),
  updatedAt: yup.date().default(() => new Date()),
});

export default updatedResourceShape;
