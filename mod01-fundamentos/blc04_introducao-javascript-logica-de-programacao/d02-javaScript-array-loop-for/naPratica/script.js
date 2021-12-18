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

/** ======= 6 - Pegando todos os números ímpares ======= */
  console.log("Exercício - 6");

  let valoresImpares = [];
  for (i=0; i < numbers.length; i+=1){
      
    if(numbers[i]%2===1){
      valoresImpares.push(numbers[i]);
    }
  }
  console.log(valoresImpares);

/** ======= 7 - Pegar o menor valor do array ======= */
  console.log("Exercício - 7");

  let valorMenor = valorMaior;
  for (i=0; i < numbers.length; i+=1){
    
    if(numbers[i] < valorMenor){
      valorMenor = numbers[i];
    }
  }
  console.log(valorMenor);

/** ======= Estes próximos 2 são separados dos acima ======= */

/** ======= 8 - Criando um array do 1 ao 25 usando for ======= */
  console.log("Exercício - 8");

  let newArray = [];
  for(i=1; i<=25; i+=1){
    newArray.push(i);
  }
  console.log(newArray);

/** ======= 9 ======= */
