import { inject, injectable } from 'tsyringe';

import ITaskRepository from '../repositories/ITaskRepository';
import Task from '../typeorm/entities/Task';

interface IRequestDTO {
  description: string;
  project_id: string;
}

@injectable()
class CreateTaskService {
  constructor(
    @inject('TaskRepository')
    private repository: ITaskRepository,
  ) {}

  public async execute({
    description,
    project_id,
  }: IRequestDTO): Promise<Task> {
    return this.repository.create({
      description,
      project_id,
    });
  }
}

export default CreateTaskService;
