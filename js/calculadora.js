const valoranterior = document.getElementById("anterior");
const valoractual = document.getElementById("actual");
const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operador');
const borrar = document.getElementById("del");

const display = new Display(valoranterior, valoractual);

numeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

operadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});
