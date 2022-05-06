

const persona = {
    nombre: 'Shaz',
    apellido: 'Alcocer',
    edad: 24, // <-- es una buena practica, algunos libros lo recomiendan.
    direccion: {
        ciudad: 'New York',
        zip: 551251,
        lat: 14.51251252,
        lng: 34.51251252
    }
};

console.table(persona);

const persona2 = persona; // <- Hacer esto copia la referencia
persona2.nombre = 'Mike'; // Por lo que modificamos al objeto original, no es una copia.

console.log(persona);
console.log(persona2);

const persona3 = { ...persona }; // Realiza una copia del objeto, tenemos un nuevo elemento en memoria.
persona3.nombre = 'Alonso';

console.log(persona3);