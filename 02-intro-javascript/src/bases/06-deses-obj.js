// Desestructuración
// Asignación desestructurante

/**
 * 
 * La sintaxis de desestructuración es una expresión de 
 * JavaScript que permite desempacar valores de arreglos 
 * o propiedades de objetos en distintas variables.
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * 
 */

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango: 'Soldado'
};

// Al colocar : estamos renombrando la variable
const { nombre:nombre2, edad, clave, } = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

console.log( nombre2 );
console.log( edad );
console.log( clave );

const retornPersona = ( usuario ) => {
    const { nombre, edad, clave } = usuario;

    console.log( nombre, edad, clave );
}

const retornPersona2 = ( { nombre, edad, rango = 'Capitan' } ) => {
    console.log( nombre, edad, rango);
}

retornPersona( persona );
retornPersona2( persona );

const setContext = ( { nombre, edad, rango = 'Capitan' } ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 12.351512,
            lng: 21.2141224
        }
    }
}

const { nombreClave, anios, latlng:{ lat, lng } } = setContext( persona );
console.log( nombreClave, anios );
console.log( lat, lng );
