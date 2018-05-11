function CalcularEtapa() 
{
	var campoEdad, campoResultado;

	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad');
	valorEdad = campoEdad.value;

	if ((valorEdad >= 0) && (valorEdad<=12) )
 		campoResultado.innerHTML = " Infancia";
	
 	else if ((valorEdad >= 13) && (valorEdad<=16) )
 		campoResultado.innerHTML = " Adolescente";
 	
 	else if ((valorEdad >= 17) && (valorEdad<=22) )
 		campoResultado.innerHTML = " juventud";
 	
 	else if ((valorEdad >= 23) && (valorEdad<=150) )
 		campoResultado.innerHTML = " adultez";
 	
 	else
		campoResultado.innerHTML = " posiblemente seas un fiambre";
}