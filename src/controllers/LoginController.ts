import { Request as Req, Response as Res, NextFunction } from 'express';
import LoginService from '../services/Login';

export default class LoginController {
  private _service: LoginService;

  constructor(service: LoginService = new LoginService()) {
    this._service = service;
  }

  public login = async (req: Req, res: Res, next: NextFunction): Promise<typeof res | void> => {
    try {
      const { email, password } = req.body;
      const result = await this._service.login(email, password);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
