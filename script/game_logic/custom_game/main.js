"use strict";
export{ setCustomCols, setCustomRows,setCustomWinnerLine, getCustomCols, getCustomRows, getCustomWinnerLine}
import { createCustomBoard, updRangeCols, updRangeRows, updRangeWinLine} from "../view/custom_game/visualElements.js";

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


const verificarValorDeLinea = (filas, columnas, winner) => {
    const maximo = Math.max(filas, columnas);
    if(maximo < winner){
        winner = maximo;
        setCustomWinnerLine(winner)
        rangeWinnerLine.value = winner;
        updRangeWinLine();
    }
  }



const rangeCols = document.querySelector("#rangeColumns");
const rangeRows = document.querySelector("#rangeRows");
const rangeWinnerLine = document.querySelector("#rangeWinLine");

createCustomBoard(customCols, customRows, customWinnerLine);
rangeCols.addEventListener("input", () => {
    updRangeCols();
    verificarValorDeLinea(customCols, customCols, customWinnerLine);
} );
rangeRows.addEventListener("input", ()=> {
    updRangeRows();
    verificarValorDeLinea(customCols, customCols, customWinnerLine);
} );
rangeWinnerLine.addEventListener("input", () => {
    updRangeWinLine();  
} );