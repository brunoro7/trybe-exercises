const msg1 = () => 'Acordando!!';
// msg1()

const msg2 = () => 'Bora toma um café!!';
// msg2()

const msg3 = () => 'Partiu dormir!!';
// msg3()

const doindThings = (callBackMSG) => {
  const aviso = callBackMSG();
  console.log(aviso);
};
doindThings(msg1);
doindThings(msg2);
doindThings(msg3);