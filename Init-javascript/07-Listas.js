

//Definicion de una list de una forma abreviada

const paisesDisponibles =["Colombia","Peru","Chile"];


// Definicion de una lista normal

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
console.log(cantidadPaises);


const ciudadesColombia = ["Medellin","Cali","Bogota","Armenia","Barranquilla"];
console.log(ciudadesColombia);

//Eliminar elementos de la lista, el primer
ciudadesColombia.shift();

//Eliminar el ultimo elemento 




