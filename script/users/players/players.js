"use strict";
export { jugador1, jugador2, getCurrentPlayer, setCurrentPlayer, switchCurrentPlayer, initPlayers}


/**
 * Constructor del objeto jugador
 */
class Jugador {
    constructor(nombre, color, imagen) {
        this._nombre = nombre;
        this._color = color;
        this._avatar = imagen;
        this._puntuacion = 0;
    }
}

/**
 * Inicializa los valores de los jugadores en caso de no existir datos previos
 */
const initPlayers = () => {
    if (!localStorage.getItem("jugador1")) {
        const jugador1 = new Jugador("Jugador 1", "red", "/img/avatar/humans/user-red-avatar.png");
        localStorage.setItem("jugador1", JSON.stringify(jugador1));
    }

    if (!localStorage.getItem("jugador2")) {
        const jugador2 = new Jugador("Jugador 2", "yellow", "/img/avatar/humans/user-yellow-avatar.png");
        localStorage.setItem("jugador2", JSON.stringify(jugador2));
    }
}

// Obtener los datos de los jugadores desde el almacenamiento local
const jugador1 = JSON.parse(localStorage.getItem("jugador1"));
const jugador2 = JSON.parse(localStorage.getItem("jugador2"));


//Valor del jugador actual
let currentPlayer = jugador1;

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

