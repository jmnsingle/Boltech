import { inject, injectable } from 'tsyringe';

import IProjectRepository from '../repositories/IProjectRepository';
import Project from '../typeorm/entities/Project';

@injectable()
class ListTasksService {
  constructor(
    @inject('TaskRepository')
    private repository: IProjectRepository,
  ) {}

  public async execute(project_id: string): Promise<Array<Project>> {
    return this.repository.findAll(project_id);
  }
}

export default ListTasksService;
