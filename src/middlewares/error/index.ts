import { Request as Req, Response as Res } from 'express';
import { ValidationError } from 'joi';
import { IError } from '../../utils/interfaces/IError';

interface IErrorResponse extends ValidationError, IError {}

export default class ErrorHandler {
  public static handler = (err: IErrorResponse, req: Req, res: Res): void => {
    if (err.isJoi) {
      res.status(400).json(err.details[0].message);
    }

    if (err.status) {
      res.status(err.status).json(err.message);
    }

    res.status(500).json(err.message);
  };
}
