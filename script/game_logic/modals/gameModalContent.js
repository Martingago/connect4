"use strict";

export { drawGame, winnerPlayer, showModalGame, hideModalGame }
import { getCurrentPlayer } from "../../users/players/players.js";
import { updatePlayerScore } from "../../users/hooks/updateChanges.js";


const playerTxtWinner = document.querySelector(".player-winner-name");
const imgSrcModal = document.querySelector(".modal-win-img");
const resultadoGame = document.querySelector(".resultado-players");

var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

//ESCONDE LA PESTÑA MODAL
const hideModalGame = () => {
    myModal.hide();
}

//MUESTRA LA PESTAÑA MODAL
const showModalGame = () => {
    myModal.show();
}

//EMPATE DE LA PARTIDA
const drawGame = () => {
    playerTxtWinner.textContent = "EMPATE";
    imgSrcModal.src = '/img/general/draw-no-one-wins-players.png';
    imgSrcModal.alt = "Imagen de una balanza que simboliza que ambos jugadores estan igualados"
    resultadoGame.textContent = "Nadie gana"
}

//GANA UN JUGADOR
const winnerPlayer = () => {
    const currentPlayerData = getCurrentPlayer();
    currentPlayerData._score = ++currentPlayerData._score;
    updatePlayerScore(currentPlayerData._id);
    playerTxtWinner.textContent = currentPlayerData._nombre;
    imgSrcModal.src = '/img/general/trophy-victory-player.png';
    imgSrcModal.alt = "Imagen de un trofeo que simboliza que uno de los jugadores ha ganado la partida";
    resultadoGame.textContent = "Gana la partida";
}