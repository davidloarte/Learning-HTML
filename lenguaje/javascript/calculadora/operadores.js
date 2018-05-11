function ObtenerOp1(){
	var miOperando1, valorOp1;

	miOperando1 = document.getElementById('Operando1');
	valorOperando1 = parseInt(miOperando1.value);
	return valorOp1;
}

function ObtenerOp2() {
	var miOperando2, valorOp2;

	miOperando2 = document.getElementById('Operando2');
	valorOperando2 = parseInt(miOperando2.value);
	return valorOp2;
}


function Suma(){
	var valorOperando1, valorOperando2, valorSuma, miResultado;

	miResultado = document.getElementById('Resultado');	
	
	valorSuma = valorOperando1 + valorOperando2;
	miResultado.innerHTML = valorSuma;

	/*  OTRA MANERA CON MENOS VARIABLES*/
	/*document.getElementById('Resultado').innerHTML = 
	parseInt(document.getElementById('Operando1').value
		+
	parseInt(document.getElementById('Operando2').value ;
		 */
}

function Resta(){
	var valorOperando1, valorOperando2, valorSuma, miResultado;

	miResultado = document.getElementById('Resultado');
	
	valorSuma = valorOperando1 - valorOperando2;
	miResultado.innerHTML = valorSuma;
}

function Multiplicacion(){
	var valorOperando1, valorOperando2, valorSuma, miResultado;
	
	miResultado = document.getElementById('Resultado');
	
	valorSuma = valorOperando1 * valorOperando2;
	miResultado.innerHTML = valorSuma;

}

function Division(){
	var valorOperando1, valorOperando2, valorSuma, miResultado;

	miResultado = document.getElementById('Resultado');
	
	valorSuma = valorOperando1 / valorOperando2;
	miResultado.innerHTML = valorSuma;

}