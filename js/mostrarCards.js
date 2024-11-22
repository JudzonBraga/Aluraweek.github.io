import { conexionAPI } from "./conexionAPI.js"; /*importamos los datos de la conexionAPI */

const lista = document.querySelector("[data-lista]"); /*descargamos toda la data del selector data-lista en 1 constante */

export default function crearCards(imagen, personaje, anime, poder){ /*crear una funcion para crear el card */
    const cards = document.createElement("li");/* crear una etiqueta li y descargarla en una constante*/
    cards.className="cards__item"; /*asignar un nombre de clase a la etiqueta LI */
    /*crear el html que va dentro de la etiqueta LI */
    cards.innerHTML = ` 
            <div class="img__item" style='background-image: url("${imagen}");'></div>
            <div class="descripcion_card">
                <h3 class="nombre__card">${personaje}</h3>
                <div class="sub_descripcion_card">
                    <div class="poder_card">
                        <p>${anime}</p>
                        <p>${poder}pts</p>
                    </div>
                    <button class="eliminar__card" data-boton-eliminar></button>
                </div>
            </div>`;
    /*cierre del contenido dentro de la etiqueta LI */
            return cards;/*retorna los datos creados dentro de 1 sola variable */
}

async function mostrarCards(){/* crear una funcion ASINCRONA para consumir la data importada del js de conexionAPI */
    const listaAPI = await conexionAPI.listarCards();/*se descarga todos los datos del json en 1 const para manupilarlo */
    listaAPI.forEach(carta => lista.appendChild(crearCards(carta.imagen, carta.personaje, carta.anime, carta.poder)));
    /*- recorre el data json
      - crear una variable carta donde se almacenara la data que se creara
      - direcccionar a la variable lista, que apunta al UL el [data-lista]
      - crear un hijo al UL(sera un li segun la funcion crearcards)
      - envia las variables segun los name que se encuentran en el json ala funcion crearCards*/




}

mostrarCards();/*ejecutas el mostrar cards */