const comprimentaUsuario = (username) => console.log(`Seja bem vindo ${username}!`);

const calculoImc = (peso, altura) => {
  const imc = (peso / (altura * altura));

  console.log(
    `Com o peso de ${peso}Kg e tendo a altura de ${altura}m.
      O seu IMC é igual a: ${imc}`
    );
  // Abaixo de 18,5	Abaixo do peso (magreza)
  if (imc < 18.5) {
    console.log(`A situação do seu IMC está abaixo do peso (magreza).`);
  }
  // Entre 18,5 e 24,9	Peso normal
  else if (imc <= 24.9 && imc >= 18.5) {
    console.log(`A situação do seu IMC está com peso normal.`);
  }
  // Entre 25,0 e 29,9	Acima do peso (sobrepeso)
  else if (imc <= 29.9 && imc >= 25) {
    console.log(`A situação do seu IMC está acima do peso (sobrepeso).`);
  }
  // Entre 30,0 e 34,9	Obesidade grau I
  else if (imc <= 34.9 && imc >= 30) {
    console.log(`A situação do seu IMC Obesidade grau I.`);
  }
  // Entre 35,0 e 39,9	Obesidade grau II
  else if (imc <= 39.9 && imc >= 35) {
    console.log(`A situação do seu IMC Obesidade grau II.`);
  }
  // 40,0 e acima	Obesidade graus III e IV
  else if (imc >= 40) {
    console.log(`A situação do seu IMC Obesidade grau II.`);
  }
};

module.exports = {
  comprimentaUsuario,
  calculoImc
};
