import dotenv from 'dotenv';
import mongoose from 'mongoose';
import App from './app';

dotenv.config();

const app = new App();
const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URL : process.env.MONGODB_DEV_URL;
mongoose.connect(databaseUrl);

app.server(process.env.PORT || 3000);
