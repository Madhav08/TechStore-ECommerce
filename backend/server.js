import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World ✔ !!');
});

app.listen(
  5000,
  console.log(`Server is up and running at port 5000 http://localhost:5000`)
);
