// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

/** ======= Reescrevendo a função ======= */

const verificaNum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
};

const soma = (a, b) => {
  try {
    verificaNum(a, b);
    return a + b;
  } catch (error) {
    throw error.message;
  }
};
module.exports = soma;

console.log(soma(7, 0));