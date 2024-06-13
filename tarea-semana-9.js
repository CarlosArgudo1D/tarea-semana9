/*Escribir una función que reciba un array de strings
 y muestre cada elemento con su posición.*/
"use strict";

let estudiantes = ["Carlos","Fernando","Paula","Ernesto","Mateo",]

for (let i=0;1<8;i++){
        alert("los estudiantes del curos son: " + estudiantes[i])
}

//-----------------------------------------------------------------------


/*Escribir una función que reciba un array 
de números y devuelva la suma de todos sus elementos.*/

let numeros = [1, 2 , 3 , 5 , 6];
let suma = 0;

for ( let i = 0; i < 4; i++){
    suma += numeros[i];
}

alert ("la suma de todos los numeros es:" + suma);

//------------------------------------------------------------------------

/*Escribir una función que reciba un array de números y
 muestre casa uno de sus elementos multiplicado por 3 */

function multiplicar(array) {
    for (let i = 0; i < array.length; i++) {
      alert(array[i] * 3);
    }
  }
  
  // Ejemplo de uso:
  let array = [1, 2, 3, 4];
  multiplicar(array);

