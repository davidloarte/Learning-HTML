function CambiarTexto() {
	//Cambiar el texto de un elemento con id = "resultado" del documento HTML
	var miParrafo;
	var precio = 22.65; /* tipo de datos number */

	miParrafo = document.getElementById('resultado');
	
	precio = precio +10;
	miParrafo.innerHTML += "El precio es " + precio + "<br>" + "El doble del precio es " + (precio*2) + "<br>";

	/*cambiamos el tipo de datos de precio*/
	precio = 'Muy caro'; /*ahora es string*/
	miParrafo.innerHTML +="Tipo de datos: String" + "<br>" + "El precio es " + precio + "<br>" + "El doble del precio es " + (precio*2) + "<br>";

	precio = false; /*ahora es string*/
	miParrafo.innerHTML +="El precio es: " + "<br>" + "Tipo de datos: String" + "<br>" + "El precio es " + precio + "<br>" + "El doble del precio es " + (precio*2) + "<br>";
}