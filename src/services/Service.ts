/* eslint-disable no-unused-vars */
import Model from '../models/Model';

export default abstract class Service<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public abstract create(infos: T): Promise<T | string>;

  public abstract findAll(): Promise<T[]>;

  public abstract findOne(id: string): Promise<T | null>;

  public abstract update(id: string, infos: T): Promise<T | null>;

  public abstract delete(id: string): Promise<T | null>;
}
