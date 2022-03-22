import { inject, injectable } from 'tsyringe';

import ITaskRepository from '../repositories/ITaskRepository';
import Task from '../typeorm/entities/Task';

@injectable()
class ListProjectService {
  constructor(
    @inject('TaskRepository')
    private repository: ITaskRepository,
  ) {}

  public async execute(project_id: string): Promise<Array<Task>> {
    return this.repository.findAll(project_id);
  }
}

export default ListProjectService;
