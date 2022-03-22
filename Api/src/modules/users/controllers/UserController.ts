import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '../services/CreateUserService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const service = container.resolve(CreateUserService);

    const user = await service.execute({
      email,
      password,
    });

    return response.json(user);
  }
}

export default UsersController;
