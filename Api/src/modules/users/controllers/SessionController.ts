import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '../services/AuthenticateUserService';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const service = container.resolve(AuthenticateUserService);

    const { user, token } = await service.execute({ email, password });

    return response.json({ user, token });
  }
}

export default SessionController;
