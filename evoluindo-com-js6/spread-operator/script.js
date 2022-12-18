/*SPREAD OPERATOR arrays
 let primeiros = [1, 2, 3];
 let numeros = [...primeiros, 4, 5, 6];

 console.log(numeros);
 */

/*SPREAD OPERATOR objetos
let pessoa = {
  nome: 'Mateus',
  idade: 45,
  cargo: 'rh'
};

let novaPessoa = {
  ...pessoa,
  status: 'ativo',
  cidade: 'Campo grande - MS',
  telefone: '67877672634'
};

console.log(novaPessoa);
*/

function novoUsuario(info) {
  let dados = {
    ...info,
    status: 'ativo',
    inicio: '20/03/2023',
    codigo: '123123'
  };
  console.log(dados);
}
novoUsuario({ nome: 'José', sobrenome: 'silva', cargo: 'dev' });
