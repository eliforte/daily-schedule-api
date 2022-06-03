declare global {
  namespace Express {
    interface Request {
      user: {
        _id?: string | undefined;
        name: string;
        email: string;
      };
    }
  }
}

export {};
