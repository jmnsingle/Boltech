import 'reflect-metadata';
import express, { Request, Response } from 'express';
import path from 'path';
import 'express-async-errors';

import AppError from '../errors/AppError';
import routes from './routes';

import '../database';
import '../container/dependecyInjector';

const app = express();

app.use(express.json());
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads')),
);
app.use(routes);

app.use((err: Error, _request: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: err.message,
  });
});

app.listen(process.env.PORT || 3333, () =>
  console.log('Server running on port 3333'),
);
