import { Request as Req, Response as Res, NextFunction } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import { IToken } from '../interfaces/IUser';
import { MISSING_TOKEN, TOKEN_INVALID } from '../errors';

export default class Auth {
  public static createToken(payload: IToken): string {
    const options: SignOptions = {
      expiresIn: '1h',
    };
    const token = jwt.sign(payload, process.env.SECRET, options);
    return token;
  }

  public static verifyToken = async (req: Req, res: Res, next: NextFunction): Promise<void> => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) throw MISSING_TOKEN;
      const decoded = jwt.verify(token, process.env.SECRET) as IToken;
      if (!decoded) throw TOKEN_INVALID;
      req.user = decoded;
      next();
    } catch (error) {
      next(error);
    }
  };
}
