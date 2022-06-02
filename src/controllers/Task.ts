import { Request as Req, Response as Res, NextFunction } from 'express';
import Controller from './Controller';
import Service from '../services/Service';
import TaskService from '../services/Task';
import { ITaks } from '../utils/interfaces/ITaks';

export default class TaskController extends Controller<ITaks> {
  constructor(service: Service<ITaks> = new TaskService()) {
    super(service);
  }

  public create = async (req: Req, res: Res, next: NextFunction): Promise<typeof res | void> => {
    try {
      const { title, description } = req.body;
      const { id } = req.user;
      const result = await this._service.create({ title, description, userId: id } as ITaks);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
}
