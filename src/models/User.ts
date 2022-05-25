import mongoose from 'mongoose';
import Model from './Model';
import { IUser } from '../utils/interfaces/IUser';

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
}, { versionKey: false });

export default class UserModel extends Model<IUser> {
  constructor() {
    super(mongoose.model('User', UserSchema));
  }
}
