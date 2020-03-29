//Para mostrar informacion por consola
console.log('Hola mundo');

//para mostar informacion en la pantalla
//alert('hola mundo');

//Para pedir informacion por pantalla
//prompt();

//variables
/*
JS es:
	- es un lenguaje interpretado(requiere un interprete)
	- es debilmente y dinamicamente tipado (no tiene un tipo de variable fijo)
	- es keysensitive (discrimina entre mayusculas y minusculas)
		- let edad, let Edad, let EDAD. Todas las variables anteriores son diferente.


Se pueden inicializar variables usando
-let nombreVariable;
	- tiene como scope el bloque que lo contiene
-var nombreVariable;
	- tiene vomo scope el bloque que lo contiene y el más próximo

Para inicializar variables constantes
-const nombreVariable;

*/

//Numeros y operadores aritmeticos
/*
Operadores
-2+2 = 4
-2-2 = 0
-2*2 = 4
-2/2 = 1

Se puede hacer uso de la libreria Math
- obtener el valor de Pi: Math.PI = 3.14......
- obtener el valor de un exponente: Match.pow(10,3) = 1000
- obtener el redondeo de un numero: Math.round(3.3) = 3
- obtener la raiz cuadrada de un numero: Math.sqrt(4) = 2
- 
*/

//Booleanos
/*
let booleano =  new Boolean(1);//true
let booleano =  new Boolean(0);//false
let booleano =  new Boolean(true);//true
let booleano =  new Boolean(false);//false

Son valores falsos:
	- undefined
	- NaN
	- null
	- 0
	- .0
	- ""
	- false
*/
console.log('Booleanos');
let booleano =  new Boolean(1);
console.log(booleano.toString());

//Comparadores
/*
let edad = 28;
	- edad == 28 : true
	- edad == 20 : false
	- edad != 18 : true
	- edad != 28 : false
	- edad > 24 : true
	- edad < 24 : false
	- edad >= 24 : true
	- edad <= 24 : false
	- edad == "24" : true // solo se comparan los valores
	- edad === "24" : false // compara que el tipo de dato sea igual
*/

//operadores logicos
/*
- && : y
- || : o 
- !true : false
- !false : true
*/

//Condiciones 
/*

if(boolean){
}else if (boolean){
}else{
}

*/

//Ciclos
/*

for(let contador; contador < 10; contador++){}

while(boolean){}

do{	
}while(boolean){
}

- break: corta el ciclo
- continue : se salta la iteracion actual pero continua el ciclo
*/

//Undefined, null, NaN
/*
- undefined : indica que la variable an no ha sido asignada
- null : un objeto que indica ausencia de valor, es considerado un objeto
- NaN : (not a number) 
*/



//funciones utiles
/*
- typeof(): nos retorna el tipo de variable de un objeto
- setTimeout(functions,ms); // ejecuta la funcion luego de transcurrir milisegundos
- parseInt(string); : convierte un string en número
- object.__proto__ : me ayuda a saber como es su estructura, clase padre
*/


//Scope
/*
- Global scope: es una coleccion de variables, funciones y objetos que estan al alcance en todo momento
- Local scope: es una coleccion de variables, funciones y objetos que estan al alcance dentro de una funcion
*/

//Arreglos y sus usos
/*
let arreglo = [1,2,3,4,5,6,7,8,9,10];

- arrelgo.length : largo del arreglo

// listar los elementos
arreglo.forEach(function(elemento){
	console.log(elemento);
});

//eliminar un elemento, eliminar el 4
arreglo = arreglo.filter(function(elemento){
	return elemento!=4;
});
arreglo = arreglo.filter((elemento) => elemento != 4 );

//eliminar los pares
arreglo = arreglo.filter((elemento) => (elemento % 2) != 0 );

//encontrar elemento, encontrar el 8
arreglo = arreglo.find((elemento) => elemento == 8 );

//el cuadrado de los elementos
arreglo = arreglo.map(elemento => elemento*elemento );

*/

// *** For of y For in ***
/*
let arreglo = [1,2,3,4,5,6,7,8,9,10];
for( x in arreglo){
	console.log('in -', x);
}
for( z of arreglo){
	console.log('of -', z);	
}

function imprimir(){
	for( a of arguments){
		console.log('of', typeof(a), a);
	}
	for( z in arguments){
		console.log('in', typeof(z), z);
	}

}
imprimir('Alumno 1', 'Alumno 2', 'Alumno 3', 'Alumno 4', 'Alumno 5');

let ramos ={
	curso1:'Lu-Ma-Mi',
	curso2:'Mi-Ju',
	curso3:'Lu-Ma-Mi-Vi',
	curso4:'Lu-Vi'
}
for(p in ramos){
	console.log('Key: ', p);
}
*/
// *** Iteradores ***
/*
let iterador = {
	initial:1,
	next(){
		let result = {value:null, done:false};

		if(this.initial>0 && this.initial<=5){
			result = {value:this.initial, done:false};
			this.initial+=1;
		}else{
			result={done:true};
		}

		return result;
	}
};
let item = iterador.next();
while(!item.done){
	console.log('item:', typeof(item), item, item.value);
	item = iterador.next();
}
*/
// *** Generadores ***
/*
function* counter(){
	for(let x=0 ; x<5 ; x++){
		yield x;
	}
}

let generador = counter();
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());

function* retornador (){
	return 5;
}

let g =  retornador();
console.log(g.next());
*/ 

// ***  Delegar generadores ***
/*
function* counter(){
	for(let x=1 ; x<3 ; x++){
		yield x;
	}
}
function* retornador (){
	yield* counter();
	console.log('Termino los otro procesos');
	yield 3;
}
let g =  retornador();
console.log(g.next());
console.log(g.next());
console.log(g.next());
*/

// *** Simbolos ***
/*
let simbolo = Symbol('mi-simbolo');
let simbolo_2 = Symbol('mi-simbolo');
console.log('simbolo===simbolo_2:', simbolo===simbolo_2);

let obj = {};
obj[simbolo]=function(){
	console.log('Desde un simbolo');
}
obj[simbolo]();
*/

// *** Iterable con iteradores ***
/*
function* counter(){
	for(let x=1 ; x<5 ; x++){
		yield x;
	}
}
for(x of counter()){
	console.log('For of: ', x);
}
 // --- Iterador ---
let rango ={
	min: null,
	max: null,
	currentValue: null,

	[Symbol.iterator](){
		return this;
	},

	next(){
		if(this.currentValue== null) this.currentValue = this.min;
		let result = {};

		if(this.currentValue >= this.min && this.currentValue <= this.max){
			result = {value : this.currentValue, done: false};
			this.currentValue+=1;
		}else{
			result = {done:true}
		}

		return result;
	}
}

rango.min = 2;
rango.max = 10;

for(x of rango){
	console.log('Rango1.0:', x);
}

// --- Generador ---
let rango ={
	min: null,
	max: null,
	currentValue: null,

	[Symbol.iterator](){
		return this.generador();
	},
	generador: function* (){
		for(let x=this.min ; x<this.max ; x++){
			yield x;
		}
	}
}
rango.min = 3;
rango.max = 11;

for(x of rango){
	console.log('Rango2.0:', x);
}
*/