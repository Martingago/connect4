"use strict";

import { getCols, getRows, getGameBoard, setGameBoard } from "./tablero.js";
import { getCurrentPlayer, setCurrentPlayer } from "./players.js";
export {checkWin, resetGame};

const cols = getCols();
const rows = getRows();



let gameBoard = getGameBoard();
// Función para verificar si alguien ha ganado
function checkWin(row, col) {
    const directions = [
        [0, 1], // horizontal
        [1, 0], // vertical
        [1, 1], // diagonal hacia abajo
        [1, -1] // diagonal hacia arriba
    ];

    for (const [dx, dy] of directions) {
        let count = 1;
        for (const sign of [-1, 1]) {
            let r = row + sign * dx;
            let c = col + sign * dy;
            while (r >= 0 && r < rows && c >= 0 && c < cols && gameBoard[r][c] === getCurrentPlayer()) {
                count++;
                r += sign * dx;
                c += sign * dy;
            }
        }
        if (count >= 4) return true;
    }
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