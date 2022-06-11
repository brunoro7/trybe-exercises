const readline = require('readline-sync');

const listaDeScripts = [
  {name: 'Cálculo de IMC', path: './IMC/imc.js'},
  {name: 'Cálculo de Velocidade Média', path: './VELOCIDADE/velocidade.js'},
  {name: 'Jogo de Adinhação', path: './SORTEIO/sorteio.js'}
];

const cadaScript = listaDeScripts.map((script, index) => {
  return `${index} - ${script.name}`
});

const scriptMenu = readline.question(
  `Qual dos scripts abaixo você quer executar? 
    ${cadaScript}
    `
);

const escolheScript = () => {}