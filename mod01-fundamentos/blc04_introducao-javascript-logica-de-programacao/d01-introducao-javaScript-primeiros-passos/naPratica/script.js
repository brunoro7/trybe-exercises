/** ======= 5 Programas, um pra cada operação aritimética ======= */

  const valorA = 5;
  const valorB = 3;

  // Soma 
  let soma = valorA + valorB;
  // Subtração
  let subtracao = valorA - valorB;
  // Multiplicação
  let mutliplicacao = valorA * valorB;
  // Divisão
  let divisao = valorA / valorB;
  // Módulo
  let moduloResto = valorA % valorB;

  console.log(soma);
  console.log(subtracao);
  console.log(mutliplicacao);
  console.log(divisao);
  console.log(moduloResto);

/** ======= O maior de 2 números ======= */

  const Num1 = 5;
  const Num2 = 3;
  let maiorDeDois;

  if(Num1>Num2){
    maiorDeDois = "Num1";
  }
  else if(Num2>Num1){
    maiorDeDois = "Num2";
  }
  else{
    maiorDeDois = "Números iguais.";
  }
  console.log(maiorDeDois);

/** ======= O maior de 3 números ======= */

  const valor1 = 5;
  const valor2 = 3;
  const valor3 = 10;
  let maiorDeTres;

  if(valor1>valor2 & valor1>valor3){
    maiorDeTres = "valor1";
  }
  else if(valor2>valor1 & valor2>valor3){
    maiorDeTres = "valor2";
  }
  else if(valor3>valor1 & valor3>valor2){
      maiorDeTres = "valor3";
  }
  else{
    maiorDeTres = "Números iguais.";
  }
  console.log(maiorDeTres);

  /** ======= Definir se o número é positivo ou negativo ======= */

  const number = -7;
  let resposta;

  if(number!=0 & number>0){
    resposta = "positive";
  }
  else if(number!=0 & number<0){
    resposta = "negative";
  }
  else{
      resposta = "zero";
  }
  console.log(resposta);

  /** ======= Triangulo é true ou false ======= */
  //tringulo para ser válido a soma dos 3 angulos é 180;

  const angA = 90;
  const angB = 60;
  const angC = 60;

  let tringuloResult;

  if(angA<=0 || angB<=0 || angC<=0){
    tringuloResult = "error message, invalid number";
  }
  else if(angA+angB+angC===180){
    tringuloResult = true;
  }
  else if(angA+angB+angC!==180){
    tringuloResult = false;
  }

console.log(tringuloResult);

/** ======= Movimentos peça de xadrez ======= */
//talvez usar um objeto como lista!?

let listaDePecas= {
  nome:"peao",
  movimento: "pode ser duas casa na saida, depois uma casa a frente",

  nome:"torre",
  movimento:,

  nome: "cavalo",
  movimento:,

  nome:"bispo",
  movimento:,

  nome: "rainha",
  movimento:,

  nome:"rei",
  movimento:,
}

//Tentar fazer com switch and Case:

  const nomePeça = peao;
  let movsPeças;
