/** ======= Criando os estados do campo select ======= */

const campoSelect = document.getElementsByTagName("select")[0];

const estadosBrasil = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

const siglasEstados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", ""];

  for(let i = 0; i < estadosBrasil.length; i+=1){
    
    let newEstado = document.createElement("option");
    let cadaEstado = estadosBrasil[i];
      newEstado.innerText = cadaEstado;
      campoSelect.appendChild(newEstado);
  }

/** ======= Definição da data de forma "correta" ======= */

let numDia = 20;
let diaOK = 0;
if(numDia > 0 && numDia <= 31){
  dia = numDia;
}
else{
  alert("O número do dia deve ser de 1 à 31.");
}

let numMes = 12;
let mesOK = 0;
if(numMes > 0 && numMes <= 12){
  mes = numMes;
}
else {
  alert("O número do mes deve ser de 1 à 12.");
}

let numAno = 1987;
let anoOK = 0;
if(numAno > 0){
  ano = numAno;
}
else {
  alert("O número do ano deve ser maior que 0.");
}
let dataComp = numDia + "/" + numMes + "/" + numAno;

console.log(dataComp);

let recebeData = document.getElementById("dataIni");
let numData = recebeData.innerText;


console.log(numData);
