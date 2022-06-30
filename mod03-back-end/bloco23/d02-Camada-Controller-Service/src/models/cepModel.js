const db = require('./db');

const cepModel = {
  async getAll() {
    const sql = 'SELECT * FROM cep_lookup.ceps;';
    const [cepList] = await db.query(sql);
    return cepList;
  },
  async getByCep(cepValue) {
    // console.log(cepValue);
    const sql = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
    const [cepItem] = await db.query(sql, [cepValue]);
    return cepItem;
  },
};

module.exports = cepModel;