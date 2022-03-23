import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTaskService from '../services/CreateTaskService';
import ListTasksService from '../services/ListTasksService';
import UpdateTaskService from '../services/UpdateTaskService';

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

  public async update(request: Request, response: Response): Promise<Response> {
    const { task_id } = request.params;
    const { is_done, description } = request.body;

    const service = container.resolve(UpdateTaskService);
    const tasks = await service.execute({
      task_id,
      is_done,
      description,
    });

    return response.json(tasks);
  }
}

export default TaskController;
