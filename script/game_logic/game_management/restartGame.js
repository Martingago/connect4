"use strict";

import { getGameBoard, setGameBoard } from "../board/board.js";
import {setVictoria } from "../outcome/game.js";
import { setCurrentPlayer } from "../../users/players/players.js";
import { jugador1 } from "../../users/initUsers.js";
export { resetGame}
let gameBoard = getGameBoard();

// Función para reiniciar el juego
const resetGame = () => {
    setVictoria(false);
    const cells = document.querySelectorAll('.celda');
    cells.forEach(cell => {
        cell.classList.remove('red', 'yellow');
    });
    gameBoard = gameBoard.map(row => row.map(() => null));
    setGameBoard(gameBoard);
    setCurrentPlayer(jugador1)
}
