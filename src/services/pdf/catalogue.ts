import PDF from 'handlebars-pdf';
import fs from 'fs';
import { ResourceRepository, UserRepository } from '../../repositories';
import { User } from '../../entities';

const htmlCatalogue = fs.readFileSync(
  'src/templates/catalogue.handlebars',
  'utf-8'
);
class GenerateCatalogue {
  async execute(user: User, sendTo: User) {
    const resourcers = await new UserRepository().getAllResourcers(user);
    console.log(resourcers);
    const pdfDoc = {
      template: htmlCatalogue,
      context: {
        name: sendTo,
        resourcers,
      },
      path: `./src/templates/attachments/${sendTo.name}.pdf`,
    };
    PDF.create(pdfDoc);
  }
}

export default GenerateCatalogue;
