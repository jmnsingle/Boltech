import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTaskService from '../services/CreateTaskService';

class TaskController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;
    const { project_id } = request.params;

    const service = container.resolve(CreateTaskService);
    const project = await service.execute({
      project_id,
      description,
    });

    return response.json(project);
  }
}

export default TaskController;
