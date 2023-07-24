"use strict";

import {crearTablero, dropToken, getCurrentCol, getCurrentRow} from "./controls/tablero.js";
import { checkWin, resetGame } from "./controls/game.js";
import { getCurrentPlayer, switchCurrentPlayer} from "./controls/players.js";

const tablero = document.querySelector(".tablero");
const generarTablero = crearTablero(); //genera el tablero virtual y visual de la aplicacion

const handleCellClick = (event) => {
    const selectedColumn = event.target.dataset.column; //valor de la columna en la que el usuario ha hecho click
    if (dropToken(selectedColumn)) {
        const currentCol = getCurrentCol(); //posicion de la columna en la que coloca la ficha
        const currentRow = getCurrentRow(); //posicicion de la columna en la que se coloca la ficha
        const player = getCurrentPlayer();  //dato del jugador actual
        
        if (checkWin(currentRow, currentCol)) {
            console.log("Ha ganado: " + player);
            resetGame();
            
        } else {
            switchCurrentPlayer();
        }
    } 
}

tablero.addEventListener("click", handleCellClick);