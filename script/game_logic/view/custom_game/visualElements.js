"use strict";
import { setCustomCols, setCustomRows, setCustomWinnerLine, getCustomCols, getCustomRows, getCustomWinnerLine } from "../../custom_game/main.js";
export { updRangeCols, updRangeRows, createCustomBoard, updRangeWinLine }

const currentColsTxt = document.querySelector("#customColumns");
const currentRowsTxt = document.querySelector("#customRows");
const currentWinLineTxt = document.querySelector("#customWinLine");

const rangeCols = document.querySelector("#rangeColumns");
const rangeRows = document.querySelector("#rangeRows");
const rangeWinLine = document.querySelector("#rangeWinLine");

const updRangeCols = () => {
    currentColsTxt.textContent = rangeCols.value;
    setCustomCols(Number(rangeCols.value));
    customTableroPreview.innerHTML = "";
    createCustomBoard(getCustomCols(), getCustomRows(), getCustomWinnerLine());

}
const updRangeRows = () => {
    currentRowsTxt.textContent = rangeRows.value;
    setCustomRows(Number(rangeRows.value))
    customTableroPreview.innerHTML = "";
    createCustomBoard(getCustomCols(), getCustomRows(), getCustomWinnerLine());
}

const updRangeWinLine = () => {
    currentWinLineTxt.textContent = rangeWinLine.value;
    setCustomWinnerLine(Number(rangeWinLine.value));
    customTableroPreview.innerHTML = "";
    createCustomBoard(getCustomCols(), getCustomRows(), getCustomWinnerLine());
}

const customTableroPreview = document.querySelector("#customTableroPreview");
const createCustomBoard = (cols, rows, winnerLine) => {
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const celda = document.createElement("div");
            celda.classList.add("celda-preview");
            customTableroPreview.appendChild(celda);
        }
    }
    if(getCustomCols() > getCustomRows()){
        winnerHorizontal(winnerLine);
    }
    else if(getCustomCols() < getCustomRows()){
        winnerVertical(winnerLine)
    }else{
        winnerHorizontal(winnerLine);
    }
    customTableroPreview.style.gridTemplateColumns = `repeat(${cols}, auto)`;
}

const winnerHorizontal = (winnerLine) => {
    // Agregar la clase "winner" a los últimos 3 elementos
    // Obtener todos los elementos hijos del tablero
    const celdas = customTableroPreview.children;
    const startIndex = Math.max(0, celdas.length - winnerLine);
    for (let i = startIndex; i < celdas.length; i++) {
        celdas[i].classList.add("winner");
    }
}

const winnerVertical = (winnerLine) => {
    const celdas = customTableroPreview.children;
    const col = getCustomCols();
    const row = getCustomRows();
    for(let i = row - winnerLine; i<row; i++){
        const posicion = col * i;
        celdas[posicion].classList.add("winner")
    };

}
