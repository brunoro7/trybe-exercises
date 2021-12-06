let resultadoCandidato = "aprovada";

switch(resultadoCandidato){
    
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break
    case "reprovada":
        console.log("Você está na lista de espera");
        break
    case "lista":
         console.log("Você foi reprovada(o)");
        break
    default: 
        console.log('não se aplica');
        break
}

