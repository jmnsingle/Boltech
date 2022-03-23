import { inject, injectable } from 'tsyringe';

import IProjectRepository from '../repositories/IProjectRepository';
import Project from '../typeorm/entities/Project';

interface IRequestDTO {
  title: string;
  user_id: string;
}

@injectable()
class CreateProjectService {
  constructor(
    @inject('ProjectRepository')
    private repository: IProjectRepository,
  ) {}

  public async execute({ title, user_id }: IRequestDTO): Promise<Project> {
    return this.repository.create({
      title,
      user_id,
    });
  }
}

export default CreateProjectService;
