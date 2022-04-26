import PDF from 'handlebars-pdf';
import fs from 'fs';
import { CustomerRepository } from '../../repositories';
import { User } from '../../entities';

const htmlRelatory = fs.readFileSync(
  'src/templates/relatory.handlebars',
  'utf-8'
);
class CreateRelatory {
  async execute(user: User) {
    const customers = await new CustomerRepository().getAllPerUser(user);

    const pdfDoc = {
      template: htmlRelatory,
      context: {
        name: user,
        customers,
      },
      path: `./src/templates/attachments/${user.cpf.slice(2, -5)}.pdf`,
    };
    PDF.create(pdfDoc);
  }
}

export default CreateRelatory;
