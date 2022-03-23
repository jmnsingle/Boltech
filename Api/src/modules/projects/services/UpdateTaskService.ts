import { inject, injectable } from 'tsyringe';

import ITaskRepository from '../repositories/ITaskRepository';
import Task from '../typeorm/entities/Task';

interface IRequestDTO {
  task_id: string;
  description: string;
  is_done: boolean;
}
@injectable()
class UpdateTaskService {
  constructor(
    @inject('TaskRepository')
    private repository: ITaskRepository,
  ) {}

  public async execute({
    task_id,
    description,
    is_done,
  }: IRequestDTO): Promise<Task> {
    const task = await this.repository.findById(task_id);

    if (!task) {
      throw new Error('Task not exist');
    }

    Object.assign(task, { description, is_done });

    return this.repository.save(task);
  }
}

export default UpdateTaskService;
