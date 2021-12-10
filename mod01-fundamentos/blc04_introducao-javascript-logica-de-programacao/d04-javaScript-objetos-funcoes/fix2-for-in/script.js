/** ======= declarando objeto ======= */

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

