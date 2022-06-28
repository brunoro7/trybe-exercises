const cepModel = require('../models/cepModel');

const cepService = {
  async getAllCeps() {
    // listando os ceps
    const cepList = await cepModel.getAll();
    return cepList;
  },
  async removeTraceFromCep() {
    // remove o traço do cep string e transforma em numero de 8 digitos.
    const cep = await cepModel.getCepById();
    Number(cep.replace('-', ''));
  },
};

module.exports = cepService;