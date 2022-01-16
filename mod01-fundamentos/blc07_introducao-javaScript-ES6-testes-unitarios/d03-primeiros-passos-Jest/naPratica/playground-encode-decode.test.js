const encode = require('./playground-encode-decode');
const decode = require('./playground-encode-decode');

describe('Requisito 1 - Teste se encode e decode são funções;', () => {
  it('Teste se encode é uma função', () => {
    expect(encode('hello')).toString('h2ll4');
    // neste caso, não aceita .toMatch
  });
  it('Teste se decode é uma função', () => {
    expect(decode('h2ll4')).toString('hello');
  });
});

describe('Requisito 2 - Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
  it('Teste se o retorno de "a, e, i, o, u" é "1, 2, 3, 4 e 5"', () => {
    expect(encode('a, e, i, o, u')).toString('1, 2, 3, 4 e 5');
  });
});

