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

