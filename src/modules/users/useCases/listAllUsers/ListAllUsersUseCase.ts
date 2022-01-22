import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userAlreadyExists = this.usersRepository.findById(user_id);
    if (!userAlreadyExists) throw new Error("User Already not Exists");

    const userIsAdmin = this.usersRepository.findByIdIsAdmin(user_id);
    if (!userIsAdmin) throw new Error("User is not Admin");

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
