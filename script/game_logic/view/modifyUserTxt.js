"use strict";
import { getCurrentPlayer } from "../../users/players/players.js";
export{setNextTurnPlayerTxt}

//Modifica el texto del siguiente turno de jugador
const setNextTurnPlayerTxt = () => {
    const playerTurnTxt = document.querySelector(".player-turn-txt");
    let currentPlayerData = getCurrentPlayer(); //objeto del jugador inicial
    playerTurnTxt.textContent = currentPlayerData._nombre; //Establece el nombre del turno de jugador
}