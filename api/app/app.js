import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import initalizeRoutes from "./routes/index.js"
import Models from './models/index.js';
import initalizeAuthentication from './initalize-authentication.js';
import errorHandler from './middlewares/error-handler.js';

const initalize = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded());
  mongoose.connect(process.env.MONGO_CONNECTION);
  initalizeAuthentication(app);
  initalizeRoutes(app);
  app.use(errorHandler);
  
}

export default initalize;