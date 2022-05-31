import Controller from './Controller';
import Service from '../services/Service';
import UserService from '../services/User';
import { IUser } from '../utils/interfaces/IUser';

export default class UserController extends Controller<IUser> {
  constructor(service: Service<IUser> = new UserService()) {
    super(service);
  }
}
