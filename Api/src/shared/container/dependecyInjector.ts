import { container } from 'tsyringe';

import IUserRepository from '../../modules/users/repositories/IUserRepository';
import UserRepository from '../../modules/users/typeorm/repositories/UserRepository';

import IProjectRepository from '../../modules/projects/repositories/IProjectRepository';
import ProjectRepository from '../../modules/projects/typeorm/repositories/ProjectRepository';

import ITaskRepository from '../../modules/projects/repositories/ITaskRepository';
import TaskRepository from '../../modules/projects/typeorm/repositories/TaskRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IProjectRepository>(
  'ProjectRepository',
  ProjectRepository,
);

container.registerSingleton<ITaskRepository>('TaskRepository', TaskRepository);
