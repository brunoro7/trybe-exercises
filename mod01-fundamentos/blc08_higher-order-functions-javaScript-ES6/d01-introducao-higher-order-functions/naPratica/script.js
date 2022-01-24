/** ======= Exercicio 1 ======= */

// const newEmployees = (criarEmail) => {
//   const employees = {
//     id1: criarEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: criarEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: criarEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// const criarEmail = (nomeCompleto) => {
//   const nomeProEmail = nomeCompleto.toLowerCase().split(' ').join('_');
//   const emailMontado = `${nomeProEmail}@trybe.com`;
//   return {nomeCompleto, email: emailMontado};
// }
// console.log(newEmployees(criarEmail));

// /** ======= Exercicio 2 ======= */

// const sorteio = (number) => {

//   const numAle = Math.random() * 5;
//   const numSorteado = parseInt(numAle);
//   const numUsuario = parseInt(number);
//   // console.log(numSorteado);

//   return comparaNums(numSorteado, numUsuario);
// };

// const comparaNums = (numSorteado, numUsuario) => {
//   if (numSorteado === numUsuario) {
//     return 'Parabéns você ganhou.';
//   } else {
//     return 'Tente novamente.';
//   };
// };
// console.log(sorteio(5));

// /** ======= Exercicio 3 ======= */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaAnswer = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {

}