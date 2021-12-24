/** ======= Altera background do header ======= */
let caixaTitulo = document.getElementById("header-container");
  caixaTitulo.style.backgroundColor = "green";


/** ======= Altera background do .emergency-tasks ======= */ 
  let caixaUrgente = document.querySelectorAll(".emergency-tasks div");
  for(let urgente of caixaUrgente){
      urgente.style.backgroundColor = "salmon";
  }

/** ======= Altera background do .no-emergency-tasks ======= */
  let caixaNaoUrgente = document.querySelectorAll(".no-emergency-tasks div");
  for(let naoUrgente of caixaNaoUrgente){
      naoUrgente.style.backgroundColor = "yellow";
  }

  
// #footer-container
