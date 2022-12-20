//================================DESAFIO 1 ====================================

// Crie uma lista de produtos
//  1 - A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.

let productsList = ['Computador', 'Telefone', 'Mouse', 'Teclado'];
// console.log(productsList);

// 2 - Mostre no console quantos produtos tem nessa lista.
// console.log(`A lista de produtos tem ${productsList.length} itens.`);

// 3 - Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.

// RESOLUCAO DO PROF
console.log(productsList.filter(item => item !== 'Mouse'));

/* 4 - Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.*/

// RESOLUCAO DO PROF
const findProduto = productsList.find(item => item === 'Computador');

if (findProduto) {
  console.log(`Correto! o produto ${findProduto} existe na sua lista`);
} else {
  console.log(`Parece que esse produto não existe`);
}

// 5 - Remova o segundo item da sua lista.
console.log(productsList.splice(1, 1));
console.log(productsList);

/* ===============================DESAFIO 2 ====================================
// Crie uma lista de apenas numeros 1,3,5,7,0,9​
let numberList = [1, 3, 5, 7, 0, 9];

// 1 -  Ordene essa lista do menor para o maior.
numberList.sort();
console.log(numberList);

// 2 - Retire o primeiro numero desta lista.
numberList.shift();
console.log(numberList);

// 3 - Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]
numberList.reverse();
console.log(numberList);
*/
/* ================================DESAFIO 3 ====================================
// Crie uma string que contenha o dia de hoje, exemplo:

let hoje = '20/12/2022';
// 1 - Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.

const [dia, mes, ano] = hoje.split('/');
console.log('Dia ' + dia);
console.log('Mes ' + mes);
console.log('Ano ' + ano);
*/
