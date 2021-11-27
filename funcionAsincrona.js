const datos = [{
    Id: 1,
    title: 'Spider-Man',
    year: 2002
},{
    Id: 2,
    title: 'Venom',
    year: 2018
},{
    Id: 3,
    title: 'Iron Man',
    year: 2008
},{
    Id: 4,
    title: 'Shang-Chi y la leyenda de los Diez Anillos',
    year: 2021
}
];


/*El async/await es una manera mas sincrona o secuencial a la hora de escribir 
el codigo pero por debajo sigue siendo asincrono y sigue habiendo promesas*/

/*function getDatos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos);
        },2000)
    })
}*/

//const datosFetched = await getDatos();
//onsole,log(datosFetched)

/*A la hora de llamr a los datos usamos el await en ves del .then, el resultado
  de ese await se puede guardar en una variable , pero me da un error porque el 
  await funciona unicamente con una funciona con funciones asincronas.... se soluciona
  de la siguiente manera*/

/*async function fetching(){
    const datosFetched = await getDatos();
    console.log(datosFetched) 
} 

fetching();*/

/*Lo que hacemos es hacer una funcion nueva y por delate se le agrega la palabra
  ASYNC dentro tenemos la varialble con el await que seria la promesa con el 
  setTimeOut y el el console de esta variable y por ultimo llamamos a la funcion*/