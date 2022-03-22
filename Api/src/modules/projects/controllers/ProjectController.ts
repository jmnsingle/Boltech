import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProjectService from '../services/CreateProjectService';
import ListProjectService from '../services/ListProjectService';

class ProjectController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const service = container.resolve(CreateProjectService);

    const project = await service.execute({
      title,
      user_id: request.user.id,
    });

    return response.json(project);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(ListProjectService);

    const project = await service.execute(request.user.id);

    return response.json(project);
  }
}

export default ProjectController;
