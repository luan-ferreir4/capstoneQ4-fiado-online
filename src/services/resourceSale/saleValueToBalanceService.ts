import { User } from '../../entities';
import { IResourceSale, UserRepository } from '../../repositories';

class SaleValueToBalance {
  async execute(formatedList: IResourceSale[], loggedUser: User) {
    const userRepository = new UserRepository();

    const user = loggedUser;
    let totalGain = 0;

    formatedList.forEach((item) => {
      const quantitySold = item.quantity;
      const costPerUnity = item.unit_sold_cost;

      const totalValuePerResource = costPerUnity * quantitySold;
      totalGain += totalValuePerResource;
    });

    const newBalance = user.balance + totalGain;
    await userRepository.updateUser(user.id_user, { balance: newBalance });
  }
}

export default SaleValueToBalance;
