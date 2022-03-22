import { getRepository, Repository } from 'typeorm';

import IProjectRepository from '../../repositories/IProjectRepository';
import IProjectDTO from '../../dtos/IProjectDTO';
import Project from '../entities/Project';

class ProjectRepository implements IProjectRepository {
  private repository: Repository<Project>;

  constructor() {
    this.repository = getRepository(Project);
  }

  public async create(data: IProjectDTO): Promise<Project> {
    const project = this.repository.create(data);

    await this.repository.save(project);

    return project;
  }

  public async save(data: Project): Promise<Project> {
    return this.repository.save(data);
  }

  public async findAll(user_id: string): Promise<Project[]> {
    return this.repository.find({ where: { user_id } });
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export default ProjectRepository;
