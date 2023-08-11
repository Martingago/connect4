"use strict";

import { jugador1, jugador2 } from "../players/players.js";
export {fillFormWithUserDetails}

const previewImageP1 = document.querySelector("#preview-avatar-p1");
const previewImageP2 = document.querySelector("#preview-avatar-p2");

const placeholderNameP1 = document.querySelector("#form-player1-username");
const placeholderNameP2 = document.querySelector("#form-player2-username");

const fillFormWithUserDetails = () => {
    previewImageP1.src = jugador1._avatar;
    previewImageP2.src = jugador2._avatar;
    placeholderNameP1.placeholder = jugador1._nombre;
    placeholderNameP2.placeholder = jugador2._nombre;
}