import { buscarHeroeAsync,buscarHeroeTiemOut } from "./2-promesas";

const heroesIds =[
    'capi',
    'iron',
    'spider'
];

// const heroresPromesas = heroesIds.map(id => buscarHeroeTiemOut(id));
const heroresPromesas = heroesIds.map(buscarHeroeTiemOut);

export const obtenerHeroesArr = async ()=>{
    const heroesArr = [];

    for(const id of heroesIds){
        // buscarHeroeAsync(id).then(heroe => heroesArr.push(heroe));
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }
    
    // setTimeout(() => {
    //     console.log('Obetner Heroes');
    //     console.table(heroesArr);
    // }, 1000);

    return heroesArr;
}

export const obtenerHeroesArrProTip = async ()=>{
    const heroesArr = [];

    for(const id of heroesIds){
        heroesArr.push(buscarHeroeTiemOut(id));
    }

    return await Promise.all( heroesArr );
}

export const obtenerHeroesArrProTip2 = async ()=>{
    return await Promise.all(  heroesIds.map(buscarHeroeTiemOut));
};

export const obtenerHeroeAwait = async (id)=>{

    try {
        const heroe = await buscarHeroeAsync (id);
        return heroe;
    } catch (error) {
        console.log('CATH!!!');
        console.log(error);
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
        // throw error;
    }

    
}

export const heroesCiclo= async()=>{
    console.time('HeroesCiclo');

    // const heroes = await Promise.all(heroresPromesas);
    // heroes.forEach( heroe => console.log(heroe));

    for await (const hero of heroresPromesas){
        console.log(hero)
    }

    // console.log(heroes);
    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async (id)=>{

    if (await buscarHeroeAsync(id).nombre === 'Iroman'){
        console.log('Es el mejor de todos');
    }else{
        console.log('Naaaaa');
    }
}