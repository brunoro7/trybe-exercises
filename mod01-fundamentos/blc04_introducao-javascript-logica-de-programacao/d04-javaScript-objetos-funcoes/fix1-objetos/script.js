/** ======= Declarando objeto player com as variáveis ======= */

    let player = {
        name: 'Marta',
        lastName: 'Silva',
        age: 34,
        medals: { golden: 2, silver: 3 },    
    };
console.log(player);

/** ======= Acessando as chaves e concatenando na frase ======= */    
    
let fraseJogadora = "A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade";

console.log(fraseJogadora);

/** ======= Criando objeto ======= */

let bestInTheWorld = {
    datasBestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}
    let arrayBestDatas = bestInTheWorld.datasBestInTheWorld;

console.log(arrayBestDatas);

