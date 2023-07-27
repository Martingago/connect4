"use strict";

import { crearTablero, dropToken, getCurrentCol, getCurrentRow } from "./panel/tablero.js";
import { checkWin, getVictoria, resetGame, showWinnerLine } from "./controls/game.js";
import { getCurrentPlayer, switchCurrentPlayer } from "./players/players.js";
import { handleCellHover, handleCellOutHover, showNextPreview } from "./panel/tokenPreview.js";

const tablero = document.querySelector(".tablero");
crearTablero(); //genera el tablero virtual y visual de la aplicacion



const handleCellClick = (event) => {
    if (!getVictoria()) {
        const selectedColumn = event.target.dataset.column; //valor de la columna en la que el usuario ha hecho click
        if (dropToken(selectedColumn)) {
            const currentCol = getCurrentCol(); //posicion de la columna en la que coloca la ficha
            const currentRow = getCurrentRow(); //posicicion de la columna en la que se coloca la ficha
            let player = getCurrentPlayer();  //dato del jugador actual

            const winLine = checkWin(currentRow, currentCol)
            if (winLine) {
                showWinnerLine(winLine)
                console.log("asas")
                //resetGame();

            } else {
                switchCurrentPlayer();
                showNextPreview(currentCol, currentRow)
            }
        }
    }
}
tablero.addEventListener("click", handleCellClick);



const ficha = document.querySelectorAll(".celda");

ficha.forEach(element => {
    element.addEventListener("mouseenter", handleCellHover);
    element.addEventListener("mouseleave", handleCellOutHover)
})
