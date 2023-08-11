"use scrict";

import { initPlayers } from "./players/players.js";
export {jugador1, jugador2, inicializarDatosUsuarios}


let jugador1;
let jugador2;

//Funcion que comprueba el localStore, y genera los usuarios de forma global en la aplicacion
const inicializarDatosUsuarios = () => {
    //Genera usuarios en caso de no existir previamente datos
    initPlayers();
    jugador1 = JSON.parse(localStorage.getItem("jugador1"));
    jugador2 = JSON.parse(localStorage.getItem("jugador2"));
}
