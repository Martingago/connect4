"use strict";
import { jugador1, jugador2 } from "../initUsers.js";
export {getCurrentPlayer, setCurrentPlayer, switchCurrentPlayer, initPlayers}

/**
 * Constructor del objeto jugador
 */
class Jugador {
    constructor(id, nombre, color, imagen) {
        this._id = id;
        this._nombre = nombre;
        this._color = color;
        this._avatar = imagen;
        this._score = 0;
    }
}

/**
 * Inicializa los valores de los jugadores en caso de no existir datos previos
 */
const initPlayers = () => {
    if (!localStorage.getItem("jugador1")) {
        const jugador1 = new Jugador(1,"Jugador 1", "red", "/img/avatar/humans/user-red-avatar.png");
        localStorage.setItem("jugador1", JSON.stringify(jugador1));
    }

    if (!localStorage.getItem("jugador2")) {
        const jugador2 = new Jugador(2,"Jugador 2", "yellow", "/img/avatar/humans/user-yellow-avatar.png");
        localStorage.setItem("jugador2", JSON.stringify(jugador2));
    }
}


//Valor del jugador actual
let currentPlayer;

const getCurrentPlayer = () => {
    return currentPlayer;
}

const setCurrentPlayer = (newPlayer) => {
    currentPlayer = newPlayer;
}

//intercambia valores del jugador actual:
const switchCurrentPlayer = () => {
    currentPlayer = currentPlayer === jugador1 ? jugador2 : jugador1;
}

