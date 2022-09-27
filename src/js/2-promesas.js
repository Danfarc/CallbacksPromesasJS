

const heroes ={
    capi:{
        nombre:'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron:{
        nombre:'Iroman',
        poder: 'absurda cantidad de dinero'
    },
    spider:{
        nombre:'Spiderman',
        poder: 'Algo con las arañas'
    },
}

export const buscarHeroe = (id) =>{

    const heroe = heroes[id];

    // const promesa = new Promise();

    return new Promise( (resolve, reject)=>{
        if(heroe){
            resolve(heroe);
        }else{
            reject(`No exise in heroe con el id: ${id} `);
        }
    });
}



export const buscarHeroeTiemOut = (id) =>{

    const heroe = heroes[id];

    // const promesa = new Promise();

    return new Promise( (resolve, reject)=>{
        if(heroe){
            setTimeout(() => {
                resolve(heroe);
            }, 1000);
            
        }else{
            reject(`No exise in heroe con el id: ${id} `);
        }
    });
}

export const buscarHeroeAsync = async (id) =>{

    const heroe = heroes[id];

    // const promesa = new Promise();

    // return new Promise( (resolve, reject)=>{ // Con Async no se utiliza promesas
        if(heroe){
            // resolve(heroe);
            return heroe
        }else{
            // throw Error(`No exise in heroe con el id: ${id} `);
            throw `No exise in heroe con el id: ${id} `;
        }
    // });
} 

const promesaLenta = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('Promesa Lenta'),2000)
});
const promesaMedia = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('Promesa Media'),1500)
});
const promesaRapida = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('Promesa Rapida'),1000)
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}