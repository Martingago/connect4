"use strict";

import { jugador1, jugador2 } from "../../users/initUsers.js";
export {updatePlayersTableData, updatePlayerTxtScore}

const avatarP1 = document.querySelector("#avatarP1");
const avatarP2 = document.querySelector("#avatarP2");
const usernameP1 = document.querySelector("#usernameP1");
const usernameP2 = document.querySelector("#usernameP2");
const scoreBoardP1 = document.querySelector("#scoreBoardP1");
const scoreBoardP2 = document.querySelector("#scoreBoardP2");
/**
 * Actualiza la informacion de los jugadores en el tablero
 */
const updatePlayersTableData = () => {
    //Imagenes de avatar
    avatarP1.src = jugador1._avatar;
    avatarP2.src = jugador2._avatar;
    //nombres
    usernameP1.textContent = jugador1._nombre;
    usernameP2.textContent = jugador2._nombre;
    //score
    scoreBoardP1.textContent = jugador1._score;
    scoreBoardP2.textContent = jugador2._score;
}

const updatePlayerTxtScore = () => {
    scoreBoardP1.textContent = jugador1._score;
    scoreBoardP2.textContent = jugador2._score;
}


