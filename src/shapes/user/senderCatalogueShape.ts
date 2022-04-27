import * as yup from 'yup';

const sendCatalogueShape = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().lowercase().required(),
});
export default sendCatalogueShape;
