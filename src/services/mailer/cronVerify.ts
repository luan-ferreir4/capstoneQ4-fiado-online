import { User } from '../../entities';
import { UserRepository } from '../../repositories';
import { CreateRelatory, SendEmail } from '../../services';
import { relatoryOptionsEmail } from '../../templates';

class CronVerifyService {
  async execute() {
    const userList: User[] = await new UserRepository().getAllUsers();

    const date = new Date();

    userList.forEach((e) => {
      console.log(e);
      if (e.weekly_report_day === date.getDay()) {
        new CreateRelatory().execute(e);
        new SendEmail().register(e, relatoryOptionsEmail);
        return 0;
      }
      if (e.monthly_report_day === date.getDate()) {
        new CreateRelatory().execute(e);
        new SendEmail().register(e, relatoryOptionsEmail);
        return 0;
      }
    });

    return userList;
  }
}

export default CronVerifyService;
