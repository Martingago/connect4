"use strict";

import { inicializarDatosUsuarios, jugador1 } from "./users/initUsers.js";
import {setCurrentPlayer } from "./users/players/players.js";
import { generateTablero } from "./game_logic/game_management/crearteBoard.js";
import { handleCellClick } from "./game_logic/game_management/gameManager.js";
import { resetGame } from "./game_logic/game_management/restartGame.js";
import { hideModalGame } from "./game_logic/modals/gameModalContent.js";
import { updatePlayersTableData } from "./game_logic/view/updatePlayerData.js";
import { resetPlayersScore } from "./users/hooks/updateChanges.js";
import { setNextTurnPlayerTxt } from "./game_logic/view/modifyUserTxt.js";

inicializarDatosUsuarios();
setCurrentPlayer(jugador1);
generateTablero();
updatePlayersTableData();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const tablero = document.querySelector(".tablero");
tablero.addEventListener("click", handleCellClick);


//Boton modal para Reiniciar la partida
const btnRestartModal = document.querySelector(".btn-restart-modal");
btnRestartModal.addEventListener("click", () => {
    resetGame();
    setCurrentPlayer(jugador1);
    setNextTurnPlayerTxt();
    hideModalGame();
});

//Reinicia la partida con el boton:
const btnReiniciarPartida = document.querySelector(".btn-restart-game");
btnReiniciarPartida.addEventListener("click", () => {
    resetGame();
    setCurrentPlayer(jugador1);
    setNextTurnPlayerTxt();
})

const reiniciarScore = document.querySelector("#reset-score");

reiniciarScore.addEventListener("click", resetPlayersScore)