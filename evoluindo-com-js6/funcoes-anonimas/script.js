//Funcoes anonimas

/*

() => {}
1 - Os parenteses é por onde a funcao recebe os argumentos
2 - a seta é o arrow
3 - as chaves : é o bloco de codigo que representa o corpo da funcao
*/

// function somar(a, b) {
//   let total = a + b;
//   return console.log(a + b);
// }

// console.log(somar(10, 20));

let subtrair = (valor1, valor2) => {
  let total = valor1 - valor2;
  console.log(total);
};

console.log(subtrair(50, 30));
