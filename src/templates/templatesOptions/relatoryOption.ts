import { User } from '../../entities';

const relatoryOptionsEmail = (user: User) => {
  const outOptions = {
    from: process.env.EMAIL_NAME,
    to: user.email,
    subject: 'Relatorio solicitado',
    template: 'relatoryHtml',
    context: {
      name: user.name,
    },
    attachments: [
      {
        filename: `${user.cpf.slice(2, -5)}.pdf`,
        path: `./src/templates/attachments/${user.cpf.slice(2, -5)}.pdf`,
      },
    ],
  };
  return outOptions;
};

export default relatoryOptionsEmail;
