

//!Definicion de una list de una forma abreviada

const paisesDisponibles =["Colombia","Peru","Chile"];


//! Definicion de una lista normal

const paisesDisponibles2 = new Array ("Colombia", "Peru","Argentina");



//!Agregar un elemento al final de la lista
paisesDisponibles.push("Uruguay");
console.log(paisesDisponibles);

//!Agregar un elemento al inicio de la lista 
paisesDisponibles2.unshift("Ecuador");
console.log(paisesDisponibles2);

//Los array siempre inician en posicion 0.
console.log(paisesDisponibles[0]);