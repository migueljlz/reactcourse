// Arreglos en JS
// const arreglo = new Array(100);
const arreglo = [1, 2, 3, 4];

// No es recomendable usar el push, modifica el objeto principal
// arreglo.push(1); 
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

// Uso de spread
let arreglo2 = [...arreglo, 5];
// arreglo2.push(5);

// Este es un callback, una función que es va a ejecutar en ese método
const arreglo3 = arreglo2.map(function (numero){
    return numero * 2;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );