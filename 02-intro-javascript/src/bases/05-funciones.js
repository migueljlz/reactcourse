// Funciones en JS
const saludar = function ( nombre ){ 
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => { 
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

console.log( saludar('Mike') );
console.log( saludar2('Shaz') );
console.log( saludar3('Diablo') );

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'EL_Papi1251'
    }
}
const getUser2 = () => 
    ({
        uid: 'ABC123',
        username: 'EL_Papi1251'
    })


console.log( getUser() );
console.log( getUser2() );

// Tarea
// 1. Transformen a una funcion de flechan
// 2. TIene que retonar un objeto implícito
// 3. Pruebas
function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC123',
        username: nombre
    }
};

const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABC123',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Mikes');
const usuarioActivo2 = getUsuarioActivo('Mikes');
console.log( usuarioActivo );
console.log( usuarioActivo2 );