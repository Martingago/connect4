"use strict";

import { crearTablero, dropToken, checkTableroEmpty, getCurrentCol, getCurrentRow } from "./panel/tablero.js";
import { checkWin, getVictoria, resetGame, showWinnerLine } from "./controls/game.js";
import { getCurrentPlayerTest, switchCurrentPlayerTest, nextTurnPlayerTxt} from "./players/players.js";
import { handleCellHover, handleCellOutHover, showNextPreview } from "./panel/tokenPreview.js";
import { crearListaAvatares } from "./players/avatarImages.js";
import { drawGame, showModalGame, winnerPlayer } from "./panel/gameModalContent.js";

const tablero = document.querySelector(".tablero");
crearTablero(); //genera el tablero virtual y visual de la aplicacion



const handleCellClick = (event) => {
    if (!getVictoria()) {
        const selectedColumn = event.target.dataset.column; //valor de la columna en la que el usuario ha hecho click
        if (dropToken(selectedColumn)) {
            const currentCol = getCurrentCol(); //posicion de la columna en la que coloca la ficha
            const currentRow = getCurrentRow(); //posicicion de la columna en la que se coloca la ficha
           
            const winLine = checkWin(currentRow, currentCol)
            //Un jugador gana la partida
            if (winLine) {
                showWinnerLine(winLine);
                winnerPlayer();
                showModalGame();
                

            } else if(!checkTableroEmpty()){
                drawGame();
                showModalGame();
            }
            //Continua la partida
            else {
                switchCurrentPlayerTest(); 
                showNextPreview(currentCol, currentRow);
                nextTurnPlayerTxt();

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

//Reinicia la partida con el boton:

const btnReiniciarPartida = document.querySelector(".btn-restart-game");
btnReiniciarPartida.addEventListener("click", () => {
    resetGame();
})

//Lista de avatares:

crearListaAvatares();
