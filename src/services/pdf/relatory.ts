import PDF from 'handlebars-pdf';
import fs from 'fs';
import { User } from '../../entities';

const htmlRelatory = fs.readFileSync(
  'src/templates/relatory.handlebars',
  'utf-8'
);

const generateRelatory = (
  user: User,
  customerSale: Array<any>,
  resourcesList: Array<any>
) => {
  console.log(customerSale);
  const fullPriceResource = resourcesList.reduce(
    (prev, { unit_cost }) => prev + unit_cost,
    0
  );
  const fullCountResource = resourcesList.reduce(
    (prev, { units }) => prev + units,
    0
  );
  const pdfDoc = {
    template: htmlRelatory,
    context: {
      name: user.name,
      customers: customerSale,
      resources: resourcesList,
      priceResources: fullPriceResource,
      countResources: fullCountResource,
    },
    path: `./src/templates/attachments/${user.cpf.slice(2, -5)}.pdf`,
  };
  PDF.create(pdfDoc);
};
class CreateRelatory {
  async execute(user: User) {
    const sales = await user.sales;
    const resourcesList = await user.resources;
    const userCustomers = await user.customers;

    const newArray = [];

    userCustomers.forEach((item) => {
      const customerSales = sales.filter(
        (sale) => sale.customer.id_customers === item.id_customers
      );
      const listSale = {
        customer: item.name,
        customerSalesList: customerSales,
        countSale: customerSales.length,
      };
      newArray.push(listSale);
    });
    generateRelatory(user, newArray, resourcesList);
  }
}
export default CreateRelatory;
