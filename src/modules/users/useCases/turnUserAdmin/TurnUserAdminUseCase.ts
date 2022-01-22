import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findById(user_id);
    if (!userAlreadyExists) throw new Error("User Already not Exists");

    const turnAdmin = this.usersRepository.turnAdmin(userAlreadyExists);
    return turnAdmin;
  }
}

export { TurnUserAdminUseCase };
