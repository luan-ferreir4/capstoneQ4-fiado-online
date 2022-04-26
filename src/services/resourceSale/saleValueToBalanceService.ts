import { User } from '../../entities';
import { IResourceSale } from '../../repositories';

class SaleValueToBalance {
  async execute(formatedList: IResourceSale[], loggedUser: User) {
    const user = loggedUser;
    let totalGain = 0;

    formatedList.forEach((item) => {
      const quantitySold = item.quantity;
      const costPerUnity = item.unit_sold_cost;

      const totalValuePerResource = costPerUnity * quantitySold;
      totalGain += totalValuePerResource;
    });

    user.balance += totalGain;
  }
}

export default SaleValueToBalance;
