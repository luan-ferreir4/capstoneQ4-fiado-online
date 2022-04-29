import PDF from 'handlebars-pdf';
import fs from 'fs';
import { UserRepository } from '../../repositories';
import { User } from '../../entities';

const htmlCatalogue = fs.readFileSync(
  'src/templates/catalogue.handlebars',
  'utf-8'
);
class GenerateCatalogue {
  async execute(user: User, sendTo: User) {
    const findUser = await new UserRepository().getOneUser(user.id_user);
    const userResources = await findUser.resources;
    const pdfDoc = {
      template: htmlCatalogue,
      context: {
        user,
        name: sendTo,
        userResources,
      },
      path: `../../templates/attachments/catalogo-${sendTo.name}.pdf`,
    };
    PDF.create(pdfDoc);
  }
}

export default GenerateCatalogue;
