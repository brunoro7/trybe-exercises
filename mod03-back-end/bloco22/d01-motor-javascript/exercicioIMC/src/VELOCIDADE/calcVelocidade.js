const calcVelocidade = (distancia, tempo) => {
  const velocidadeMedia = distancia / tempo;

  console.log(`A velocidade média foi de ${velocidadeMedia}m/s`)
};

module.exports = { calcVelocidade };
