const readline = require('readline-sync');
const { calcVelocidade } = require('./calcVelocidade');

console.log(`* Calculando Velocidade Média!!! *`);

const distancia = readline.questionInt('- Qual a distância percorrida em metros? ');

const tempo = readline.questionInt('- Qual foi o tempo gasto em segundos? ');

calcVelocidade(distancia, tempo);
