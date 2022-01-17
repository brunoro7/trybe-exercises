// function sum() {
//   const value1 = document.getElementById('value1').value;
//   const value2 = document.getElementById('value2').value;
//   const result = parseInt(value1) + parseInt(value2);

//   document.getElementById('result').innerHTML = `Resultado: ${result}`;
//   document.getElementById('value1').value = '';
//   document.getElementById('value2').value = '';
// }
// window.onload = () => {
//   const button = document.getElementById('button');
//   button.addEventListener('click', sum);
// }

const sum = (value1, value2) => {

  value1 = document.getElementById('value1').value;
  value2 = document.getElementById('value2').value;
  const result = parseInt(value1) + parseInt(value2);
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  
  try{
    if(value1 === '' || value2 === ''){     
      throw new Error('Valor 1 e Valor 2, devem receber números.');
    };
  } catch (errorVazio){
    document.getElementById('result').innerHTML = `Resultado: ${errorVazio.message}`;
  }
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}