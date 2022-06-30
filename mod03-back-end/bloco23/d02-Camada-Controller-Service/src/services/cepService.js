// const Joi = require('joi');
const cepModel = require('../models/cepModel');

const cepService = {
  async getAllCeps() {
    // listando os ceps
    const cepListItems = await cepModel.getAll();
    return cepListItems;
  },

  async validateCep(value) {
    console.log(String(value).length);
    console.log(value);
    
    // Caso o CEP seja inválido, retorne o status 400 Bad Request e o seguinte JSON:
    if (!String(value).includes('-') && (value).length !== 8) {
      return { error: { code: 'invalidData', message: 'CEP inválido' } };
    }

    if (String(value).includes('-') && (value).length === 9) {
      const ajustedValue = (value.replace('-', ''));
      // console.log(ajustedValue);

      const cepList = await cepModel.getByCep(ajustedValue);
      const cepItem = cepList[0];
      console.log(cepItem, 'service com traço');

      // Caso o CEP não exista no banco de dados, retorne o status 404 Not Found e o seguinte JSON:
      if (!cepItem) return { error: { code: 'notFound', message: 'CEP não encontrado' } };

      // Caso o CEP exista, retorne o status `200 OK` e os dados do CEP no seguinte formato:
      return cepItem;
    }

    const cepList = await cepModel.getByCep(value);
    const cepItem = cepList[0];
    console.log(cepItem, 'service sem traço');
    if (!cepItem) return { error: { code: 'notFound', message: 'CEP não encontrado' } };
    return cepItem;
  },

};

module.exports = cepService;

// if (String(cepItem).includes('-')) {
    //   const ajustedValue = Number(cepItem.replace('-', ''));
    //   const result = await schema.validateAsync(Number(ajustedValue));
    //   return result;
    // }
    // const schema = Joi.object({
    //   cep: Joi.number().required().positive().integer(),
    // });
    // const result = await schema.validateAsync(Number(cepItem));