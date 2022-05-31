import { ObjectSchema } from 'joi';
import Validate from './Validate';
import { SCHEMALogin } from '../../utils/schemas';

export default class ValidadeLogin extends Validate {
  constructor(schema: ObjectSchema = SCHEMALogin) {
    super(schema);
  }
}
