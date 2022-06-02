/* eslint-disable no-unused-vars */
import { NextFunction as Next, Request as Req, Response as Res } from 'express';
import { ValidationError } from 'joi';
import { IError } from '../../utils/interfaces/IError';

interface IErrorResponse extends ValidationError, IError {}

export default class ErrorHandler {
  public static handler = (err: IErrorResponse, req: Req, res: Res, next: Next) => {
    if (err.isJoi) {
      return res.status(400).json({ message: err.details[0].message });
    }

    if (err.status) {
      return res.status(err.status).json({ message: err.message });
    }

    return res.status(500).json({ message: err.message });
  };
}
