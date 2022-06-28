const express = require('express');
const userRoutes = require('./routes/userRoutes');
require('express-async-errors');

const app = express();
app.use(express.json());

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

app.use('/user', userRoutes);

app.use((err, _req, res, _next) => {
  const { name } = err;
  switch (name) {
    default: console.warn(err);
      res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('rodando na porta 3000'));