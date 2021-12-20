/** ======= Use o código abaixo cumprir os 3 desafios ======= */
// Ele é simplesmente a base pra resolver!!!

// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

/** ======= 1 - Ordenar em ordem crescente ======= */
  console.log("Exercício Bônus 1");

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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
  console.log("Exercício Bônus 2");

  let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  for (let index = 1; index < numbers1.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers1[index] > numbers1[secondIndex]) {
        let position = numbers1[index];
          numbers1[index] = numbers1[secondIndex];
          numbers1[secondIndex] = position;
      }
    }
  }
console.log(numbers1);

/** ======= 3 - Usando for (o código da linha 3 a 11) multipilicar cada valor na posição pelo valor da  próxima posição do array ======= */
  console.log("Exercício Bônus 3");

  let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  let arrayMultiplicado = [];
  for (let i=0; i < numbers2.length; i +=1){
    if(i + 1 < numbers2.length){
      arrayMultiplicado.push(numbers2[i] * numbers2[i + 1]);
    }
    else{
      arrayMultiplicado.push(numbers2[i] * 2);
    }
}
  console.log(arrayMultiplicado);

// Ao usar o i(indice) como [i + 1] no if, você indica uma posição a mais no array, serve para que ele indique que além das 10 posições a partir de 0 a 9, ele deve calcular  + 1 valor. nesse caso, o ultimo do array.

/** ======= Tb testar se quiser "multiplicar pelo anterior" ======= */

/** ======= Tb testar se quiser "decrementando" ======= */