import { conexionAPI } from "./conexionAPI.js";
import crearCards from "./mostrarCards.js";

async function buscarCards(evento){
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscar(datosDeBusqueda);
    const lista = document.querySelector("[data-lista]");
 
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(card => lista.appendChild(crearCards(card.imagen, card.personaje, card.anime, card.poder)));
}

const botonBuscar = document.querySelector("[data-boton-buscar]");

botonBuscar.addEventListener("click", evento=>buscarCards(evento));