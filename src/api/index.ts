import dotenv from 'dotenv';
import mongoose from 'mongoose';
import App from './app';

dotenv.config();

const app = new App();
mongoose.connect(`${process.env.MONGO_URL}`);

app.server(process.env.PORT || 3000);
