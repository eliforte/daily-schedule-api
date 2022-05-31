import { Router } from 'express';
import LoginController from '../controllers/LoginController';

export default class LoginRoutes {
  private _router: Router;

  private _controller: LoginController;

  constructor(controller: LoginController = new LoginController()) {
    this._router = Router();
    this._controller = controller;
    this._routes();
  }

  private _routes(): void {
    this._router.post('/login', this._controller.login);
  }

  public get router(): Router {
    return this._router;
  }
}
