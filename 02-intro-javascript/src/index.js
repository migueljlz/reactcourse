// import { heroes } from './data/heroes'; // Es opcional ponerle la terminación del archivo (.js)
// import { heroes } from './data/heroes'

import { heroes } from "./data/heroes"

// const getHeroeById = (id) => {
//     return heroes.find(( heroe ) =>{ 
//         if(heroe.id === id ){
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

const getHeroeById = (id) => heroes.find(( heroe ) => heroe.id === id);

console.log( getHeroeById(2))