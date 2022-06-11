const readline = require('readline-sync');

const comparNumbers = (aleNumber, userNumber) => {
  if (userNumber === aleNumber) {
    return console.log(`Parabéns, número correto!`);
  }
  else {
    return console.log(`Opa, não foi dessa vez. O número era ${aleNumber}.`);
  }
}

const engineDoGame = () => {
  const aleNumber = Math.floor(Math.random() * (10 - 0)) + 0;

  const userNumber = readline.questionInt('- Qual número você acha que pode sair entre 0 e 10? ');

  comparNumbers(aleNumber, userNumber);

  const playAgain = readline.questionInt(
    `- Gostaria de jogar novamente?
      
      Digite 1 para continuar jogando.
      Digite 2 para sair.
      
      ==> `
    );
    if (playAgain !== 1) {
      return console.log('Obrigado, até mais.')
    }
  engineDoGame();
};

// Poderia ser:
// if (userNumber !== aleNumber) {
//   return console.log(`Opa, não foi dessa vez. O número era ${aleNumber}.`);
// }

module.exports = { engineDoGame };
