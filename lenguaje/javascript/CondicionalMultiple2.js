function CalcularDia() {

	var campoResultado, fechaActual, diaActual;

	campoResultado = document.getElementById('Resultado');
	fechaActual = new Date();
	diaActual = fechaActual.getDay(); // getDAy(fechaActual);
	//la funcion getDay devuelve el dia de la semana de la fecha
	/*
	0: Domigo
	1: Lunes
	.
	.
	.
	6: Sábado*/
	switch(diaActual)
	{
		case 1:
			campoResultado.innerHTML = "Lunes";
			break;
		case 2:
			campoResultado.innerHTML = "Martes";
			break;
		case 3:
			campoResultado.innerHTML = "Miercoles";
			break;
		case 4:
			campoResultado.innerHTML = "Jueves";
			break;
		case 5:
			campoResultado.innerHTML = "Viernes";
			break;
		case 6:
			campoResultado.innerHTML = "Sabado";
			break;
		case 0:
			campoResultado.innerHTML = "Domingo";
			break;
		default: 
			campoResultado.innerHTML = "Día de la seman no valido";
			break;
	}

}