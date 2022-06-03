import { Request as Req, Response as Res, NextFunction } from 'express';
import Controller from './Controller';
import Service from '../services/Service';
import UserService from '../services/User';
import { IUser } from '../utils/interfaces/IUser';

export default class UserController extends Controller<IUser> {
  constructor(service: Service<IUser> = new UserService()) {
    super(service);
  }

  public create = async (req: Req, res: Res, next: NextFunction): Promise<typeof res | void> => {
    try {
      const result = await this._service.create(req.body);
      res.status(201).json({ result, message: 'successfully created' });
    } catch (error) {
      next(error);
    }
  };
}
