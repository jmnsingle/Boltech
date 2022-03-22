import { getRepository, Repository } from 'typeorm';

import ITaskDTO from '../../dtos/ITaskDTO';
import ITaskRepository from '../../repositories/ITaskRepository';
import Task from '../entities/Task';

class TaskRepository implements ITaskRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = getRepository(Task);
  }

  public async create(data: ITaskDTO): Promise<Task> {
    const project = this.repository.create(data);

    await this.repository.save(project);

    return project;
  }

  public async save(data: Task): Promise<Task> {
    return this.repository.save(data);
  }

  public async findAll(project_id: string): Promise<Task[]> {
    return this.repository.find({ where: { project_id } });
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export default TaskRepository;
