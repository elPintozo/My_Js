// --- Clases ---
/*
class Curso{} //class expresion
let Curso = class{} // class declaration
let Curso2 = class Curso{} //class declaration

class Curso {
	constructor(titulo, estado=true ){
		this.titulo = titulo;	
		this.estado = estado
	}

	inscribir(alumno){
		console.log(alumnos+" ha sido matriculado")
	}
}

let mi_curso = new Curso("Nuevo curso 2020")
*/

// *** Herencia ***
/*
- antes
class Vimeo{
	play() {this.video.play(); }
	duration(){ return this.video.duration/100; }
	open(){ this.redirectToVimeo(this.video); }	
}

class YouTube{
	play() {this.video.play(); }
	duration(){ return this.video.duration/100; }
	open(){ this.redirectToYoutube(this.video); }		
}
- despues
class Player{
	play() {this.video.play(); }
	duration(){ return this.video.duration/100; }
}
class Vimeo extends Player{
	open(){ this.redirectToVimeo(this.video); }	
}

class YouTube extends Player{
	open(){ this.redirectToYoutube(this.video); }		
}

class CustomDate extends Date{}
class CustomArray extends Array{}

-antes
class User{
	saludar(){
		console.log('Hola');
	}
}
class Admin extends User{
	saludar(){
		console.log('Hola');
		console.log('Cómo está?')
	}
}

-despues
class User{
	constructor(nombre){
		this.nombre =  nombre;
	}
	saludar(){
		console.log('Hola');
	}
}

class Admin extends User{
	constructor(nombre){
		super(nombre);
	}
	saludar(){
		super.saludar();
		console.log('Cómo está?')
	}
}

*/

// *** Declarar objetos con JSON ***
/*
let curso = {
	titulo: 'Curso JS',
	estado: true,
	formato: 'video',
	bloque: ['mañana', 'tarde'],
	inscribir: functions(usuario){
		console.log(ususario + "- ahora esta inscrito")
	}	
}

console.log(curso.titulo);
curso.titulo = 'Curso JS 2.0';
curso.inscribir("Esteban");
*/

// *** Metodos Accesores ***
/*
- get : obtener el valor de uno de los parametros de la clase
- set : modificar el valor de uno de los parametros de la clase
class User{
	constructor(nombre){
		this.nombre =  nombre;
	}

	get name(){
		return this.nombre.charAt(0).toUpperCase()+this.nombre.slice(1);
	}

	set name(nombre){
		this.nombre = nombre;
	}
}

let user_1 = new User('pedro');
console.log(user_1.name); // 'Pedro'

*/

// *** Metodos estaticos ***
/*
class Usuario{
	constructor(permiso=lectura){
		this.permisos = permisos;
	}

	static createAdmin(){
		let user = new Usuario("Administrador");
		return user;
	}
}

class comparadorUsuarios{
	static quienEsMayor(user1, user2);
}

let administrador = Usuario.createAdmin();
*/

// *** Prototipos -  Herencia de prototipos ***
/*
let animal = Object.create(null);
animal.vivo = true;
animal. estaVivo = function(){if(this.vivo) console.log('Sigue vivo');}
let perro = Object.create(animal);
perro.estaVivo();
*/

// *** Property ***
/*
function User(){}
User.prototype.saludar = function(){
	console.log('Hi!');
}
function Admin(){}

Admin.prototype = new User();

let user_11 = new User();
let user_22 = new Admin();

user_22.saludar();
*/