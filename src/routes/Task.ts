import RouteGenerator from './RouteGenerator';
import Controller from '../controllers/Controller';
import TaskController from '../controllers/Task';
import Validate from '../middlewares/validations/Validate';
import ValidadeTask from '../middlewares/validations/Task';
import ValidateUpdateTask from '../middlewares/validations/UpdateTask';
import Auth from '../utils/auth/Token';
import { ITaks } from '../utils/interfaces/ITaks';

export default class TaskRoutes extends RouteGenerator<ITaks> {
  protected _path: string = '/tasks';

  private _validate: Validate;

  constructor(
    controller: Controller<ITaks> = new TaskController(),
    validate: Validate = new ValidadeTask(),
    updateTask: ValidateUpdateTask = new ValidateUpdateTask(),
  ) {
    super(controller);
    this._validate = validate;
    this._validateUpdateTask = updateTask;
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
      this._validateUpdateTask.validateReqBody,
      this._controller.update,
    );
    this._router.delete(
      `${this._path}/:id`,
      Auth.verifyToken,
      this._controller.delete,
    );
  }
}
