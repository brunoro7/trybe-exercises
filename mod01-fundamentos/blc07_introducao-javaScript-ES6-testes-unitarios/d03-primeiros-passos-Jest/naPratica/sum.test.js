const soma = require('./sum');

  describe('Requisito 1', () => {
    test('A função retorna 9 quando a soma é 4 mais 5.', () => {
      expect(soma(4, 5)).toBe(9);
  });
  });

  describe('Requisito 2', () => {
    test('A função retorna 0 quando a soma é 0 mais 0.', () => {
      expect(soma(0, 0)).toBe(0);
    });
  });

  describe('Requisito 3', () => {
    test('Testa se a função retorna um erro quando os parâmetros são 4 e "5" (string 5)', () => {
      expect(() => { soma() }).toThrow(new Error('parameters must be numbers'));
    });
  });
