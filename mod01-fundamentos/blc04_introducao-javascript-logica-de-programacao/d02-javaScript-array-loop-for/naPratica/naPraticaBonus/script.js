/** ======= Use o código abaixo cumprir os 3 desafios ======= */

// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/** ======= 1 - Ordenar em ordem crescente ======= */
  console.log("Exercício Bônus 1");

  let arrayCrescente = [];
  for(let i=1; i < numbers.length; i +=1){
    for( let compara=0; compara < i; compara += 1){

      if(numbers[i] < numbers[compara]){
        let numeroComparado = numbers[i];
        numbers[i]=numbers[compara];
        
        console.log(numeroComparado);
      }
    }
  }
/** ======= 2 - Ordenar em ordem decrescente ======= */
  //console.log("Exercício Bônus 2");

/** ======= 3 - Usando for (o código da linha 3 a 11) multipilicar cada valor na posição pelo valor da  próxima posição do array ======= */
  //console.log("Exercício Bônus 3");


// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }