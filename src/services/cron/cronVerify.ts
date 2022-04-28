import { User } from '../../entities';
import { UserRepository } from '../../repositories';
import { CreateRelatory, SendEmail } from '..';
import { relatoryOptionsEmail } from '../../templates';
import FilterDays from './filterDays';

class CronVerifyService {
  async execute() {
    const userList: User[] = await new UserRepository().getAllUsers();
    const date = new Date();
    const newList = userList.forEach(async (e) => {
      if (e.weekly_report_day === date.getDay()) {
        const currentUser = await new FilterDays().byWeek(e, date, 6);

        new CreateRelatory().execute(currentUser);
        new SendEmail().register(currentUser, relatoryOptionsEmail);
      }
      if (e.monthly_report_day === date.getDate()) {
        const currentUser = await new FilterDays().byMonth(e, date, 30);

        new CreateRelatory().execute(currentUser);
        new SendEmail().register(currentUser, relatoryOptionsEmail);
      }
    });

    return newList;
  }
}

export default CronVerifyService;
