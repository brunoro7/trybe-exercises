// id="paiDoPai"
// id="pai"
// id="primeiroFilho"
// id="elementoOndeVoceEsta"
// id="primeiroFilhoDoFilho"
// id="segundoEUltimoFilhoDoFilho"
// id="terceiroFilho"
// id="quartoEUltimoFilho"

/** ======= criar um irmao para o elementoOndeVoceEsta */

const elementoPai = document.getElementById("pai");
const irmaoOndeEstou = document.createElement("section");
  irmaoOndeEstou.className = "irmaoDeOndeEuEstou";
  elementoPai.appendChild(irmaoOndeEstou);
