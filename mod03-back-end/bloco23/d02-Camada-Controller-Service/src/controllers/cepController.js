const cepService = require('../services/cepService');

const cepController = {
  async getAll(req, res) {
    const cepList = await cepService.getAllCeps();
  res.status(200).json(cepList);
  },
};

module.exports = cepController;
