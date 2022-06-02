declare global {
  namespace Express {
    interface Request {
      user: {
        id?: string | undefined;
        name: string;
        email: string;
      };
    }
  }
}

export {};
