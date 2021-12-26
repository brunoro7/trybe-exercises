/** ======= Altera a cor do background do header-container ======= */

let caixaTitulo = document.getElementById("header-container");
  caixaTitulo.style.backgroundColor = "green";


/** ======= Altera a cor do background do .emergency-tasks ======= */ 

let caixaUrgente = document.querySelectorAll(".emergency-tasks div");
  for(let urgente of caixaUrgente){
      urgente.style.backgroundColor = "salmon";
  }

/** ======= Altera a cor do background do .emergency-tasks h3 ======= */ 

let fundoSubTituloUrg = document.querySelectorAll(".emergency-tasks h3");
  for(let subTituloUrg of fundoSubTituloUrg){
    subTituloUrg.style.backgroundColor = "darkviolet";
  }

/** ======= Altera a cor do background do .no-emergency-tasks ======= */

let caixaNaoUrgente = document.querySelectorAll(".no-emergency-tasks div");
  for(let naoUrgente of caixaNaoUrgente){
      naoUrgente.style.backgroundColor = "gold";
  }

/** ======= Altera a cor do background do .no-emergency-tasks h3 ======= */ 

let fundoSubTituloNoUrg = document.querySelectorAll(".no-emergency-tasks h3");
  for(let subTituloNoUrg of fundoSubTituloNoUrg){
    subTituloNoUrg.style.backgroundColor = "black";
  }

/** ======= Altera a cor do background do #footer-conteiner ======= */

let caixaRodape = document.getElementById("footer-container");
  caixaRodape.style.backgroundColor = "darkgreen";

/** ======= Acrescenta uma frase após #footer-conteiner ======= */
//criando e apendando um elemento com texto e cor.

let fraseFinal = "Administrador de tempo finalizado";
let criaElementoFinal = document.createElement("p");
criaElementoFinal.innerText = fraseFinal;
criaElementoFinal.style.color = "darkgreen";
document.body.appendChild(criaElementoFinal);
