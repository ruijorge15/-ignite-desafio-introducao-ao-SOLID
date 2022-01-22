import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user: User = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
      admin: false,
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  findByIdIsAdmin(id: string): boolean | undefined {
    const userIsAdmin = this.users.some(
      (user) => user.id === id && user.admin === true
    );
    return userIsAdmin;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    const updateUser = receivedUser;
    updateUser.admin = true;
    updateUser.updated_at = new Date();
    return updateUser;
    // Complete aqui
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
