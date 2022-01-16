const encode = require('./playground-encode-decode');
const decode = require('./playground-encode-decode');

describe('Requisito 1 - Testa se encode e decode são funções.', () => {
  it('Testa se encode é uma função.', () => {
    expect(encode('hello')).toString('h2ll4');
    // neste caso, não aceita .toMatch
  });
  it('Testa se decode é uma função.', () => {
    expect(decode('h2ll4')).toString('hello');
  });
});

describe('Requisito 2 - Para a função encode teste se as vogais "a, e, i, o, u", são convertidas em "1, 2, 3, 4 e 5", respectivamente.', () => {
  it('Testa se o retorno de "a, e, i, o, u" é "1, 2, 3, 4 e 5".', () => {
    expect(encode('a, e, i, o, u')).toString('1, 2, 3, 4 e 5');
  });
});

describe('Requisito 3 - Para a função decode teste se os números "1, 2, 3, 4 e 5" são convertidas em "a, e, i, o, u", respectivamente.', () => {
  it('Testa se o retorno de "1, 2, 3, 4 e 5" é "a, e, i, o, u".', () => {
    expect(decode('1, 2, 3, 4 e 5')).toString('a, e, i, o, u');
  });
});

// Teste se as demais letras/números não são convertidos para cada caso;
// describe('Requisito 4 - Teste se as demais letras/números não são convertidos para cada caso.', () => {
//   it('Testa se as outras letras NÃO serão convertidos também.', () => {
//     expect(encode('')).toString('');
//   });
// });

// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro
