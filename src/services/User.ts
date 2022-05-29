import bcrypt from 'bcrypt';
import Model from '../models/Model';
import UserModel from '../models/User';
import Service from './Service';
import Auth from '../utils/auth/Token';
import { IUser } from '../utils/interfaces/IUser';
import { USER_EXIST } from '../utils/errors';

export default class UserService extends Service<IUser> {
  constructor(model: Model<IUser> = new UserModel()) {
    super(model);
  }

  public create = async (user: IUser): Promise<string> => {
    const { name, email, password } = user;

    const userExist = await this._model.findByEmail(email);
    if (userExist) throw USER_EXIST;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await this._model.create({ name, email, password: hash });
    const token = Auth.createToken({ _id: newUser._id, name, email });

    return token;
  };

  public findAll = async (): Promise<IUser[]> => this._model.findAll();

  public findById = async (id: string): Promise<IUser | null> => this._model.findById(id);

  public update = async (id: string, data: IUser): Promise<IUser | null> => (
    this._model.update(id, data)
  );

  public delete = async (id: string): Promise<IUser | null> => this._model.delete(id);
}
