"use strict";

import { getCols, getRows, getGameBoard, setGameBoard } from "./tablero.js";
import { getCurrentPlayer, setCurrentPlayer } from "./players.js";
export {checkWin, resetGame};

const cols = getCols();
const rows = getRows();

let gameBoard = getGameBoard();

// Función para verificar si alguien ha ganado

function checkWin(row, col) {
    const player = gameBoard[row][col];

    // Verificar horizontal
    let count = 1;
    let c = col - 1;
    while (c >= 0 && gameBoard[row][c] === player) {
        count++;
        c--;
    }
    c = col + 1;
    while (c < cols && gameBoard[row][c] === player) {
        count++;
        c++;
    }
    if (count >= 4) return true;

    // Verificar vertical
    count = 1;
    let r = row - 1;
    while (r >= 0 && gameBoard[r][col] === player) {
        count++;
        r--;
    }
    r = row + 1;
    while (r < rows && gameBoard[r][col] === player) {
        count++;
        r++;
    }
    if (count >= 4) return true;

    // Verificar diagonal hacia abajo-derecha
    count = 1;
    r = row - 1;
    c = col + 1;
    while (r >= 0 && c < cols && gameBoard[r][c] === player) {
        count++;
        r--;
        c++;
    }
    r = row + 1;
    c = col - 1;
    while (r < rows && c >= 0 && gameBoard[r][c] === player) {
        count++;
        r++;
        c--;
    }
    if (count >= 4) return true;

    // Verificar diagonal hacia arriba-derecha
    count = 1;
    r = row - 1;
    c = col - 1;
    while (r >= 0 && c >= 0 && gameBoard[r][c] === player) {
        count++;
        r--;
        c--;
    }
    r = row + 1;
    c = col + 1;
    while (r < rows && c < cols && gameBoard[r][c] === player) {
        count++;
        r++;
        c++;
    }
    if (count >= 4) return true;

    return false;
}


// Función para reiniciar el juego
const resetGame = () => {
    const cells = document.querySelectorAll('.celda');
    cells.forEach(cell => {
        cell.classList.remove('red', 'yellow');
    });
    gameBoard = gameBoard.map(row => row.map(() => null));
    setGameBoard(gameBoard);
    setCurrentPlayer('red'); //restablece el valor del jugador inicial en RED
}