function CalcularOperadores() {
	/* Realiza las operaciones aritmeticas con elemnetos del documento html*/

var miParrafo;
var valor;

miParrafo = document.getElementById('Resultado');
valor = 12 + 20;
miParrafo.innerHTML += "Suma los numeros 12 y 20 = " + valor + "<br>";

miParrafo = document.getElementById('Resultado');
valor = 12 - 20;
miParrafo.innerHTML += "Resta los numeros 12 y 20 = " + valor + "<br>";

miParrafo = document.getElementById('Resultado');
valor = 12 * 20;
miParrafo.innerHTML += "Multiplica los numeros 12 y 20 = " + valor + "<br>";

miParrafo = document.getElementById('Resultado');
valor = 34 / 6;
miParrafo.innerHTML += "divide los numeros 34 y 6 = " + valor + "<br>";

miParrafo = document.getElementById('Resultado');
valor = 7 % 4;
miParrafo.innerHTML += "el resto los numeros 7 y 4 = " + valor + "<br>";
}