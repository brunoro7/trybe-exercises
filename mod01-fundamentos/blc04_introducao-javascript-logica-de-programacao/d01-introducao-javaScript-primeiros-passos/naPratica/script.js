// /** ======= 5 Programas, um pra cada operação aritimética ======= */

//   const valorA = 5;
//   const valorB = 3;

//   // Soma 
//   let soma = valorA + valorB;
//   // Subtração
//   let subtracao = valorA - valorB;
//   // Multiplicação
//   let mutliplicacao = valorA * valorB;
//   // Divisão
//   let divisao = valorA / valorB;
//   // Módulo
//   let moduloResto = valorA % valorB;

//   // console.log(soma);
//   // console.log(subtracao);
//   // console.log(mutliplicacao);
//   // console.log(divisao);
//   // console.log(moduloResto);

// /** ======= O maior de 2 números ======= */

//   const Num1 = 5;
//   const Num2 = 3;
//   let maiorDeDois;

//   if(Num1>Num2){
//     maiorDeDois = "Num1";
//   }
//   else if(Num2>Num1){
//     maiorDeDois = "Num2";
//   }
//   else{
//     maiorDeDois = "Números iguais.";
//   }
//   // console.log(maiorDeDois);

// /** ======= O maior de 3 números ======= */

//   const valor1 = 5;
//   const valor2 = 3;
//   const valor3 = 10;
//   let maiorDeTres;

//   if(valor1>valor2 & valor1>valor3){
//     maiorDeTres = "valor1";
//   }
//   else if(valor2>valor1 & valor2>valor3){
//     maiorDeTres = "valor2";
//   }
//   else if(valor3>valor1 & valor3>valor2){
//       maiorDeTres = "valor3";
//   }
//   else{
//     maiorDeTres = "Números iguais.";
//   }
//   // console.log(maiorDeTres);

//   /** ======= Definir se o número é positivo ou negativo ======= */

//   const number = -7;
//   let resposta;

//   if(number!=0 & number>0){
//     resposta = "positive";
//   }
//   else if(number!=0 & number<0){
//     resposta = "negative";
//   }
//   else{
//       resposta = "zero";
//   }
//   // console.log(resposta);

//   /** ======= Triangulo é true ou false ======= */
//   //tringulo para ser válido a soma dos 3 angulos é 180;

//   const angA = 90;
//   const angB = 60;
//   const angC = 60;

//   let tringuloResult;

//   if(angA<=0 || angB<=0 || angC<=0){
//     tringuloResult = "error message, invalid number";
//   }
//   else if(angA+angB+angC===180){
//     tringuloResult = true;
//   }
//   else if(angA+angB+angC!==180){
//     tringuloResult = false;
//   }

// // console.log(tringuloResult);

// /** ======= Movimentos peça de xadrez ======= */

//   const nomePc = "Rainha";
//   let comparaNomePc = nomePc.toLowerCase();
//   let movsPcs = "";

//   switch (comparaNomePc){
    
//     case "peao":
//       movsPcs = "Pode ser duas casa na saída, depois uma casa por vez a frente.";
//     break;
//     case "torre":
//       movsPcs = "Quantas casas quiser em linha reta ou lateral.";
//     break;
//     case "cavalo":
//       movsPcs = "Anda em formato de 'L' para qualquer lado.";
//     break;
//     case "bispo":
//       movsPcs = "Qualquer uma das suas diagonais.";
//     break;
//     case "rei":
//       movsPcs = "Uma casa por vez, para qualquer lado.";
//     break;
//     case "rainha":
//       movsPcs = "Pode se mover para qualquer lado, quantas casas quiser.";
//     break;

//     default:
//       movsPcs = "Peça não existe."
//     break
//     }

//   // console.log(movsPcs);

//   /** ======= Programa de Notas de A à F ======= */
  
//   let notaEmPorcent = "80%";
//   let notaConvert = parseInt(notaEmPorcent);
//   let notaEmAlfabet;

//   if (notaConvert > 100 || notaConvert < 0){
//     notaEmAlfabet = "Essa não é uma nota válida.";
//   }
//   else if (notaConvert >= 90){
//     notaEmAlfabet = "A";
//   }
//   else if (notaConvert >= 80){
//     notaEmAlfabet = "B";
//   }
//   else if (notaConvert >= 70){
//     notaEmAlfabet = "C";
//   }

//   else if (notaConvert >= 60){
//     notaEmAlfabet = "D";
//   }

//   else if (notaConvert >= 50){
//     notaEmAlfabet = "E";
//   }

//   else if (notaConvert < 50){
//     notaEmAlfabet = "F";
//   }

//   // console.log(notaEmAlfabet);

// /** ======= De 3 numeros, se um deles for Par é True (bonus = tentar so c/ 1 "if") ======= */

//   const numA = 7;
//   const numB = 10;
//   const numC = 3;

//   let resultTrueOrFalse;
//   if(numA%2===1 && numB%2===1 && numC%2===1){
//     resultTrueOrFalse = false;
//   }
//   else{
//     resultTrueOrFalse = true;
//   }
//   console.log(resultTrueOrFalse);

/** ======= De 3 numeros, se um deles for Ímpar é True (bonus = tentar so c/ 1 "if") ======= */
  // const numeralA = 12;
  // const numeralB = 7;
  // const numeralC = 64;

  // let resultTrueOrFalse;
  // if(numeralA%2===0 && numeralB%2===0 && numeralC%2===0){
  //   resultTrueOrFalse2 = false;
  // }
  // else{
  //   resultTrueOrFalse2 = true;
  // }
  // console.log(resultTrueOrFalse2);

/** ======= Calcular valor liquido, usando custo/venda, incidido em 20% ======= */

  const valorCusto = 10;
  const valorVenda = 20;
  const valorIncide20Percent = ((20*valorCusto)/100);
  const valorCustoTotal = valorCusto+valorIncide20Percent;
  const liquidCalc = valorVenda-valorCustoTotal;
  let produtosVendidos = 1000;
  let liquidoEmpresa = liquidCalc * produtosVendidos;
  let resultEmpresa = liquidoEmpresa.toFixed(2);
  let mensagemErro = "Valor abaixo de 0.";
  
  //Falta conseguir definir esse if como regra.
  if(valorCusto<0 || valorVenda<0){
    resultFinal = mensagemErro;
  }
  else {
    resultFinal = resultEmpresa;
  }
  console.log(resultEmpresa);

/** ======= proximo ======= */

/** ======= proximo ======= */

/** ======= proximo ======= */

/** ======= proximo ======= */

/** ======= proximo ======= */