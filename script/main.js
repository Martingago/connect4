"use strict";

import {crearTablero, dropToken} from "./controls/tablero.js";
import { checkWin, resetGame } from "./controls/game.js";
import { switchCurrentPlayer} from "./controls/players.js";

const tablero = document.querySelector(".tablero");
const generarTablero = crearTablero();

const handleCellClick = (event) => {
    const selectedColumn = event.target.dataset.column;
    if (dropToken(selectedColumn)) {
        
        if (checkWin(Number(event.target.dataset.row), Number(selectedColumn))) {
            console.log("Ha ganado");
            resetGame();
            
        } else {
            switchCurrentPlayer();

        }
    } 
}

tablero.addEventListener("click", handleCellClick);