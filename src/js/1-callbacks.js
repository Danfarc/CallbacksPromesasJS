// Base de datos

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

export const buscarHeroe = (id, callback )=>{

    const heroe = heroes[id];

    if(heroe){
        callback(null,heroe);
    }else{
        // un error
        callback(`No exise in heroe con el id: ${id} `,null);
    }

    // callback(heroe);
}