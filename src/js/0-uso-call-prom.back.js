import { buscarHeroe as buscarHeroeCallback } from './js/1-callbacks';
import {buscarHeroe} from './js/2-promesas';
import './styles.css';


const heroeId1 = 'capi';
const heroeId2 = 'iron';

// buscarHeroe( heroeId, (err,heroe)=>{

//     if (err){
//         console.error( err );
//     }else{
//         console.info(heroe);
//     }
    
// });


// Callbacks
// buscarHeroe(heroeId1,( err, heroe1)=>{
//     if(err){return console.error(err);}

//     buscarHeroe(heroeId2, (err,heroe2)=>{
//         if(err){return console.error(err);}

//         console.log(`Enviando a ${ heroe1.nombre } y ${heroe2.nombre} a la mision`);
//     });

// });

//Promesas
// buscarHeroe(heroeId1).then(heroe1 =>{
//     // console.log(`Enviando heroe a la mision ${heroe}`);
//     buscarHeroe(heroeId2).then( heroe2 =>{
//         console.log(`Enviando a ${ heroe1.nombre } y ${heroe2.nombre} a la mision`);
//     })
// });

// Promesas en paralelo
// todo lo que esta adentro de Promise se resuelva
Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2)])
    .then( ([heroe1, heroe2]) => {  // destructuracion de un arreglo
    // console.log(`promise.all `, herores);
    console.log(`Enviando a ${ heroe1.nombre } y ${heroe2.nombre} a la mision`);
}).catch( err => { // todas las promesas deben de dar como satisfactorias para poder ejecutar el programa

    alert(err);
}).finally( ()=>{
    console.log('Se termino el Promise.all');
});

console.log('Fin de programa');