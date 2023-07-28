"use strict";

export { drawGame, winnerPlayer, showModalGame }
import { getCurrentPlayer } from "../players/players.js";
import { resetGame } from "../controls/game.js";

const playerTxtWinner = document.querySelector(".player-winner-name");
const imgSrcModal = document.querySelector(".modal-win-img");
const resultadoGame = document.querySelector(".resultado-players");
const btnRestartModal = document.querySelector(".btn-restart-modal");

btnRestartModal.addEventListener("click", () => {
    resetGame();
    hideModalGame();
});

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
    imgSrcModal.src = 'img/draw-no-one-wins-players.png';
    imgSrcModal.alt = "Imagen de una balanza que simboliza que ambos jugadores estan igualados"
    resultadoGame.textContent = "Nadie gana"
}

//GANA UN JUGADOR
const winnerPlayer = () => {
    playerTxtWinner.textContent = `${getCurrentPlayer()}`;
    imgSrcModal.src = 'img/trophy-victory-player.png';
    imgSrcModal.alt = "Imagen de un trofeo que simboliza que uno de los jugadores ha ganado la partida";
    resultadoGame.textContent = "Gana la partida";
}