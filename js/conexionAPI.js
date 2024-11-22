async function listarCards(){ /*crear una funcion asincrona para listar mis cards*/ 
    const conexion = await fetch("http://localhost:3001/cards"); /*crear una constante donde se depositan todos los
    datos obtenidos de la conexion del enlace */
    const conexionConvertida = conexion.json(); /*se convierte la conexion.jason en una variable para manipular la data */
    return conexionConvertida /*retornas la conexion con todos los datos obtenidos del json*/
}

async function enviarCards(imagen, personaje, anime, poder){
    const conexion = await fetch("http://localhost:3001/cards",{ /*definicion para una peticion POST */
        method:"POST",
        headers:{"Content-type":"application/json"},/*se trabaja con un archivo json */
        body:JSON.stringify({/*convertir un elemento de tipo objeto en un objeto de tipo string */
            imagen:imagen,/*las variables que se van a recibir */
            personaje:personaje,/*las variables que se van a recibir */
            anime:anime,/*las variables que se van a recibir */
            poder:poder/*las variables que se van a recibir */
        })
    })
    const conexionConvertida = conexion.json();/*convertir la conexion en json */
    return conexionConvertida;
}

async function buscar(palabraClave){
    const conexion = await fetch(`http://localhost:3001/cards?q=${palabraClave}`);
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function eliminarCards(){ /*crear una funcion asincrona para listar mis cards*/ 
    const conexion = await fetch("http://localhost:3001/cards"); /*crear una constante donde se depositan todos los
    datos obtenidos de la conexion del enlace */
    const conexionConvertida = conexion.json(); /*se convierte la conexion.jason en una variable para manipular la data */
    return conexionConvertida /*retornas la conexion con todos los datos obtenidos del json*/

}

export const conexionAPI = {
    listarCards, enviarCards, buscar, eliminarCards /*exportar la conexionAPI y dentro la funsion que retorna todos los datos obtenidos del json */
}
