import bcrypt from 'bcrypt';
import Model from '../models/Model';
import UserModel from '../models/User';
import Auth from '../utils/auth/Token';
import { IUser } from '../utils/interfaces/IUser';
import { ILogin } from '../utils/interfaces/ILogin';
import { USER_NOT_EXIST, INCORRECT_USER } from '../utils/errors';

export default class LoginServce {
  private _model: Model<IUser>;

  constructor(model: Model<IUser> = new UserModel()) {
    this._model = model;
  }

  public login = async (email: string, password: string): Promise<ILogin> => {
    const user = await this._model.findByEmail(email);
    if (!user) throw USER_NOT_EXIST;

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) throw INCORRECT_USER;

    const token = Auth.createToken({ _id: user._id, email, name: user.name });

    return { token, name: user.name, _id: user._id };
  };
}
