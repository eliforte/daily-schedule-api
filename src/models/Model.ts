import { Model as ModelDoc } from 'mongoose';

export default abstract class Model<T> {
  protected schema: ModelDoc<T>;

  constructor(schema: ModelDoc<T>) {
    this.schema = schema;
  }

  public async create(infos: T): Promise<T> {
    return this.schema.create(infos);
  }

  public async findAll(): Promise<T[]> {
    return this.schema.find();
  }

  public async findOne(id: string): Promise<T | null> {
    return this.schema.findById(id);
  }

  public async findByEmail(email: string): Promise<T | null> {
    return this.schema.findOne({ email });
  }

  public async update(id: string, infos: T): Promise<T | null> {
    return this.schema.findByIdAndUpdate(id, infos, { new: true });
  }

  public async delete(id: string): Promise<T | null> {
    return this.schema.findByIdAndDelete(id);
  }
}
