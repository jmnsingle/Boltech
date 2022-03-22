import { Router } from 'express';

import ProjectController from '../controllers/ProjectController';
import TaskController from '../controllers/TaskController';

const projectRouter = Router();
const projectController = new ProjectController();
const taskController = new TaskController();

projectRouter.post('/', projectController.create);

projectRouter.post('/tasks/:project_id', taskController.create);

export default projectRouter;
