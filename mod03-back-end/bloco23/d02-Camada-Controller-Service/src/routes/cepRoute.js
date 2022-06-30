const { Router } = require('express');
const cepController = require('../controllers/cepController');
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

cepRoute.get('/', cepController.getAll);

cepRoute.get('/:cep', async (req, res) => {
  const respService = await cepService.validateCep(req.params.cep);
  
  console.log(respService, 'route');
  res.status(400).json(respService);
});

module.exports = cepRoute;
