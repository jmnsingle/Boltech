import ITaskDTO from '../dtos/ITaskDTO';
import Task from '../typeorm/entities/Task';

export default interface ITaskRepository {
  create(data: ITaskDTO): Promise<Task>;
  save(data: Task): Promise<Task>;
  findAll(): Promise<Array<Task>>;
  delete(id: string): Promise<void>;
}
