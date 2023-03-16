//* FUNCIONES Y PROPIEDADES DE UN ARRAY

//Definicion de una list de una forma abreviada

const paisesDisponibles =["Colombia","Peru","Chile"];


//Definicion de una lista normal

const paisesDisponibles2 = new Array ("Colombia", "Peru","Argentina");


//Agregar un elemento al final de la lista

paisesDisponibles.push("Uruguay");
console.log("Agregar elemento al final de la lista " + paisesDisponibles);

//Agregar un elemento al inicio de la lista 
paisesDisponibles2.unshift("Ecuador");
console.log("Agregar elemento al inicio de la lista con unshift " + paisesDisponibles2);

//Los array siempre inician en posicion 0.
console.log(paisesDisponibles[0]);

//! Otras funciones listas
//Lenght es una propiedad del arreglo

const cantidadPaises = paisesDisponibles.length;

//* Otro ejercicio

const ciudadesColombia = ["Medellin","Cali","Bogota","Armenia","Barranquilla"];


//Eliminar elementos de la lista, el primer
ciudadesColombia.shift();


//Eliminar el ultimo elemento 
ciudadesColombia.pop();
console.log(ciudadesColombia);

//Filtro de elementos de la lista.
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);

//Unificar los elementos en una cadena de caracteres
console.log(paisesDisponibles.join('-'));

//Ordenar la lista
console.log(paisesDisponibles.sort());

//Coniciendo la posición
console.log(`Perú está en la posición: ${paisesDisponibles.indexOf('Perú')}`);

//Unificar dos listas.
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log('Lista de paises y ciudades:');
console.log(listaPaisesYCiudades);
console.log('Lista de paises:');
console.log(paisesDisponibles);





