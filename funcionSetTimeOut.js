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

//Funcion setTimeOut simula ese retraso que realiza una funcion asincrona.



/*Esta funcion nos devuelve undefined por que cuando se llama a la funcion
  getDatos se ejectuta la funcion setTimeOut pero no hay nada que le diga
  que espere a que esto se resuelva, trata de devolver datos pero no pasa
  ese tiempo .*/


/*function getDatos(){
    setTimeout(() => {
        return datos;
    },2000)
}

console.log(getDatos());*/




/*La funcion de arriba se resuelve con las PROMESAS son un objeto especial de
  de javascript que nos permite ejecutar un trozo de codigo y cuando este listo
  se devuelve*/

/*function getDatos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos);
        },2000)
    })
}*/

//console.log(getDatos());
//getDatos().then((datos) => console.log(datos));v/*Dentro del then se utiliza una funcion callback(es una función que recibe como argumento otra función y la ejecuta. Así, la función contenedora elige cuándo ejecutar el callback.) */
//getDatos()
 //   .then((datos) => console.log(datos));
//    .then (.....) 
//    .catch(err =>...);

/*en vez de devolver el setTimeOut devolvemos una objeto Promise y como argumento
  dos funciones una seria resolve(es el que resuelve el problema) y reject (es el 
  que se encarga de los errores)..... Luego utilizamos el .then para esèperar a que
  esa promesa se resuelva y poder acceder a los datos y con el . catch recorgeruamos
  el error.*/