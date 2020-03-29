// --- DOM ---
console.log(window);
//window.alert('Hola from window');

//obtengo un elmento en particular, por su ID
const title = document.getElementById('title');
console.log('title', title);
title.innerHTML = 'Cursos Disponible 2020';
console.log('title', title);

//obtengo un elmento en particular, por su ID
const descripcion = document.getElementById('descripcion');
console.log('descripcion', descripcion);
descripcion.innerHTML = 'Breve descripcion de los cursos Disponible 2020';
console.log('descripcion', descripcion);

//obtengo un conjunto de elementos, por su Class
const cursos = document.getElementsByClassName('list');
console.log('cursos: ', typeof(cursos), cursos);
// imprimo el conjunto de elementos
for(let x=0; x<cursos.length; x++){
	console.log('curso', typeof(cursos[x]), cursos[x]);
}

//obtengo un conjunto de elementos, por su TagName 
const cursos_2 = document.getElementsByTagName('li');
console.log('cursos_2: ', typeof(cursos_2), cursos_2);
// imprimo el conjunto de elementos
for(let x=0; x<cursos_2.length; x++){
	if (x%2 == 0) cursos_2[x].style.background = '#f2f2f2';

	console.log('cursos_2', typeof(cursos_2[x]), cursos_2[x]);
}

//obtengo el primer elemento, por su TagName 
const elemento_1 = document.querySelector('li');
console.log('TagName - elemento', typeof(elemento_1), elemento_1);

//obtengo el primer elemento, por su ID 
const elemento_2 = document.querySelector('#curso_1');
console.log('ID - elemento', typeof(elemento_2), elemento_2);

//obtengo el primer elemento, por su TagName 
const elemento_3 = document.querySelector('.list');
console.log('Class - elemento', typeof(elemento_3), elemento_3);

//obtengo los elementos, por su TagName 
const elemento_4 = document.querySelectorAll('li');
console.log('TagName - elementos', typeof(elemento_4), elemento_4);

console.log('\n querySelectorAll \n')
//obtengo los elementos pares, por su TagName 
const elemento_5 = document.querySelectorAll('li:nth-child(odd)');
console.log('TagName - elementos', typeof(elemento_5), elemento_5);
for(let x=0; x<elemento_5.length; x++){
	console.log('elemento_5', typeof(elemento_5[x]), elemento_5[x]);
}

//obtengo los elementos impares, por su TagName 
const elemento_6 = document.querySelectorAll('li:nth-child(even)');
console.log('TagName - elementos', typeof(elemento_6), elemento_6);
for(let x=0; x<elemento_6.length; x++){
	console.log('elemento_6', typeof(elemento_6[x]), elemento_6[x]);
}

//obtener los hijos de un objeto
const lista_1 = document.querySelector('ul');
//obtengo el numero de hijos
console.log('lista_1', lista_1.childElementCount, lista_1);
// obtengo la lista de hijos
console.log('lista_1 - hijos',lista_1.children);
// imprimo los hijos
for(let x=0; x<lista_1.children.length; x++){
	console.log('lista_1 - hijo', typeof(lista_1.children[x]), lista_1.children[x]);
}
//obtengo el primer hijo
console.log('lista_1 - hijos - primero',lista_1.firstElementChild, lista_1.firstElementChild.innerHTML);
//obtengo el ultimo hiji
console.log('lista_1 - hijos - ultimo',lista_1.lastElementChild, lista_1.lastElementChild.innerHTML);

//obtener los hijos de un objeto
const lista_2 = document.querySelector('div.row > ul > li');
console.log('lista_2 - padre', lista_2.parentElement);
console.log('lista_2 - padre - abuelo', lista_2.parentElement.parentElement);
console.log('lista_2 - siguiente hermano', lista_2.nextElementSibling);
//console.log('lista_2 - anterior hermano', lista_2.previousElementSibling);
for(let x=0; x<lista_2.parentElement.children.length; x++){
	console.log('lista_2 - hijo', typeof(lista_2.parentElement.children[x]), lista_2.parentElement.children[x]);
}

//Nodos
//obtengo un elmento en particular, por su ID
const nodo = document.getElementById('curso_1');
console.log('nodo', nodo.childElementCount);
console.log('nodo', nodo.childNodes.length);// el texto es un nodo
