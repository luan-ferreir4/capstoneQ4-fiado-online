import PDF from 'handlebars-pdf';
import fs from 'fs';
import { User } from '../../entities';
import { CustomerRepository } from '../../repositories';

const html = fs.readFileSync('src/templates/relatory.handlebars', 'utf-8');
const relatoryOptionsEmail = async (user: User) => {
  const customers = await new CustomerRepository().getAllPerUser(user);

  const pdfDoc = {
    template: html,
    context: {
      name: user,
      customers,
    },
    path: `./src/templates/attachments/${
      user.name
    }${new Date().getHours()}.pdf`,
  };
  PDF.create(pdfDoc);

  const outOptions = {
    from: 'capsstone9@gmail.com',
    to: user.email,
    subject: 'Relatorio solicitado',
    template: 'relatoryHtml',
    context: {
      name: user,
    },
    attachments: [
      {
        filename: `${user.name}${new Date().getHours()}.pdf`,
        path: `./src/templates/attachments/${
          user.name
        }${new Date().getHours()}.pdf`,
      },
    ],
  };
  return outOptions;
};

export default relatoryOptionsEmail;
