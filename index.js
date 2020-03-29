//const request =  require('request');
//const request_promise =  require('request-promise');

// --- CallBacks ---
/*
request('http://google.cl', function(){
	console.log('Terminé la petición de Google');
});
console.log('Listo para una nueva ejecución');
*/
// --- Promesas ---
/*
Las promesas tienen 3 estados:
- fullfiled : completado
- rejected : no se cumplio con exito
- pending : en proceso
- setled : finalizada con exito o error
*/
/*
request_promise('http://google.cl')// return promise type object
	.then(function(html){
		console.log('Terminé la petición de Google');
	}).catch(function(error){// en caso de error
		console.log(err);
	});
*/

// --- Mi Promesa
/*
function leer(url){
	return new Promise(function(resolve, reject){
		request(url, function(err, response){
			if(err){
				reject(err);
			}else{
				reject(response);
			}

		});
	});
}
leer('http://google.cl')// return promise type object
	.then(function(response){
		console.log(response);
	}).catch(function(error){// en caso de error
		console.log(error);
	});
*/

// ---  Multiples Promesas -- 
/*
let p1 =  new Promise( (resolve, reject)=> setTimeout(resolve, 500, 'Hi from p1'));
let p2 =  new Promise( (resolve, reject)=> setTimeout(resolve, 600, 'Hi from p2'));
let p3 = Promise.reject(); // promesa rechazada desde su creacion
let saludar = () => console.log('Hi from let'); 

Promise.all([p1, p2, p3]).then( 
		resultados => {
			console.log(resultados);
			saludar();
	}).catch( 
		() => console.log('Tenemos un error')
);
*/

// --- Encadenar Promesas
/*
function calculo(){
	return new Promise( (resolve, reject) => {
		setTimeout(resolve, 400, 5);
	});
}
function calculo_2(numero){
	console.log(numero);
	return new Promise( (resolve, reject) => {
		setTimeout(resolve, 200, 'Segunda promesag');
	});
}

calculo().then(calculo_2).then(console.log);
*/
