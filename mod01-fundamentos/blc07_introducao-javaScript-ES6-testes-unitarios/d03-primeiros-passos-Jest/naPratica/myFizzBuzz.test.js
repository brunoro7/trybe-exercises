const myFizzBuzz = require('./myFizzBuzz');

describe('Requisito 1', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
    // neste caso, a linha 5 tb aceitaria .toString
  });
});

describe('Requisito 2', () => {
  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(6)).toString('fizz');
    // neste caso, a linha 5 tb aceitaria .toMatch
  });
});

describe('Requisito 3', () => {
  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    (myFizzBuzz(10)).toString('buzz');
  });
});

describe('Requisito 4', () => {
  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    (myFizzBuzz(7)).toString(false);
  });
});