

const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");
const precioCiudad = new Array(500,400,380,200);
const presupuestoDisponible = 250;

let i = 0;

//!While...0 o mas veces.
//*Do... 1 o mas veces

while(precioCiudad[i] > presupuestoDisponible && ciudadesDisponibles.length) {
  i++;
  //Si se nos olvida colocar el contador queda en un bucle infinito.
}

if (i == ciudadesDisponibles.length)
  console.log("No tenemos pasajes disponibles");
else
console.log("Puedes comprar pasaje para: " + ciudadesDisponibles[i]);


