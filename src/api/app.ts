import express from 'express';
import cors from 'cors';

export default class App {
  public _app: express.Application;

  constructor() {
    this._app = express();
    this._app.use(express.json());
  }

  public server(port: string | number = 3000): void {
    this._app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }

  public newRoutes(router: express.Router): void {
    this._app.use(router);
  }

  public ErrorHandler(middleware: express.ErrorRequestHandler): void {
    this._app.use(middleware);
  }

  public useCors(options: cors.CorsOptions): void {
    this._app.use(cors(options));
  }
}
