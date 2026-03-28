import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import aiRoutes from './route/ai.route.js';
import cors from 'cors';
dotenv.config();

export const createServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());

  app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
  });
  
  app.use('/api/ai', aiRoutes);

  return app;
}