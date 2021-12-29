const listaSection = document.getElementsByTagName("section");

const pai = document.getElementById("pai");
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");

function removeConteudo(){
for(let i=0; i < listaSection.length; i += 1){
  let cadaElemento = listaSection[i];
    
  if(cadaElemento != pai){
    cadaElemento = "";
  }
}
}
