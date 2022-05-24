import { Router } from 'express';
import Controller from '../controllers/Controller';

export default abstract class RouteGenerator<T> {
  protected _router: Router;

  protected _controller: Controller<T>;

  protected abstract _path: string;

  constructor(controller: Controller<T>) {
    this._controller = controller;
    this._router = Router();
  }

  public get router(): Router {
    return this._router;
  }

  protected abstract _routes(): void;
}
