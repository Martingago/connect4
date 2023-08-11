"use strict";

import { getCols, getRows, getGameBoard, setGameBoard } from "../panel/tablero.js";
import { getCurrentPlayer} from "../users/players/players.js";
export { resetGame, checkWin, showWinnerLine, getVictoria };

const cols = getCols();
const rows = getRows();
let gameBoard = getGameBoard();
let victoria = false;

const getVictoria = () => {
    return victoria;
}

// Función para verificar si alguien ha ganado
const checkWin = (row, col) => {
    const directions = [
        [0, 1], // horizontal
        [1, 0], // vertical
        [1, 1], // diagonal hacia abajo
        [1, -1] // diagonal hacia arriba
    ];
    for (const [dx, dy] of directions) {
        let count = 1;
        const linePositions = [{ r: row, c: col }];
        for (const sign of [-1, 1]) {
            let r = row + sign * dx;
            let c = col + sign * dy;

            while (r >= 0 && r < rows && c >= 0 && c < cols && gameBoard[r][c] === getCurrentPlayer()._color) {
                linePositions.push({ r, c })
                count++;
                r += sign * dx;
                c += sign * dy;
            }
            if (count >= 4) {
                victoria = true;
                return linePositions;
            }
        }
    }
    return false;
}

const showWinnerLine = (arrayLine) => {
    arrayLine.forEach(element => {
        let ficha = document.querySelector(`[data-row="${element.r}"][data-column="${element.c}"]`);
        ficha.classList.add("test");
        let animation = setInterval(() => {
            ficha.classList.toggle("test");
            if (!victoria) {
                clearTimeout(animation)
                ficha.classList.remove("test");
            };
        }, 750);
    });
}

// Función para reiniciar el juego
const resetGame = () => {
    victoria = false;
    const cells = document.querySelectorAll('.celda');
    cells.forEach(cell => {
        cell.classList.remove('red', 'yellow');
    });
    gameBoard = gameBoard.map(row => row.map(() => null));
    setGameBoard(gameBoard);
}



