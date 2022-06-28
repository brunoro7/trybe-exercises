const { Router } = require('express');
const cepService = require('../services/cepService');

const cepRoute = Router();

// cepRoute.delete('/', async (_req, res) => {
// });

// cepRoute.put('/', async (_req, res) => {
// });

// cepRoute.post('/', async (_req, res) => {
// });

// cepRoute.get('/:cep', async (_req, res) => {
// });

cepRoute.get('/', async (_req, res) => {
  const cepList = await cepService.getAllCeps();
  // console.log(cepList);
  res.status(200).json({ cepList });
  // res.status(200);
});

module.exports = cepRoute;
