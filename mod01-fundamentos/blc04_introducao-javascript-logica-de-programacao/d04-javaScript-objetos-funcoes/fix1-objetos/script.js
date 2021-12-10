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

/** ======= acessando bestInTheWorld e concatenando em uma frase ======= */

    let fraseBestWorld = "A jogadora " + player.name + player.lastName + " foi eleita a melhor do mundo 6 vezes";

console.log(fraseBestWorld)

/** ======= acessando medals e concatenando entre uma frase ======= */

    let fraseMedals = "A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata"

console.log(fraseMedals)
