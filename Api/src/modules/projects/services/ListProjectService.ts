import { inject, injectable } from 'tsyringe';

import IProjectRepository from '../repositories/IProjectRepository';
import ITaskRepository from '../repositories/ITaskRepository';

interface ProjectWithTasks {
  project_id: string;
  title: string;
  tasks: Array<{
    id: string;
    project_id: string;
    description: string;
    created_at: Date;
    updated_at: Date;
  }>;
}

@injectable()
class ListProjectService {
  constructor(
    @inject('ProjectRepository')
    private repository: IProjectRepository,
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  public async execute(user_id: string): Promise<Array<ProjectWithTasks>> {
    const projects = await this.repository.findAll(user_id);
    const projectsWithTasks: Array<ProjectWithTasks> = [];

    for (let i = 0; i < projects.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const tasks = await this.taskRepository.findAll(projects[i].id);
      projectsWithTasks.push({
        project_id: projects[i].id,
        title: projects[i].title,
        tasks,
      });
    }

    return projectsWithTasks;
  }
}

export default ListProjectService;
