import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import aiRoutes from './route/ai.route.js';
dotenv.config();

export const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cookieParser());

  app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
  });
  
  app.use('/api/ai', aiRoutes);

  return app;
}