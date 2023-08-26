"use strict";
import { createCustomBoard, updRangeCols, updRangeRows, updRangeWinLine, updateTitleWin } from "../view/custom_game/visualElements.js";
import { getMaxValue, verificarValorDeLinea } from "./winnerInput/winnerFunctions.js";
import { getCols, getRows, getFichasVictoria, setFichasVictoria } from "../board/board.js";
import { createCustomGame, setJugadorInicial, setStartPlayer } from "./dataStore/constructorGame.js";
import { inicializarDatosUsuarios } from "../../users/initUsers.js";
import { generateTablero } from "../game_management/crearteBoard.js";
import { updatePlayersTableData } from "../view/updatePlayerData.js";
import { handleCellClick } from "../game_management/gameManager.js";
import { resetPlayersScore } from "../../users/hooks/updateChanges.js";
import { resetGame } from "../game_management/restartGame.js";
import { hideModalGame } from "../modals/gameModalContent.js";
import { setNextTurnPlayerTxt } from "../view/modifyUserTxt.js";

const rangeCols = document.querySelector("#rangeColumns");
const rangeRows = document.querySelector("#rangeRows");
const rangeWinnerLine = document.querySelector("#rangeWinLine");
const inputPrimerMovimiento = document.querySelector("#first-movement-player");

const myModal = new bootstrap.Modal('#customGame');
myModal.show();
const cancelBtn = document.querySelector("#cancel-custom-game");
cancelBtn.disabled = true;

let cCols = getCols();
let cRows = getRows();
let cWin = getFichasVictoria();

//Se crea el preview-tablero por defecto:
createCustomBoard(cCols, cRows, cWin);


//Se añaden los listeners de los inputs
inputPrimerMovimiento.addEventListener("change", () => {
    setStartPlayer(Number(inputPrimerMovimiento.value));
})

//input del numero de columnas que tendrá el tablero
rangeCols.addEventListener("input", () => {
    updRangeCols();
    limitOnWinnerLine();
    adapterWinnerLine();
});

//input del numero de filas que tendrá el tablero
rangeRows.addEventListener("input", () => {
    updRangeRows();
    limitOnWinnerLine();
    adapterWinnerLine();

});

//Input del numero que elementos que conformarán la victoria
rangeWinnerLine.addEventListener("change", () => {
    updRangeWinLine();
    limitOnWinnerLine();
    adapterWinnerLine();

});


/**
 * Empieza la partida personalizada
 */
const btnStartCustomGame = document.querySelector("#start-custom-game");
btnStartCustomGame.addEventListener("click", () => {
    createCustomGame();
    inicializarDatosUsuarios();
    setJugadorInicial();
    generateTablero();
    updatePlayersTableData()
    updateTitleWin();
    cancelBtn.disabled = false;

});

    //Permite hacer click en el tablero una vez ha sido generado
    const tablero = document.querySelector(".tablero");
    tablero.addEventListener("click", handleCellClick);

    //Boton modal para Reiniciar la partida
    const btnRestartModal = document.querySelector(".btn-restart-modal");
    btnRestartModal.addEventListener("click", () => {
        resetGame();
        setJugadorInicial()
        setNextTurnPlayerTxt();
        hideModalGame();
    });

    //Reinicia la partida con el boton:
    const btnReiniciarPartida = document.querySelector(".btn-restart-game");
    btnReiniciarPartida.addEventListener("click", () => {
        resetGame();
        setJugadorInicial();
        setNextTurnPlayerTxt();
    })

    const reiniciarScore = document.querySelector("#reset-score");

    reiniciarScore.addEventListener("click", resetPlayersScore)


/**
 * Obtiene los valores maximos de filas y columnas, si este valor es menor que el de la linea de victoria, el valor de
 * la linea de victoria se cambiará por el valor máximo de filas y columnas
 */
const adapterWinnerLine = () => {
    let valWinnerLine = verificarValorDeLinea(getCols(), getRows(), getFichasVictoria());
    setFichasVictoria(valWinnerLine);
    customTableroPreview.innerHTML = "";
    createCustomBoard(getCols(), getRows(), getFichasVictoria());
}

/**
 * Limita el valor de "winnerLine", y modifica su valor en caso de el valor maximo de fichas y columnas sea menor al de "winnerLine"
 */
const limitOnWinnerLine = () => {
    const maxVal = getMaxValue(getCols(), getRows());
    if (rangeWinnerLine.value > maxVal) {
        rangeWinnerLine.value = maxVal;
        updRangeWinLine();
        console.log("para aumentar este valor añade mas filas o columnas")
    }
}


