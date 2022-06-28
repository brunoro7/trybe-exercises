const { Router } = require('express');

const pingRoute = Router();

pingRoute.get('/', async (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

module.exports = pingRoute;