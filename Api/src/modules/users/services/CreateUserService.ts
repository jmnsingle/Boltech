import { inject, injectable } from 'tsyringe';

import IUserRepository from '../repositories/IUserRepository';
import User from '../typeorm/entities/User';

interface IRequestDTO {
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private repository: IUserRepository,
  ) {}

  public async execute({ email, password }: IRequestDTO): Promise<User> {
    return this.repository.create({
      email,
      password,
    });
  }
}

export default CreateUserService;
