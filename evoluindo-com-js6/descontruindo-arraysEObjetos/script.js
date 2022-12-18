//DESCONSTRUIR OBJETOS
let pessoa = {
  nome: 'Matheus',
  sobrenome: 'Fraga',
  empresa: 'Sujeito Programador',
  cargo: 'Programador FullStack'
};

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

const { nome: nomePessoa, cargo, empresa, sobrenome } = pessoa; //descontruiu criando uma nova propriedade
/*console.log(nomePessoa);
console.log(cargo);
console.log(empresa);
console.log(sobrenome);
*/

//===========================================================//
//DESCONSTRUINDO ARRAYS
let nomes = ['Matheus Aparecido', 'Lucas', 'Henrique Campos'];
// console.log(nomes[0]);

//passa a posicao e o nome da variavel
// let { 0: primeiraPessoa, 2: terceiraPessoa } = nomes;
// console.log(primeiraPessoa);
// console.log(terceiraPessoa);

//passa o nome das variaveis que voce quer
// let [primeiroNome, segundoNome] = nomes;
// console.log(primeiroNome);
// console.log(segundoNome);
