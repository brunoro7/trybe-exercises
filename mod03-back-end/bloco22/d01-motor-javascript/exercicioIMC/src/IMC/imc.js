const readline = require('readline-sync');
const { comprimentaUsuario, calculoImc } = require('./calcIMC');

const username = readline.question(`Olá, como gostaria de ser chamado(a)? `)

comprimentaUsuario(username);
console.log(`* Vamos calcular o seu IMC!!! *`);
console.log(`Primeiro me diga.`);

const peso = readline.questionFloat('- Qual o seu peso? ');

console.log(`E agora.`);
const altura = readline.questionFloat('- Qual a sua altura? ');

calculoImc(peso, altura);
