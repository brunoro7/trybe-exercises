/** ======= exercicio 1 - obter o valor "Serviços" ======= */

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

/** ======= exercicio 2 - obter o índice "Portfólio" ======= */
//Obs: alterei o menu p/ menu1, para não dar "conflito";

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

/** ======= exercicio 3 - adicionar o valor "Contato"======= */
//Obs: alterei o menu p/ menu3, para não dar "conflito";

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push("Contato");
console.log(menu3);
