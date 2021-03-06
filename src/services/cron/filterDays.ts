import { Sale, User } from '../../entities';

class FilterDays {
  async execute(user: User, date: Date, days: number) {
    const filterSale = user.sales.filter((sale) => {
      for (let x = 0; x <= days; x + 1) {
        if (date.getDate() - x === sale.sold_at.getDate()) {
          return sale;
        }
      }
    });
    const filteredUser = user;
    filteredUser.sales = filterSale;

    return filteredUser;
  }
}

export default FilterDays;
