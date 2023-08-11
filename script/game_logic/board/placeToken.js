"use strict";
import { getRows, currentCol, currentRow} from "./board";
export {dropToken}

const rows = getRows();
/**
 * Funcion que coloca una ficha en la posicion mas baja (verticalmente) del tablero
 * @param {*} col seleccionada por el usuario
 * @returns boolean, true si se ha podido colocar la ficha (existe espacio en la col), false en caso de que no se colocó la ficha (la col está llena)
 */
const dropToken = (col) => {
    let currentPlayerValue = getCurrentPlayer();
    if (col != undefined)
        for (let row = rows - 1; row >= 0; row--) {
            if (!gameBoard[row][col]) { //Si la posicion está vacia devuelve true
                gameBoard[row][col] = currentPlayerValue._color;
                let cell = document.querySelector(`[data-row="${row}"][data-column="${col}"]`);
                currentCol = Number(col); //valor de la col en la que se colocó la ficha
                currentRow = Number(row); //valor de la fila en la que se colocó la ficha
                cell.classList.remove("redhover");
                cell.classList.remove("yellowhover");
                cell.classList.add(currentPlayerValue._color, "falling");
                // Retraso para quitar la clase 'falling' después de la animación
                setTimeout(() => {
                    cell.classList.remove("falling");
                }, 600);
                return true;
            }
        }
    return false;
}