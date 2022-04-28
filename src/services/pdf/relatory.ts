import PDF from 'handlebars-pdf';
import fs from 'fs';
import { User } from '../../entities';
import { CustomerRepository } from '../../repositories';

const htmlRelatory = fs.readFileSync(
  'src/templates/relatory.handlebars',
  'utf-8'
);
class CreateRelatory {
  async execute(user: User) {
    const userCustomers = await user.customers;
    const pdfDoc = {
      template: htmlRelatory,
      context: {
        name: user,
        customers: userCustomers,
      },
      path: `./src/templates/attachments/${user.cpf.slice(2, -5)}.pdf`,
    };
    PDF.create(pdfDoc);
  }
}

export default CreateRelatory;
