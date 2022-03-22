import { Router } from 'express';

import checkAuthentication from '../../../modules/users/middlewares/checkAuthentication';
import projectRouter from '../../../modules/projects/routes/project.routes';
import userRouter from '../../../modules/users/routes/user.routes';
import sessionRouter from '../../../modules/users/routes/session.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/projects', checkAuthentication, projectRouter);
routes.use('/sessions', sessionRouter);

export default routes;
