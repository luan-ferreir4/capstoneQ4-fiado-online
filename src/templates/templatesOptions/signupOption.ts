import { User } from '../../entities';

const signupOptionsEmail = (user: User) => {
  const outOptions = {
    from: 'capsstone9@gmail.com',
    to: user.email,
    subject: 'registration confirmation',
    template: 'email',
    context: {
      name: user.name,
    },
  };
  return outOptions;
};

export default signupOptionsEmail;
