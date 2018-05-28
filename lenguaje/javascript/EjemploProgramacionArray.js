function CrearElemneto() {

	//Creacion de una tabla de 4 elemntos: 0,1,2,3
	var miTabla = new Array(4);

	miTabla[0] = "Pepito";
	miTabla[1] = "Ana";
	miTabla[2] = "Laura";
	miTabla[3] = "Juan";

	resultado = document.getElementById('Resultado');
	for (var i = 0 ; i <= 4; i++) {
		resultado.innerHTML += miTabla[i] + " ";
	}

}


