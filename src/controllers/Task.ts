import Controller from './Controller';
import Service from '../services/Service';
import TaskService from '../services/Task';
import { ITaks } from '../utils/interfaces/ITaks';

export default class TaskController extends Controller<ITaks> {
  constructor(service: Service<ITaks> = new TaskService()) {
    super(service);
  }
}
