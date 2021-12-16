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

  