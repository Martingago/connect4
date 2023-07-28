"use strict";

export {switchCurrentPlayer, getCurrentPlayer, setCurrentPlayer}


let currentPlayer = 'red'; //valor inicial del jugador

const redColor = "rgb(255,131,131)";
const yellowColor = "rgb(255,255,115)";

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
    if(currentPlayer === 'red'){
        txtTurnPlayer.style.color = redColor;
    }else{
        txtTurnPlayer.style.color = yellowColor;
    }
}






let redScoreBoard = 0;
let yellowScoreBoard = 0;

const setRedScoreBoard = (redScoreBoard) => {
    redScoreBoard = redScoreBoard;
}

const setYellowScoreBoard = (yellowScoreBoard) => {
    yellowScoreBoard = yellowScoreBoard;
}