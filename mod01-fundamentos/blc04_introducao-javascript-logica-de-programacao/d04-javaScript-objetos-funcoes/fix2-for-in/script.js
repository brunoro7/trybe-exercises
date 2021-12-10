/** ======= Requisito 1, declarando objeto ======= */

    let names = {
        person1: 'João',
        person2: 'Maria',
        person3: 'Jorge'
    };

    console.log(names);

/** ======= Usando For/In para exibir e concatenar em mensagem ======= */

    for ( index in names){
        cadaMensagem = 'Olá ' + names[index];
        
        console.log(cadaMensagem);
    };

/** =======  Requisito 2, usando For/In para imprimir as chaves e os valores ======= */

    let car = {
        model: 'A3 Sedan',
        manufacturer: 'Audi',
        year: 2020
    };

    for ( index in car){
        cadaTipo = (car[index]);
        
        console.log(index, cadaTipo);
    };