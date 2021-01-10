import express from 'express';
import dotenv from 'dotenv';

import connectDb from './config/db.js';
import productRoute from './routes/productRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();
connectDb();

const app = express();

// routes
app.use('/api/products', productRoute);

// MiddleWares
app.use(notFound);
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(
    `Server is up and running at port ${process.env.PORT}, on ${process.env.NODE_ENV} mode & on url http://localhost:${process.env.PORT}`
  )
);
