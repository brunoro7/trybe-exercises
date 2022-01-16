const myFizzBuzz = require('./myFizzBuzz');

describe('Requisito 1', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toMatch('fizz');
    // neste caso, a linha 5 tb aceitaria .toString
  });
});

describe('Requisito 2', () => {
  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(6)).toString('fizz');
    // neste caso, a linha 5 tb aceitaria .toMatch
  });
});