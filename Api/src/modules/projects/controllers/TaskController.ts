import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTaskService from '../services/CreateTaskService';
import ListTasksService from '../services/ListTasksService';

class TaskController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;
    const { project_id } = request.params;

    const service = container.resolve(CreateTaskService);
    const task = await service.execute({
      project_id,
      description,
    });

    return response.json(task);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { project_id } = request.params;

    const service = container.resolve(ListTasksService);
    const tasks = await service.execute(project_id);

    return response.json(tasks);
  }
}

export default TaskController;
