const msg1 = () => {
  console.log('Acordando!!');
}
// msg1()

const msg2 = () => {
  console.log('Bora toma um café!!');
}
// msg2()

const msg3 = () => {
  console.log('Partiu dormir!!');
}
// msg3()

const doindThings = (mensagem1, mensagem2) => {
  let aviso = mensagem1() + mensagem2();
  return aviso;
};
doindThings(msg1, msg2);