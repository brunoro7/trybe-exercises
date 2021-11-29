/** Declarações de const e let geral. */

const myName = "Brunoro7";
const birthCity = "São Paulo";

let birthYear = "Dezembro/20/1987";

console.log(myName, birthCity, birthYear);

/** ======= Alterando a let birthYear ======= */

birthYear = 2030;

console.log(myName, birthCity, birthYear);

/** ======= Alterando a const birthCity ======= */
/** ======= código comentado para ter saída.

/**birthCity = "Florianópolis";

console.log(myName, birthCity, birthYear);

Não vai acontecer a alteração do birthCity, pois, ele é uma constante,
 * e possui seu valor inalterável! */