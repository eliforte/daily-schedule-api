import { ObjectSchema } from 'joi';
import Validate from './Validate';
import { SCHEMATask } from '../../utils/schemas';

export default class ValidadeTask extends Validate {
  constructor(schema: ObjectSchema = SCHEMATask) {
    super(schema);
  }
}
