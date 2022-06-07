import dotenv from 'dotenv';
import mongoose from 'mongoose';
import App from './app';
import UserRoutes from '../routes/User';
import LoginRoutes from '../routes/Login';
import TaskRoutes from '../routes/Task';
import ErrorHandler from '../middlewares/error';

dotenv.config();
const app = new App();
const databaseUrl = process.env.NODE_ENV === 'production'
  ? process.env.MONGODB_URL
  : process.env.MONGODB_DEV_URL;

mongoose.connect(`${databaseUrl}`);
const corsOptions = { origin: [`${process.env.PROD_CLIENT}`, 'http://localhost:9000'] };

app.useCors(corsOptions);
app.newRoutes(new UserRoutes().router);
app.newRoutes(new LoginRoutes().router);
app.newRoutes(new TaskRoutes().router);
app.ErrorHandler(ErrorHandler.handler);

app.server(process.env.PORT || 5050);
