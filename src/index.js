// import {promesaLenta,promesaMedia,promesaRapida} from './js/2-promesas'
// import {buscarHeroe, buscarHeroeAsync} from './js/2-promesas'
import {heroeIfAwait,heroesCiclo,obtenerHeroeAwait, obtenerHeroesArr , obtenerHeroesArrProTip, obtenerHeroesArrProTip2} from './js/3-await'

import './styles.css';

// promesaLenta.then(console.log);
// promesaMedia.then( (mensaje) => {console.log(mensaje)})
// promesaRapida.then(mensaje => console.log(mensaje))

// Promise.race([promesaLenta,promesaMedia,promesaRapida]) // Reponde solo a la promesa mas rapida asi tenga error
//     .then(console.log)
//     .catch(console.warn)

// buscarHeroe('capi1')
//     .then( heroe => console.log(heroe))
//     .catch( err => console.warn(err));

// buscarHeroeAsync('iron1')
//     .then( heroe => console.log(heroe))
//     .catch(console.warn);

// const heroes = obtenerHeroesArr();

// obtenerHeroesArr().then( console.table)


// console.time('await');

// obtenerHeroesArrProTip().then( heroe =>{
//     console.table(heroe);
//     console.timeEnd('await');
// });

// console.time('await1');

// obtenerHeroesArrProTip2().then( heroe =>{
//     console.table(heroe);
//     console.timeEnd('await1');
// });

// console.log(heroes);
// console.table(heroes);

// console.time('await1');

// obtenerHeroeAwait('capi2').then( heroe =>{
//     console.log(heroe);
//     console.timeEnd('await1');
// }).catch(console.error);


// heroesCiclo();
heroeIfAwait('iron');