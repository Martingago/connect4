"use strict";
import { getCurrentPlayer } from "./players.js";

export { crearTablero, dropToken, getCols, getRows, getGameBoard, setGameBoard}

//Elementos del tablero:
let rows = 6;
let cols = 7;
let gameBoard = [];


const getCols = () => {
    return cols;
}
const getRows = () => {
    return rows;
}

const getGameBoard = () => {
    return gameBoard;
}

const setGameBoard = (newGameBoard) => {
    gameBoard = newGameBoard;

}

//Crea la cuadricula del juego:
const crearTablero = () => {
    const tablero = document.querySelector(".tablero");
    for (let row = 0; row < rows; row++) {
        gameBoard[row] = [];
        for (let col = 0; col < cols; col++) {
            const celda = document.createElement('div');
            celda.classList.add("celda");
            celda.dataset.column = col;
            celda.dataset.row = row;
            tablero.appendChild(celda);
            gameBoard[row][col] = null;
        }
    }
}

const dropToken = (columna) => {
    let currentPlayerValue = getCurrentPlayer();
    if (columna != undefined)    
        for (let row = rows - 1; row >= 0; row--) {
            if (!gameBoard[row][columna]) {
                gameBoard[row][columna] = currentPlayerValue;
                const cell = document.querySelector(`[data-row="${row}"][data-column="${columna}"]`);
                cell.classList.add(currentPlayerValue);
                return true;
            }
        }
    return false;
}

