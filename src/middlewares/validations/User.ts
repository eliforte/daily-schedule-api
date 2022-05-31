import { ObjectSchema } from 'joi';
import Validate from './Validate';
import { SCHEMAUser } from '../../utils/schemas';

export default class ValidadeUser extends Validate {
  constructor(schema: ObjectSchema = SCHEMAUser) {
    super(schema);
  }
}
