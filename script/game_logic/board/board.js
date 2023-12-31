"use strict";
import { getCurrentPlayer } from "../../users/players/players.js";
export { createBoard, dropToken, checkTableroEmpty,setCols, setRows, setFichasVictoria,  getCols, getRows, getGameBoard, setGameBoard, getCurrentRow, getCurrentCol, getFichasVictoria }

//Elementos del tablero:
let rows = 6;
let cols = 7;
let fichasVictoria = 4;
let gameBoard = [];
let currentRow;
let currentCol;

const getCurrentRow = () => {
    return currentRow;
}

const getCurrentCol = () => {
    return currentCol;
}

const setRows = (value) => {
    rows = value;
}
const setCols = (value) => {
    cols = value;
}

const setFichasVictoria = (value) => {
    fichasVictoria = value;
}

const getCols = () => {
    return cols;
}
const getRows = () => {
    return rows;
}

const getGameBoard = () => {
    return gameBoard;
}

const getFichasVictoria = () => {
    return fichasVictoria;
}

const setGameBoard = (newGameBoard) => {
    gameBoard = newGameBoard;

}

/**
 * Funcion que crea el tablero virtual: Array de 2 dimensiones y lo traslada al apartado visual para que el usuario pueda visualizarlo =>
 * Se genera tambien un div con un class llamado "celda", cada uno de ellos tiene un dataset con el valor de su fila y columna correspondiente
 */
const createBoard = (rows, cols) => {
    const tablero = document.querySelector(".tablero");
    tablero.innerHTML = '';
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
    tablero.style.gridTemplateColumns = `repeat(${cols}, auto)`;
    return true;
}





/**
 * Recorre los datos del ultimo array disponible del tablero.
 * En caso de existir un espacio vacio "null" nos indicará que queda almenos 1 hueco disponible para el usuario
 * @returns true en caso de almenos 1 posicion vacia => null, y false en caso de que no existan posiciones vacias => no existen null
 */
const checkTableroEmpty = () => {
    return gameBoard[0].some(element => element === null);
}

/**
 * Funcion que coloca una ficha en la posicion mas baja (verticalmente) del tablero
 * @param {*} columna seleccionada por el usuario
 * @returns boolean, true si se ha podido colocar la ficha (existe espacio en la columna), false en caso de que no se colocó la ficha (la columna está llena)
 */
const dropToken = (columna) => {
    let currentPlayerValue = getCurrentPlayer();
    if (columna != undefined)
        for (let row = rows - 1; row >= 0; row--) {
            if (!gameBoard[row][columna]) { //Si la posicion está vacia devuelve true
                gameBoard[row][columna] = currentPlayerValue._color;
                let cell = document.querySelector(`[data-row="${row}"][data-column="${columna}"]`);
                currentCol = Number(columna); //valor de la columna en la que se colocó la ficha
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
