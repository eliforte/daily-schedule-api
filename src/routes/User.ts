import RouteGenerator from './RouteGenerator';
import Controller from '../controllers/Controller';
import UserController from '../controllers/User';
import Validate from '../middlewares/validations/Validate';
import ValidadeUser from '../middlewares/validations/User';
import Auth from '../utils/auth/Token';
import { IUser } from '../utils/interfaces/IUser';

export default class UserRoutes extends RouteGenerator<IUser> {
  protected _path: string = '/users';

  private _validate: Validate;

  constructor(
    controller: Controller<IUser> = new UserController(),
    validate: Validate = new ValidadeUser(),
  ) {
    super(controller);
    this._validate = validate;
    this._routes();
  }

  protected _routes(): void {
    this._router.get(
      `${this._path}/:id`,
      Auth.verifyToken,
      this._controller.findOne,
    );
    this._router.get(
      this._path,
      Auth.verifyToken,
      this._controller.findAll,
    );
    this._router.post(
      this._path,
      Auth.verifyToken,
      this._validate.validateReqBody,
      this._controller.create,
    );
    this._router.put(
      `${this._path}/:id`,
      Auth.verifyToken,
      this._validate.validateReqBody,
      this._controller.update,
    );
    this._router.delete(
      `${this._path}/:id`,
      Auth.verifyToken,
      this._controller.delete,
    );
  }
}
