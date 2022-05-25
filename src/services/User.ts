import bcrypt from 'bcrypt';
import Model from '../models/Model';
import UserModel from '../models/User';
import Service from './Service';
import { IUser } from '../utils/interfaces/IUser';

export default class UserService extends Service<IUser> {
  constructor(model: Model<IUser> = new UserModel()) {
    super(model);
  }

  public create = async (user: IUser): Promise<string> => {
    const { name, email, password } = user;

    const userExist = await this._model.findByEmail(email);
    if (userExist) return 'User already exist';

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await this._model.create({ name, email, password: hash });
    // função de criar token aqui

    return newUser;
  };

  
}
