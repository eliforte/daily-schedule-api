import mongoose from 'mongoose';
import Model from './Model';
import { ITaks } from '../utils/interfaces/ITaks';

const TaskSchema = new mongoose.Schema<ITaks>({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: false },
}, { versionKey: false });

export default class TaskModel extends Model<ITaks> {
  constructor() {
    super(mongoose.model('Task', TaskSchema));
  }
}
