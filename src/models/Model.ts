import { Model as ModelDoc } from 'mongoose';

export default abstract class Model<T> {
  protected document: ModelDoc<T>;

  constructor(schema: ModelDoc<T>) {
    this.document = schema;
  }

  public async create(infos: T): Promise<T> {
    return this.document.create(infos);
  }

  public async findAll(): Promise<T[]> {
    return this.document.find();
  }

  public async findOne(id: string): Promise<T | null> {
    return this.document.findById(id);
  }

  public async findByEmail(email: string): Promise<T | null> {
    return this.document.findOne({ email });
  }

  public async update(id: string, infos: T): Promise<T | null> {
    return this.document.findByIdAndUpdate(id, infos, { new: true });
  }

  public async delete(id: string): Promise<T | null> {
    return this.document.findByIdAndDelete(id);
  }
}
