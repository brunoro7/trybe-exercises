const listaPaiDoPai = document.getElementsByTagName("section");
const pai = document.getElementById("pai");
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const primeiroFilhoDoFilho = document.getElementById("paiDoPai");



for (let index = 0; index < listaPaiDoPai.length; index += 1){

  let cadaElemento = listaPaiDoPai[index];

  if(cadaElemento.id.includes(pai) || cadaElemento.id(elementoOndeVoceEsta) || cadaElemento.id.includes(primeiroFilhoDoFilho)){
  }
  else {
    listaPaiDoPai.removeChild("cadaElemento");
  };

};

console.log(paiDoPai)
