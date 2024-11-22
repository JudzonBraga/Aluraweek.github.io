import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function agregarCards(evento){

    evento.preventDefault();
    const imagen = document.querySelector("[data-imagen]").value;
    const personaje = document.querySelector("[data-personaje]").value;
    const anime = document.querySelector("[data-anime]").value;
    const poder = document.querySelector("[data-poder]").value;

    await conexionAPI.enviarCards(imagen, personaje, anime, poder);

    window.location.href="../index.html";
}

formulario.addEventListener("submit", evento => agregarCards(evento));