import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';

dotenv.config();

const app = express();

// Connect to database
connectDb();

app.get('/', (req, res) => {
  res.send('Hello World ✔ !!');
});

app.listen(
  process.env.PORT,
  console.log(
    `Server is up and running at port ${process.env.PORT} & on http://localhost:${process.env.PORT}`
  )
);
