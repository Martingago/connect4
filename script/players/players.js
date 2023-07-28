"use strict";

export {switchCurrentPlayer, getCurrentPlayer, setCurrentPlayer}


let currentPlayer = 'red'; //valor inicial del jugador



const txtTurnPlayer = document.querySelector(".player-turn-txt");
const getCurrentPlayer = () => {
    return currentPlayer;
}

const setCurrentPlayer = (newPlayer) => {
    currentPlayer = newPlayer;
}

//intercambia valores del jugador actual:
const switchCurrentPlayer = () => {
    currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
    txtTurnPlayer.textContent = currentPlayer;
}






let redScoreBoard = 0;
let yellowScoreBoard = 0;

const setRedScoreBoard = (redScoreBoard) => {
    redScoreBoard = redScoreBoard;
}

const setYellowScoreBoard = (yellowScoreBoard) => {
    yellowScoreBoard = yellowScoreBoard;
}