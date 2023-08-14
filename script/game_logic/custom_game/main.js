"use strict";
export { setCustomCols, setCustomRows, setCustomWinnerLine, getCustomCols, getCustomRows, getCustomWinnerLine }
import { createCustomBoard, updRangeCols, updRangeRows, updRangeWinLine } from "../view/custom_game/visualElements.js";
import { getMaxValue, verificarValorDeLinea } from "./winnerInput/winnerFunctions.js";

let customCols = 7;
let customRows = 6;
let customWinnerLine = 4;

const setCustomCols = (value) => {
    customCols = value;
}
const setCustomRows = (value) => {
    customRows = value;
}
const setCustomWinnerLine = (value) => {
    customWinnerLine = value;
}

const getCustomCols = () => {
    return customCols;
}
const getCustomRows = () => {
    return customRows;
}
const getCustomWinnerLine = () => {
    return customWinnerLine;
}




const rangeCols = document.querySelector("#rangeColumns");
const rangeRows = document.querySelector("#rangeRows");
const rangeWinnerLine = document.querySelector("#rangeWinLine");
//Se crea el tablero por defecto:
createCustomBoard(customCols, customRows, customWinnerLine);

//Se añaden los listeners de los inputs
rangeCols.addEventListener("input", () => {
    updRangeCols();
    const maxVal = getMaxValue(customCols, customRows);
    if (rangeWinnerLine.value > maxVal) { 
        rangeWinnerLine.value = maxVal;
        updRangeWinLine();
        console.log("para aumentar este valor añade mas filas o columnas")
    }

    customWinnerLine = verificarValorDeLinea(customCols, customRows, customWinnerLine);
    customTableroPreview.innerHTML = "";
    createCustomBoard(getCustomCols(), getCustomRows(), getCustomWinnerLine());

});
rangeRows.addEventListener("input", () => {


    updRangeRows();
    const maxVal = getMaxValue(customCols, customRows);
    if (rangeWinnerLine.value > maxVal) { 
        rangeWinnerLine.value = maxVal;
        updRangeWinLine();
        console.log("para aumentar este valor añade mas filas o columnas")
    }
    customWinnerLine = verificarValorDeLinea(customCols, customRows, customWinnerLine);
    createCustomBoard(getCustomCols(), getCustomRows(), getCustomWinnerLine());

});
rangeWinnerLine.addEventListener("change", () => {
    const maxVal = getMaxValue(customCols, customRows);
    if (rangeWinnerLine.value > maxVal) { 
        rangeWinnerLine.value = maxVal;
        console.log("para aumentar este valor añade mas filas o columnas")
    }

    updRangeWinLine();
    customWinnerLine = verificarValorDeLinea(customCols, customRows, customWinnerLine);
    createCustomBoard(getCustomCols(), getCustomRows(), getCustomWinnerLine());
});