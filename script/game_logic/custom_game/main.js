"use strict";
import { createCustomBoard, updRangeCols, updRangeRows, updRangeWinLine } from "../view/custom_game/visualElements.js";
import { getMaxValue, verificarValorDeLinea } from "./winnerInput/winnerFunctions.js";
import { getCols, getRows, getFichasVictoria, setFichasVictoria } from "../board/board.js";
import { createCustomGame, setStartPlayer } from "./dataStore/constructorGame.js";

const rangeCols = document.querySelector("#rangeColumns");
const rangeRows = document.querySelector("#rangeRows");
const rangeWinnerLine = document.querySelector("#rangeWinLine");
const inputPrimerMovimiento = document.querySelector("#first-movement-player");

let cCols = getCols();
let cRows = getRows();
let cWin = getFichasVictoria();

//Se crea el preview-tablero por defecto:
createCustomBoard(cCols, cRows, cWin);


//Se añaden los listeners de los inputs
inputPrimerMovimiento.addEventListener("change", () => {
    setStartPlayer(inputPrimerMovimiento.value);
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
});


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