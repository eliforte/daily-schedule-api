declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT: string;
      MONGODB_URL: string;
      MONGODB_DEV_URL: string;
      SECRET: string;
    }
  }
}

export {};
