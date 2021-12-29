// id="paiDoPai"
// id="pai"
// id="primeiroFilho"
// id="elementoOndeVoceEsta"
// id="primeiroFilhoDoFilho"
// id="segundoEUltimoFilhoDoFilho"
// id="terceiroFilho"
// id="quartoEUltimoFilho"

/** ======= criar um irmao para o elementoOndeVoceEsta ======= */

const elementoPai = document.getElementById("pai");
const irmaoOndeEstou = document.createElement("section");
  irmaoOndeEstou.className = "irmaoDeOndeEuEstou";
  elementoPai.appendChild(irmaoOndeEstou);

/** ======= criar um filho para o elementoOndeVoceEsta ======= */

const elementoOndeEstou = document.getElementById("elementoOndeVoceEsta");
const filhoDeOndeEstou = document.createElement("section");
  filhoDeOndeEstou.className = "filhoDeOndeEuEstou";
  elementoOndeEstou.appendChild(filhoDeOndeEstou);

/** ======= criar um filho para o primeiroFilhoDoFilho ======= */

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const filhoDoPrimeiroFilho = document.createElement("section");
  filhoDoPrimeiroFilho.className = "filhoDoPrimeiroFilho";
  primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilho);

/** ======= criar um filho para o primeiroFilhoDoFilho ======= */

const acessaTerceiroFilho = filhoDoPrimeiroFilho.parentElement.parentElement.nextElementSibling;

console.log(acessaTerceiroFilho);