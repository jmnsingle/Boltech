import { Router } from 'express';

import projectRouter from '../../../modules/projects/routes/project.routes';
import userRouter from '../../../modules/users/routes/user.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/projects', projectRouter);

export default routes;
