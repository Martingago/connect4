"use strict";
import { createBoard, getCols, getRows } from "../board/board.js";
import { setNextTurnPlayerTxt } from "../view/modifyUserTxt.js";
import { activateClickOnTablero } from "./activateBoardFunctions.js";
export {generateTablero}

let tableroReady = false;
const sectionTablero = document.querySelector(".section-connect4-game");
const loadingIcon = document.querySelector(".loading");


const generateTablero = async () => {
    // Generar el tablero en el siguiente ciclo de animación para darle tiempo de mostrar el loading
    await new Promise((resolve) => {
        requestAnimationFrame(() => {
            tableroReady = createBoard(getRows(), getCols()); //genera el tablero virtual y visual de la aplicacion
            activateClickOnTablero();
            resolve();
        });
    });
    await new Promise((resolve) => setTimeout(resolve, 200)); //Delay de 200 ms para eliminar el loading y cargar contenido
    // Mostrar que el contenido está cargado después de generar el tablero
    if (generateTablero) {
        setNextTurnPlayerTxt();
        sectionTablero.style.display = "flex";
        loadingIcon.style.display = "none";
    }
};