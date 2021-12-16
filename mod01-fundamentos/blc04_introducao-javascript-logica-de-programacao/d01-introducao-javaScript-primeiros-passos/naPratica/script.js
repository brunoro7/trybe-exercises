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

  let Num1 = 5;
  let Num2 = 3;
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

  let valor1 = 5;
  let valor2 = 3;
  let valor3 = 10;
  let maiorDeTres;

  if(valor1>valor2){
    maiorDeTres = "valor1";
  }
  else if(valor2>valor1){
    maiorDeTres = "valor2";
  else if(valor2>valor1){
      maiorDeTres = "valor2";
  }
  else{
    maiorDeTres = "Números iguais.";
  }
  console.log(maiorDeTres);