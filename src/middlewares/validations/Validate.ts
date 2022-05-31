import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { ObjectSchema } from 'joi';

export default abstract class Validate {
  protected _schema: ObjectSchema;

  constructor(schema: ObjectSchema) {
    this._schema = schema;
  }

  public validateReqBody = async (req: Req, res: Res, next: Next): Promise <typeof res | void> => {
    try {
      const result = this._schema.validate(req.body);
      if (result.error) {
        next(result.error);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}
