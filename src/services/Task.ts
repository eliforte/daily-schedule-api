import { isValidObjectId } from 'mongoose';
import Model from '../models/Model';
import TaskModel from '../models/Task';
import Service from './Service';
import { ITaks } from '../utils/interfaces/ITaks';
import { TASK_NOT_EXIST } from '../utils/errors';

export default class TaskService extends Service<ITaks> {
  constructor(model: Model<ITaks> = new TaskModel()) {
    super(model);
  }

  public create = async (task: ITaks): Promise<ITaks> => {
    const setTaskInfos = {
      ...task,
      status: 'in progress',
      createdAt: new Date(),
      updatedAt: null,
    } as ITaks;

    const newTask = await this._model.create(setTaskInfos);
    return newTask;
  };

  public findAll = async (): Promise<ITaks[]> => this._model.findAll();

  public findById = async (id: string): Promise<ITaks | null> => {
    const findTask = await this._model.findById(id);
    if (!findTask) throw TASK_NOT_EXIST;
    return findTask;
  };

  public update = async (id: string, task: ITaks): Promise<ITaks | null> => {
    if (!isValidObjectId(id)) throw TASK_NOT_EXIST;
    task.updatedAt = new Date();
    const updatedTask = await this._model.update(id, task);
    return updatedTask;
  };

  public delete = async (id: string): Promise<ITaks | null> => {
    if (!isValidObjectId(id)) throw TASK_NOT_EXIST;
    const deletedTask = await this._model.delete(id);
    return deletedTask;
  };
}
