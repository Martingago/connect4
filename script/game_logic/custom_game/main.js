"use strict";
import { createCustomBoard, updRangeCols, updRangeRows, updRangeWinLine } from "../view/custom_game/visualElements.js";
import { getMaxValue, verificarValorDeLinea } from "./winnerInput/winnerFunctions.js";
import { getCustomCols, getCustomRows, getCustomWinnerLine, setCustomCols, setCustomRows, setCustomWinnerLine, createCustomGame } from "./dataStore/constructorGame.js";




const rangeCols = document.querySelector("#rangeColumns");
const rangeRows = document.querySelector("#rangeRows");
const rangeWinnerLine = document.querySelector("#rangeWinLine");
const inputPrimerMovimiento = document.querySelector("#first-movement-player");

let cCols = getCustomCols();
let cRows = getCustomRows();
let cWin = getCustomWinnerLine();

//Se crea el tablero por defecto:
createCustomBoard(cCols, cRows, cWin);


//Se añaden los listeners de los inputs
inputPrimerMovimiento.addEventListener("change", () => {
    setStartPlayer(Number(inputPrimerMovimiento.value));
})



rangeCols.addEventListener("input", () => {
    updRangeCols();
    const maxVal = getMaxValue(getCustomCols(), getCustomRows());
    if (rangeWinnerLine.value > maxVal) {
        rangeWinnerLine.value = maxVal;
        updRangeWinLine();
        console.log("para aumentar este valor añade mas filas o columnas")
    }

    let valWinnerLine = verificarValorDeLinea(getCustomCols(), getCustomRows(), getCustomWinnerLine());
    setCustomWinnerLine(valWinnerLine);
    customTableroPreview.innerHTML = "";
    createCustomBoard(getCustomCols(), getCustomRows(), getCustomWinnerLine());

});




rangeRows.addEventListener("input", () => {
    updRangeRows();
    const maxVal = getMaxValue(getCustomCols(), getCustomRows());
    if (rangeWinnerLine.value > maxVal) {
        rangeWinnerLine.value = maxVal;
        updRangeWinLine();
        console.log("para aumentar este valor añade mas filas o columnas")
    }
    let valWinnerLine = verificarValorDeLinea(getCustomCols(), getCustomRows, getCustomWinnerLine());
    setCustomWinnerLine(valWinnerLine);
    customTableroPreview.innerHTML = "";
    createCustomBoard(getCustomCols(), getCustomRows(), getCustomWinnerLine());

});

rangeWinnerLine.addEventListener("change", () => {
    const maxVal = getMaxValue(getCustomCols(), getCustomRows());
    customTableroPreview.innerHTML = "";
    if (rangeWinnerLine.value > maxVal) {
        rangeWinnerLine.value = maxVal;
        console.log("para aumentar este valor añade mas filas o columnas")
    }

    updRangeWinLine();
    let valWinnerLine = verificarValorDeLinea(getCustomCols(), getCustomRows, getCustomWinnerLine());
    setCustomWinnerLine(valWinnerLine);
    customTableroPreview.innerHTML = "";
    createCustomBoard(getCustomCols(), getCustomRows(), getCustomWinnerLine());
});

const btnStartCustomGame = document.querySelector("#start-custom-game");

btnStartCustomGame.addEventListener("click", () => {
    createCustomGame();
});