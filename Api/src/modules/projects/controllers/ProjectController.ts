import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProjectService from '../services/CreateProjectService';

class ProjectController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const service = container.resolve(CreateProjectService);
    console.log('TITLE', title);

    const project = await service.execute({
      title,
      user_id: 'f4cf4e59-a49a-484b-8459-58e5c028755c',
    });

    return response.json(project);
  }
}

export default ProjectController;
