/** ======= Usar o mesmo array do 1 ao 7 ======= */

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/** ======= 1 - Imprimir todos valores ======= */
  console.log("Exercício - 1");

  for (let cadaNumber of numbers){
  console.log(cadaNumber);
  }

/** ======= 2 - Somar todos os valores do array ======= */
  console.log("Exercício - 2");
  
  let somaValoresArray = 0;
  for (let somaNumber=0; somaNumber < numbers.length; somaNumber+=1){
    somaValoresArray = somaValoresArray + numbers[somaNumber];  
  }
  
  console.log(somaValoresArray);

/** ======= 3 - Média aritimética do Array ======= */
  console.log("Exercício - 3");

  let arraySomado = somaValoresArray;
  let divisorDoArray = numbers.length;
  let resultMedArit = arraySomado / divisorDoArray;
  
  console.log(resultMedArit);

/** ======= 4 - Acrescentar regra de <= a 20 ou > que 20 ======= */
  console.log("Exercício - 4");

  if(resultMedArit > 20){
    console.log("valor maior que 20");
  }
  else if(resultMedArit <= 20){
    console.log("valor menor ou igual 20");
  }

/** ======= 5 - Descobrir o maior do array ======= */
  console.log("Exercício - 5");

  let valorMaior = 0;
  for (i=0; i < numbers.length; i+=1){
    if(numbers[i]>valorMaior){
      valorMaior = numbers[i];
    }
  }
  console.log(valorMaior);

/** ======= 6 ======= */

/** ======= 7 ======= */

/** ======= 8 ======= */

/** ======= 9 ======= */
