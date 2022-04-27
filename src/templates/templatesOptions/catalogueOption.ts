import { User } from '../../entities';

const catalogueOptionEmail = (recipient: User) => {
  const outOptions = {
    from: process.env.EMAIL_NAME,
    to: recipient.email,
    subject: 'Catálogo solicitado',
    template: 'catalogueHtml',
    context: {
      sendTo: recipient,
    },
    attachments: [
      {
        filename: `${recipient.name}.pdf`,
        path: `./src/templates/attachments/${recipient.name}.pdf`,
      },
    ],
  };
  return outOptions;
};
export default catalogueOptionEmail;
