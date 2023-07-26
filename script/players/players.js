"use strict";

export {switchCurrentPlayer, getCurrentPlayer, setCurrentPlayer}


let currentPlayer = 'red'; //valor inicial del jugador

const getCurrentPlayer = () => {
    return currentPlayer;
}

const setCurrentPlayer = (newPlayer) => {
    currentPlayer = newPlayer;
}

//intercambia valores del jugador actual:
const switchCurrentPlayer = () => {
    currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
}