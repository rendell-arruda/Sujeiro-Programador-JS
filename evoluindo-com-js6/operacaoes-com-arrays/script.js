/*MAP percorre um array

//operacoes com arrays
let lista = ['Matheus', 'Jose', 'Maria'];

lista.map((item, index) => {
  console.log(`Passando o ${item} e seu index é ${index}`);
});
*/

/*REDUCE= busca reduzir um array

let numeros = [5, 3, 2, 10];

let total = numeros.reduce((acumulador, numero, index, original) => {
  console.log(`Este é o acumulador - ${acumulador}`);
  console.log(`Este é o numero - ${numero}`);
  // console.log(`Este é o index - ${index}`);
  // console.log(`Este é o original - ${original}`);
  console.log('============');

  return (acumulador += numero);
});

console.log(`Total do reduce - ${total}`);
*/

//FIND busca nunma lista e devolve o primeiro item que encontrar
let listagem = [5, 3, 'Jose', 2, 'Maria'];

let busca = listagem.find(item => {
  //CONDICAO
  if (item === 'Jose') {
    console.log(`Item encontrado com sucesso - ${item}`);
  }
});

//FILTER filtrar algo dentro do array

let palavras = ['Ana', 'Jose', 'Mateus', 'Ricardi silva', 'Gil', 'Jose'];

let resultado = palavras.filter(item => {
  //CONDICAO
  // return item.length <= 4;
  return item === 'Jose';
});

console.log(resultado);
