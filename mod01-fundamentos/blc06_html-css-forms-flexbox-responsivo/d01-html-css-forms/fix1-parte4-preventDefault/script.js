// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


/** ======= Função que "bloqueia" o padrão de abrir o link automáticamente ======= */

  function blockHref (event) {
    event.preventDefault();
  }
  HREF_LINK.addEventListener("click", blockHref);
/** ======= Função que "bloqueia" o padrão de de marcação do CheckBox ======= */

function blockCheckBox (event) {
  event.preventDefault();
}
INPUT_CHECKBOX.addEventListener("click", blockCheckBox);

/** ======= Função que "bloqueia" o padrão de abrir o link automáticamente ======= */

function keyPress_a (event) {
  let press_a = event.key;
  if(press_a != "a"){
  event.preventDefault();
  }
}
INPUT_TEXT.addEventListener("keypress", keyPress_a);