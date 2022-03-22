import { getRepository, Repository } from 'typeorm';

import IUserRepository from '../../repositories/IUserRepository';
import { IUserDTO } from '../../dtos/IUserDTO';
import User from '../entities/User';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async create(data: IUserDTO): Promise<User> {
    const user = this.repository.create(data);

    await this.repository.save(user);

    return user;
  }

  public async save(data: User): Promise<User> {
    return this.repository.save(data);
  }

  public async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export default UserRepository;
