// --- Funciones ---

// *** Tipos de declaracion ***
/*
Forma 1:
function  nombre(parametro1, parametro2 = 0, parametro3 = true, ...){}
Forma 2:
function(parametro1, parametro2, ...){}
Forma 3:
function nombre(){
	//arguments es la variable que almacena todo los parametros de entrada
	return arguments[0]+arguments[1]+...
}
*/

// *** Llamado de funciones entre funciones ***
/*
function x1(funcion){
	funcion();
}
function x2(){
	console.log('Hi from x2')
}
x1(x2);

x1(function(){
	console.log('Hi from anonymous function');
});

*/

// *** Arrow functions ***
/*
let demo = ()=>{
	console.log('Hi from arrow functions');
}
*/

// *** Call, Apply, Bind ***

/*
function ejecutar(funcion){
	funcion();//error
	function.call(alumno); //"Ricardo Ramírez"
	function.apply(alumno); //"Ricardo Ramírez"
}	function(); //"Ricardo Ramírez"

let alumno = {
	nomre: 'Ricardo',
	apellido:'Ramírez',
	nombreCompleto:function({
		console.log(this.nombre+" "+ this.apellido);
	}
}

alumno.nombreCompleto(); //"Ricardo Ramírez"
ejecutar(alumno.nombreCompleto); //error porque no esta instanciado alumsno 
ejecutar(alumno.nombreCompleto); //"Ricardo Ramírez" usando call
ejecutar(alumno.nombreCompleto); //"Ricardo Ramírez" usando apply
ejecutar(alumno.nombreCompleto.bind(alumno)); //"Ricardo Ramírez" usando Bind

*/

// *** Funciones constructoras ***
/*
function Curso(titulo){
	this.titulo = titulo
	this.inscribir = function(alumno){
		console.log(alumno+ "ha sido inscrito");
	}
}

let curso_1 = new Curso('Nuevo curso');
let curso_2 = new Curso('Nuevo curso 2');

console.log(curso_1.titulo);
console.log(curso2.titulo);

*/

// *** Funciones asincronas *** 

// async
/*
async function sumar(n1, n2){
    return n1+n2
}

async function calcular(){
    return new Promise((resolve,reject) => {
        setTimeout(resolve, 500, 5);
    });
}
sumar(1,2).then( (resultado)=>{console.log(resultado)} );
calcular().then( (resultado)=>{console.log(resultado)} );
*/
// Await
/*
let promesa =  new Promise( (resolve, reject) => {
    setTimeout(resolve, 400, 7);
});
promesa.then( (resultado)=>{console.log(resultado)} );

(async function(){
    let promesa_2 =  await new Promise( (resolve, reject) => {
        setTimeout(resolve, 400, 6);
    });
    let promesa_3 =  await new Promise( (resolve, reject) => {
        setTimeout(resolve, 300, 8);
    });
    let promesa_4 =  await new Promise( (resolve, reject) => {
        setTimeout(resolve, 500, 9);
    });
    console.log(promesa_2+promesa_3+promesa_4);
})();
*/
// *** Errores en las promesas ***
/* */
(async function(){
    try{
        let mi_promesa = await Promise.reject('Error await 1');
        let mi_promesa_2 = await Promise.reject('Error await 2');
    }catch(error){
        console.log('Problemas:', error);
    }
})();