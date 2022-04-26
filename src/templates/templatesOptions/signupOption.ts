import { User } from '../../entities';

const signupOptionsEmail = (user: User) => {
  const outOptions = {
    from: process.env.EMAIL_NAME,
    to: user.email,
    subject: 'Cadastro Comfirmado',
    template: 'email',
    context: {
      name: user.name,
    },
  };
  return outOptions;
};

export default signupOptionsEmail;
