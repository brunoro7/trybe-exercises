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

  for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
          numbers[index] = numbers[secondIndex];
          numbers[secondIndex] = position;
      }
    }
  }
console.log(numbers);

/** ======= 2 - Ordenar em ordem decrescente ======= */
  //console.log("Exercício Bônus 2");

/** ======= 3 - Usando for (o código da linha 3 a 11) multipilicar cada valor na posição pelo valor da  próxima posição do array ======= */
  //console.log("Exercício Bônus 3");

