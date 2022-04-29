import PDF from 'handlebars-pdf';
import fs from 'fs';
import { Customer, User, Sale } from '../../entities';

const htmlRelatory = fs.readFileSync(
  'src/templates/relatory.handlebars',
  'utf-8'
);

const generateRelatory = (
  user: User,
  customerSale: Array<any>,
  resourcesList: Array<any>
) => {
  const totalSales = customerSale.reduce(
    (prev, { countSale }) => prev + countSale,
    0
  );

  const totalDebits = customerSale.reduce(
    (prev, { totalDebits }) => prev + totalDebits,
    0
  );

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
      totalSales,
      totalDebits,
    },
    path: `../../templates/attachments/${user.cpf.slice(2, -5)}.pdf`,
  };
  PDF.create(pdfDoc);
};

const filterCustomerSales = (
  sales: Sale[],
  customers: Customer[]
): Array<any> => {
  const output = [];

  customers.forEach((item) => {
    let totalDebits: number = 0;
    const customerSales = sales.filter(
      (sale) => sale.customer.id_customers === item.id_customers
    );
    const openSales = customerSales.filter((sale) => !sale.closed);
    openSales.forEach((sale) => {
      sale.resources_sales.forEach((resourceSale) => {
        const quantitySold = resourceSale.quantity;
        const costPerUnity = resourceSale.unit_sold_cost;

        const totalValuePerResource = costPerUnity * quantitySold;
        totalDebits += totalValuePerResource;
      });
    });
    const listSale = {
      customer: item.name,
      customerSalesList: customerSales,
      countSale: customerSales.length,
      totalDebits,
    };
    output.push(listSale);
  });

  return output;
};

class CreateRelatory {
  async execute(user: User) {
    const sales = await user.sales;
    const resourcesList = await user.resources;
    const userCustomers = await user.customers;

    const newArray = filterCustomerSales(sales, userCustomers);

    generateRelatory(user, newArray, resourcesList);
  }
}
export default CreateRelatory;
