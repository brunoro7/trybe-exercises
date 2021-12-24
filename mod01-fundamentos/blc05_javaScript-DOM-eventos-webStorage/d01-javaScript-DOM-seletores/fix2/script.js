/** ======= Altera background do header-container ======= */

let caixaTitulo = document.getElementById("header-container");
  caixaTitulo.style.backgroundColor = "green";


/** ======= Altera background do .emergency-tasks ======= */ 

let caixaUrgente = document.querySelectorAll(".emergency-tasks div");
  for(let urgente of caixaUrgente){
      urgente.style.backgroundColor = "salmon";
  }

/** ======= Altera background do .emergency-tasks h3 ======= */ 

let fundoSubTituloUrg = document.querySelectorAll(".emergency-tasks h3");
  for(let subTituloUrg of fundoSubTituloUrg){
    subTituloUrg.style.backgroundColor = "darkblue";
  }

/** ======= Altera background do .no-emergency-tasks ======= */

let caixaNaoUrgente = document.querySelectorAll(".no-emergency-tasks div");
  for(let naoUrgente of caixaNaoUrgente){
      naoUrgente.style.backgroundColor = "gold";
  }

/** ======= Altera background do .no-emergency-tasks h3 ======= */ 

let fundoSubTituloNoUrg = document.querySelectorAll(".no-emergency-tasks h3");
  for(let subTituloNoUrg of fundoSubTituloNoUrg){
    subTituloNoUrg.style.backgroundColor = "black";
  }

/** ======= Altera background do #footer-conteiner ======= */

let caixaRodape = document.getElementById("footer-container");
  caixaRodape.style.backgroundColor = "darkgreen";
