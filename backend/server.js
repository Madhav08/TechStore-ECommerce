import express from 'express';
import dotenv from 'dotenv';

import connectDb from './config/db.js';

import productRoute from './routes/productRoutes.js';

dotenv.config();
connectDb();

const app = express();

app.use('/api/products', productRoute);

app.listen(
  process.env.PORT,
  console.log(
    `Server is up and running at port ${process.env.PORT} & on http://localhost:${process.env.PORT}`
  )
);
