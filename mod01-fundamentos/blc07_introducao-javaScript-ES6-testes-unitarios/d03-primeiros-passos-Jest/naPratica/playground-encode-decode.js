// Desafio 9
function encode(frase) {

  let splitedFrase = frase.split("");
  let modifiedFrase = [];

  for(let i=0; i<splitedFrase.length; i++){

    if(splitedFrase[i]==="a") {
      modifiedFrase.push("1");
    }
    else if(splitedFrase[i]==="e") {
      modifiedFrase.push("2");
    }
    else if(splitedFrase[i]==="i") {
      modifiedFrase.push("3");
    }
    else if(splitedFrase[i]==="o") {
      modifiedFrase.push("4");
    }
    else if(splitedFrase[i]==="u") {
      modifiedFrase.push("5");
    }
    else{
      modifiedFrase.push(splitedFrase[i]);
    }
  }
  let joinedFrase = modifiedFrase.join("");

  return joinedFrase
}

function decode(fraseCod) {
  let splitedFraseCod = fraseCod.split("");
  let modifiedFraseCod = [];

  for(let i=0; i<splitedFraseCod.length; i++){

    if(splitedFraseCod[i]==="1") {
      modifiedFraseCod.push("a");
    }
    else if(splitedFraseCod[i]==="2") {
      modifiedFraseCod.push("e");
    }
    else if(splitedFraseCod[i]==="3") {
      modifiedFraseCod.push("i");
    }
    else if(splitedFraseCod[i]==="4") {
      modifiedFraseCod.push("o");
    }
    else if(splitedFraseCod[i]==="5") {
      modifiedFraseCod.push("u");
    }
    else{
      modifiedFraseCod.push(splitedFraseCod[i]);
    }
  }
  let joinedFraseCod = modifiedFraseCod.join("");

  return joinedFraseCod
}