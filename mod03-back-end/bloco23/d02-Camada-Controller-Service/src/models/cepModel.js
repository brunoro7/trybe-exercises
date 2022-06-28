const db = require('./db');

const cepModel = {
  async getAll() {
    const sql = 'SELECT * FROM cep_lookup.ceps;';
    const [cepList] = await db.query(sql);
    return cepList;
  },
};

module.exports = cepModel;