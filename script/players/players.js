"use strict";

export {switchCurrentPlayerTest, getCurrentPlayerTest, setCurrentPlayer, nextTurnPlayerTxt, player1, player2 }

class Jugador {
    constructor(nombre, color) {
        this._nombre = nombre;
        this._color = color;
        this._puntuacion = 0;
    }
}

//Se crean los jugadores por defecto
const player1 = new Jugador("Martin", "red");
const player2 = new Jugador("Maria", "yellow");

const txtPlayer1 = document.querySelector(".p-player-name-1");
const txtPlayer2 = document.querySelector(".p-player-name-2");
txtPlayer1.textContent = player1.nombre;
txtPlayer2.textContent = player2.nombre;

//Se establece el jugador actual (Por defecto Player1);
let currentPlayer = player1;

//intercambia valores del jugador actual:
const switchCurrentPlayerTest = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
}

const txtTurnPlayer = document.querySelector(".player-turn-txt");

const nextTurnPlayerTxt = () => {
    txtTurnPlayer.textContent = getCurrentPlayerTest()._nombre;
}

const getCurrentPlayerTest = () => {
    return currentPlayer;
}

const setCurrentPlayer = (newPlayer) => {
    currentPlayer= newPlayer;
}




