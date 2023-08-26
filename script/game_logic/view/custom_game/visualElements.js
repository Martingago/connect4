"use strict";
import { getCols, getRows, getFichasVictoria, setCols, setRows, setFichasVictoria } from "../../board/board.js";

export { updRangeCols, updRangeRows, createCustomBoard, updRangeWinLine, updateTitleWin }

const currentColsTxt = document.querySelector("#customColumns");
const currentRowsTxt = document.querySelector("#customRows");
const currentWinLineTxt = document.querySelector("#customWinLine");

const rangeCols = document.querySelector("#rangeColumns");
const rangeRows = document.querySelector("#rangeRows");
const rangeWinLine = document.querySelector("#rangeWinLine");

const customTableroPreview = document.querySelector("#customTableroPreview");


const updRangeCols = () => {
    currentColsTxt.textContent = rangeCols.value;
    setCols(Number(rangeCols.value));  
}
const updRangeRows = () => {
    currentRowsTxt.textContent = rangeRows.value;
    setRows(Number(rangeRows.value))
}

const updRangeWinLine = () => {
    currentWinLineTxt.textContent = rangeWinLine.value;
    setFichasVictoria(Number(rangeWinLine.value));
}

const updateTitleWin = () => {
    const title = document.querySelector("#logo-number");
    title.textContent = getFichasVictoria();
}


/**
 * Crea un tablero cuya funcion es ser la previsualización del tablero de la partida
 * @param {*} cols Numero de columnas del tablero
 * @param {*} rows numero de filas del tablero
 * @param {*} winnerLine Numero de elementos que hacen la victoria
 */
const createCustomBoard = (cols, rows, winnerLine) => {
    customTableroPreview.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const celda = document.createElement("div");
            celda.classList.add("celda-preview");
            customTableroPreview.appendChild(celda);
        }
    }
    //Alterna linea horizontal/vertical de victoria en base al valor mayor de filas/columnas
    if (getCols() > getRows()) {
        winnerHorizontal(winnerLine);
    }
    else if (getCols() < getRows()) {
        winnerVertical(winnerLine)
    } else {
        winnerHorizontal(winnerLine);
    }
    customTableroPreview.style.gridTemplateColumns = `repeat(${cols}, auto)`;
}



/**
 * Crea una linea horizontal que simula una victoria de jugador
 * @param {*} winnerLine numero de elementos horizontales que se van a colocar
 */
const winnerHorizontal = (winnerLine) => {
    const celdas = customTableroPreview.children;
    const startIndex = Math.max(0, celdas.length - winnerLine);
    for (let i = startIndex; i < celdas.length; i++) {
        celdas[i].classList.add("winner");
    }
}

/**
 * Crea un linea vertical que simula una victoria de jugador
 * @param {*} winnerLine recibe como parametro el numero de elementos verticales que se deben de colocar
 */
const winnerVertical = (winnerLine) => {
    const celdas = customTableroPreview.children;
    const col = getCols();
    const row = getRows();
    for (let i = row - winnerLine; i < row; i++) {
        const posicion = col * i;
        celdas[posicion].classList.add("winner")
    };

}
