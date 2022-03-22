import { IUserDTO } from '../dtos/IUserDTO';
import User from '../typeorm/entities/User';

export default interface IUserRepository {
  create(data: IUserDTO): Promise<User>;
  save(data: User): Promise<User>;
  findAll(): Promise<Array<User>>;
  delete(id: string): Promise<void>;
}
