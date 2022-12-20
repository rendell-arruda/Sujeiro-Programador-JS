/* ================================DESAFIO 1 ====================================

// Crie uma lista de produtos
//  1 - A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.

let productsList = ['Computador', 'Telefone', 'Mouse', 'Teclado'];
// console.log(productsList);

// 2 - Mostre no console quantos produtos tem nessa lista.
console.log(`A lista de produtos tem ${productsList.length} itens.`);

//3 - Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
productsList.find((item, index) => {
  if (item === 'Mouse') {
    console.log(item, index);
    productsList.splice(index, 1);
  }
});
console.log(productsList);

// 4 - Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
let findProduct = productsList.find(item => {
  if (item === 'Computador') {
    console.log(item);
  } else {
    console.log('O produto não está na lista');
  }
});
console.log(productsList);

// 5 - Remova o segundo item da sua lista.
console.log(productsList.splice(2, 1));
console.log(productsList);
*/
// ================================DESAFIO 2 ====================================
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

// ================================DESAFIO 3 ====================================
