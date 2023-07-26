"Use strict";

import { getRows, getGameBoard } from "./tablero.js";
import { getCurrentPlayer } from "../players/players.js";
export { showNextPreview, handleCellHover, handleCellOutHover}


const rows = getRows();
const gameBoard = getGameBoard()

/**
 * Previsualiza la siguiente posicion de ficha
 * Esta funcion establece la siguiente previsualizacion de jugador en caso de que no se actualice un movimiento de raton =>
 * Si un jugador coloca una ficha pero no se mueve el raton, la previsualizacion será encima de la última ficha colocada.
 * @param {*} col 
 * @param {*} row 
 */

const showNextPreview = (col, row) => {
    if(row-1 >= 0){
        const playerPreview = getCurrentPlayer() + "hover";
        const previewNextCell = document.querySelector(`[data-row="${row-1}"][data-column="${col}"]`);
        previewNextCell.classList.add(playerPreview);
    }
}


/**
 * Funcion que previsualiza la posicion de la ficha del jugador
 * @param {*} e evento de raton en una ficha
 */
const handleCellHover = (event) => {
    let columna = event.target.dataset.column;
    let currentHover = getCurrentPlayer()+"hover";
    //Posiciona la previsualizacion en la pimera posicion vertical disponible para el usuario
    for(let row = rows - 1; row >= 0; row--) {
        if (!gameBoard[row][columna]) {
            const cell = document.querySelector(`[data-row="${row}"][data-column="${columna}"]`);
            cell.classList.add(currentHover);
            break;
        }
    }
}


/**
 * Funcion que elimina la previsualizacion cuando se cambia de celda
 */
const handleCellOutHover = () => {
    const allCells = document.querySelectorAll(".celda");
    allCells.forEach(cell => {
        cell.classList.remove("redhover");
        cell.classList.remove("yellowhover");
    });
}