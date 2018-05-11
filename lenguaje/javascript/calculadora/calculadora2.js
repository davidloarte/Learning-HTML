function ObtenerOperando(idOperando) 
{
	var miOperando;

	miOperando = document.getElementById(idOperando);
	return parseInt(miOperando.value);
}

function RealizarOperacion() 
{
	/*1. obtener el valor del primer operando
	  2. obtener el valor del segundo operando
	  3. realizar la operacion con los operandos y segun el tipo de operacion
	  4. guardar el resultado */
	

	var valor1, valor2, valor;

	valor1 = ObtenerOperando('Operando1');
	valor2 = ObtenerOperando('Operando2');

	if (tipoOperacion == '+')
		valor = valor1 + valor2;
	else if
		(tipoOperacion == '-')
		valor = valor1 - valor2;
	else if
		(tipoOperacion == '*')
		valor = valor1 - valor2;
	else if
		(tipoOperacion == '/')
		valor = valor1 - valor2;
	else valor = 0;

	document.getElementById('Resultado').innerHTML = valor;

}
















function Suma() 
{
	var miResultado,
	    valorOperando1,
	    valorOperando2,
	    valor;

	miResultado = document.getElementById('Resultado');
    valorOperando1 = ObtenerOperando('Operando1');
    valorOperando2 = ObtenerOperando('Operando2');
	valor = valorOperando1 + valorOperando2; 
	miResultado.innerHTML = valor;
}

function Resta() 
{
	var miResultado,
	    valorOperando1,
	    valorOperando2,
	    valor;

	miResultado = document.getElementById('Resultado');
    valorOperando1 = ObtenerOperando('Operando1');
    valorOperando2 = ObtenerOperando('Operando2');
	valor = valorOperando1 - valorOperando2; 
	miResultado.innerHTML = valor;
}
function Multiplicacion() 
{
	var miResultado,
	    valorOperando1,
	    valorOperando2,
	    valor;

	miResultado = document.getElementById('Resultado');
    valorOperando1 = ObtenerOperando('Operando1');
    valorOperando2 = ObtenerOperando('Operando2');
	valor = valorOperando1 * valorOperando2; 
	miResultado.innerHTML = valor;
}
function Dividision() 
{
	var miResultado,
	    valorOperando1,
	    valorOperando2,
	    valor;

	miResultado = document.getElementById('Resultado');
    valorOperando1 = ObtenerOperando('Operando1');
    valorOperando2 = ObtenerOperando('Operando2');
	valor = valorOperando1 / valorOperando2; 
	miResultado.innerHTML = valor;
}
