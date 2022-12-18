let peso;
let altura;
let resultado;
let imc;
function calcular(event) {
  event.preventDefault();
  peso = document.getElementById('peso').value;
  altura = document.getElementById('altura').value;
  imc = peso / (altura * altura);

  resultado = document.querySelector('#res');

  if (imc < 17) {
    resultado.innerHTML = `Seu resultado foi ${imc.toFixed(
      2
    )}<br>Você esta muito abaixo do peso`;
  } else if (imc < 18.9) {
    resultado.innerHTML = `Seu resultado foi ${imc.toFixed(
      2
    )}<br>Você esta abaixo do peso`;
  } else if (imc < 24.99) {
    resultado.innerHTML = `Seu resultado foi ${imc.toFixed(
      2
    )}<br>Seu peso é normal`;
  } else if (imc < 29.99) {
    resultado.innerHTML = `Seu resultado foi ${imc.toFixed(
      2
    )}<br>Você esta acima do peso`;
  } else {
    resultado.innerHTML = `Seu resultado foi ${imc.toFixed(
      2
    )}<br>Você esta na obesidade`;
  }
  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';
}
