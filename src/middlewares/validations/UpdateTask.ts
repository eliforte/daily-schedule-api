import { ObjectSchema } from 'joi';
import Validate from './Validate';
import { SCHEMAUpdateTask } from '../../utils/schemas';

export default class ValidadeUpdateTask extends Validate {
  constructor(schema: ObjectSchema = SCHEMAUpdateTask) {
    super(schema);
  }
}
