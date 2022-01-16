const myRemove = require('./myRemove');

describe('Requisito 1', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3), retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
});

describe('Requisito 2', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3), NÃO retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});
