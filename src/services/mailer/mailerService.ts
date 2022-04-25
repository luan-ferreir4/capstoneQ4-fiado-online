import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';
import { User } from '../../entities';

const handlebarsOptions = {
  viewEngine: {
    partialsDir: path.resolve('./src/templates/'),
    defaultLayout: false,
  },
  viewPath: path.resolve('./src/templates/'),
};

class SendEmail {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'capsstone9@gmail.com',
      pass: 'fiadoonline2020',
    },
  });
  register(user: User, typeOptions) {
    this.transporter.use('compile', hbs(handlebarsOptions as any));
    this.transporter.sendMail(typeOptions(user), (err, info) => {
      if (err) console.log(err);
      else console.log(info);
    });
  }
}

export default SendEmail;
