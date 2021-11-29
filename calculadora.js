const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById('valor-actual');
const botonNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const calculadora = new Calculadora();

console.log(calculadora.sumar(2,3))