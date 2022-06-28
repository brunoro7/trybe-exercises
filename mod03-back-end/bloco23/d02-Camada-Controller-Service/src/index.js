const express = require('express');
require('express-async-errors');
const cepRoute = require('./routes/cepRoute');
const pingRoute = require('./routes/pingRoute');

const PORT = 3000;

const app = express();
app.use(express.json());

app.use('/ping', pingRoute);
app.use('/cep', cepRoute);

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

app.use((err, _req, res, _next) => {
  const { name } = err;
  switch (name) {
    default: console.warn(err);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Rodando na ${PORT}`);
});
