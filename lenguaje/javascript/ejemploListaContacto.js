class Contacto
{
	//creacion del contructor
	// -n : nombre, t: Telefono
	constructor(nombre, telefono, direccion){



	this.nombre = nombre;
	this.telefono = telefono;
	this.direccion = direccion;
	}

	Escribir(elementoHTML)
	{
	var resultado

	resultado = document.getElementById(elementoHTML);
	resultado.innerHTML = 
	"nombre: " + this.nombre + "<br>"+
	"telefono: " + this.telefono + "<br>"+
	"direccion: " + this.direccion + "<br>"
	}

	EscribirNombre(elementoHTML){

	var resultado

	resultado = document.getElementById(elementoHTML);
	resultado.innerHTML = "nombre: " + this.nombre + "<br>";

	}

	CambiarTelefono(nuevoT){
		this.telefono = nuevoT;
	}

	CambiarNombre(nuevoN){
		this.telefono = nuevoN;
	}

}




class listaContactos{
	//Creacion del contructor
	// -nContactos: numero de contactos
	// -lista: lista de contactos

	constructor(){
		this.nContactos = 0;
		this.Lista = new Array(5); //Crear una tabla de elmentos
	}

	InsertarContacto(nom, tel, dir){
		var contacto = new Contacto(nom, tel, dir)

		this.lista[this.nContactos] = contacto;
		this.nContactos ++;
	}

	EscribirNombre(elementoHTML){

		var resultado = document.getElementById(elementoHTML);
		resultado.innerHTML = "";


		for (var i = 0; i < this.nContactos; i++) {
			//this.lista[i]
			this.lista[i].EscribirNombre(elementoHTML);
		}
	
	}
}


//objeto global
var miLista = new listaContactos();


function InsertarContactoLista(elementoHTML)
{
	var miNombre, miTelefono, miDireccion;

	miNombre = document.getElementById('nombre').value;
	miTelefono = document.getElementById('telefono').value;
	miDireccion = document.getElementById('direccion').value;


	miLista.InsertarContacto(miNombre, miTelefono, miDireccion);
	miLista.EscribirNombre('listaContactoNombre');
}