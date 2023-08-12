"use strict";
import { crearTablero, dropToken, checkTableroEmpty, getCurrentCol, getCurrentRow } from "./panel/tablero.js";
import { checkWin, getVictoria, resetGame, showWinnerLine } from "./controls/game.js";
import { switchCurrentPlayer, initPlayers } from "./users/players/players.js";
import { handleCellHover, handleCellOutHover, showNextPreview } from "./panel/tokenPreview.js";
import { drawGame, showModalGame, winnerPlayer } from "./panel/gameModalContent.js";
import { nextTurnPlayerTxt, updateGlobalUserData } from "./users/hooks/updateChanges.js";


const tablero = document.querySelector(".tablero");
const sectionTablero = document.querySelector(".section-connect4-game");
const loadingIcon = document.querySelector(".loading")

initPlayers();



let tableroReady = false;
const generateTablero = async () => {
    // Generar el tablero en el siguiente ciclo de animación para darle tiempo de mostrar el loading
    await new Promise((resolve) => {
        requestAnimationFrame(() => {
            tableroReady = crearTablero(); //genera el tablero virtual y visual de la aplicacion
            activateClickOnTablero();
            resolve();
        });
    });
    await new Promise((resolve) => setTimeout(resolve, 200)); //Delay de 200 ms para eliminar el loading y cargar contenido
    // Mostrar que el contenido está cargado después de generar el tablero
    if (generateTablero) {
        sectionTablero.style.display = "flex";
        loadingIcon.style.display = "none";
    }
};

generateTablero();
updateGlobalUserData();

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
tablero.addEventListener("click", handleCellClick);


const activateClickOnTablero = () => {
    const ficha = document.querySelectorAll(".celda");
    ficha.forEach(element => {
        element.addEventListener("mouseenter", handleCellHover);
        element.addEventListener("mouseleave", handleCellOutHover)
    })
}

//Reinicia la partida con el boton:
const btnReiniciarPartida = document.querySelector(".btn-restart-game");
btnReiniciarPartida.addEventListener("click", () => {
    resetGame();
})

