/* eslint-disable no-unused-vars */
import { Request as Req, Response as Res, NextFunction } from 'express';
import Service from '../services/Service';

export default abstract class Controller<T> {
  protected _service: Service<T>;

  constructor(service: Service<T>) {
    this._service = service;
  }

  public abstract create(req: Req, res: Res, next: NextFunction): Promise<typeof res | void>;

  public findAll = async (_req: Req, res: Res, next: NextFunction): Promise<typeof res | void> => {
    try {
      const result = await this._service.findAll();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  public findOne = async (req: Req, res: Res, next: NextFunction): Promise<typeof res | void> => {
    try {
      const result = await this._service.findById(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Req, res: Res, next: NextFunction): Promise<typeof res | void> => {
    try {
      const result = await this._service.update(req.params.id, req.body);
      res.status(200).json({ result, message: 'successfully updated' });
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Req, res: Res, next: NextFunction): Promise<typeof res | void> => {
    try {
      await this._service.delete(req.params.id);
      res.status(204).json({ message: 'successfully deleted' });
    } catch (error) {
      next(error);
    }
  };
}
