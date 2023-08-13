"use strict";

import { getVictoria, showWinnerLine, checkWin } from "../outcome/game.js";
import { dropToken, checkTableroEmpty, getCurrentCol, getCurrentRow  } from "../board/board.js";
import { winnerPlayer, drawGame, showModalGame } from "../modals/gameModalContent.js";
import { switchCurrentPlayer } from "../../users/players/players.js";
import { showNextPreview } from "../board/tokenPreview.js";
import { nextTurnPlayerTxt } from "../../users/hooks/updateChanges.js";

export { handleCellClick }

const handleCellClick = (event) => {
    if (!getVictoria()) { 
        const selectedColumn = event.target.dataset.column; //valor de la columna en la que el usuario ha hecho click
        if (dropToken(selectedColumn)) {
            const currentCol = getCurrentCol(); //posicion de la columna en la que coloca la ficha
            const currentRow = getCurrentRow(); //posicicion de la columna en la que se coloca la ficha
            const winLine = checkWin(currentRow, currentCol);
            //Un jugador gana la partida
            if (winLine) {
                showWinnerLine(winLine);
                winnerPlayer();
                showModalGame();
            } else if (!checkTableroEmpty()) {
                drawGame();
                showModalGame();
            }
            //Continua la partida
            else {
                switchCurrentPlayer();
                showNextPreview(currentCol, currentRow);
                nextTurnPlayerTxt();

            }
        }
    }
}