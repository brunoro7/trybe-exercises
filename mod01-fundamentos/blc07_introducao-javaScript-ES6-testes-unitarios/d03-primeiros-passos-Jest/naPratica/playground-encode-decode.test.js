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

