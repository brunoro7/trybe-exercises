/** ======= exercicio 1 - obter o valor "Serviços" ======= */

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log("Resposta Do Exercício 1 - " + menuServices);

/** ======= exercicio 2 - obter o índice "Portfólio" ======= */
//Obs: alterei o menu p/ menu1, para não dar "conflito";

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log("Resposta Do Exercício 2 - " + indexOfPortfolio);

/** ======= exercicio 3 - adicionar o valor "Contato"======= */
//Obs: alterei o menu p/ menu3, para não dar "conflito";

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push("Contato");
console.log("Resposta Do Exercício 3 - " + menu3);
