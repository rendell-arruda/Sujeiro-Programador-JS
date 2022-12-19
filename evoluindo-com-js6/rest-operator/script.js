//*REST OPERATOR
// function convidados(...nomes) {
//   console.log('Sejam bem vindos');
//   console.log(nomes);

// }

// convidados('Matheus', 'Lucas', 'Mari');

//sorteador de numero
function sorteador(...numeros) {
  console.log(numeros);
  const numeroGerado = Math.floor(Math.random() * numeros.length);
  console.log('O numero gerado foi ' + numeros[numeroGerado]);
}
sorteador(1, 4, 33, 44, 55);
