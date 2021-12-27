// #paiDoPai

// #pai
        
// #primeiroFilho

// #elementoOndeVoceEsta
   
// #primeiroFilhoDoFilho

// #segundoEUltimoFilhoDoFilho

// #terceiroFilho

// #quartoEUltimoFilho

let elementoOndeVcEsta = document.getElementById("elementoOndeVoceEsta");
console.log(elementoOndeVcEsta);

let paiElementoOndeVcEsta = document.getElementById("elementoOndeVoceEsta").parentNode;
paiElementoOndeVcEsta.style.color = "black";
console.log(paiElementoOndeVcEsta);

let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
  primeiroFilhoDoFilho.innerText = "Foi criado um texto na aula anterior tb."
console.log(primeiroFilhoDoFilho);

let primeiroFilhoDoPai = document.getElementById("pai").firstElementChild;
console.log(primeiroFilhoDoPai);