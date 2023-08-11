"use strict";
import { getCurrentPlayer, jugador1, jugador2 } from "../players/players.js";
export { updatePlayerPreviewAvatar, updateDataPlayersStore, nextTurnPlayerTxt, updateGlobalUserData} 

/**
 * Actualiza la imagen del avatar en la previsualizacion de avatar (Personalizacion)
 * @param {*} player sobre el que se actualiza la imagen 
 */
const updatePlayerPreviewAvatar = (player) => {
    if(player._color === 'red'){
        document.querySelector("#preview-avatar-p1").src = player._avatar;
    }else if(player._color === 'yellow'){
        document.querySelector("#preview-avatar-p2").src = player._avatar;
    }
}

/**
 * Actualiza en el store local los datos de los jugadores
 * @param {*} player1 Datos que se actualizarán del jugador1
 * @param {*} player2 Datos que se actualizarán del jugador2
 */
const updateDataPlayersStore = (player1, player2) => {
    localStorage.setItem("jugador1", JSON.stringify(player1));
    localStorage.setItem("jugador2", JSON.stringify(player2));
}

/**
 * Actualiza en todos los elementos de la APP el nuevo avatar del usuario
 * @param {*} player sobre el que se realizará la acualización
 */
const updatePlayerAvatar = (player) => {
    //jugador 1
    if (player._color === 'red') {
        const imgPlayer1 = document.querySelectorAll(".avatar-player-1");
        imgPlayer1.forEach(img => {
            img.src = player._avatar;
        });
    } else if (player._color === 'yellow') {
        //jugador 2
        const imgPlayer2 = document.querySelectorAll(".avatar-player-2");
        imgPlayer2.forEach(img => {
            img.src = player._avatar;
        });
    } else {
        console.log("¿Quien ha tocado mi codigo?")
    }

}

/**
 * Actualiza el nombre del usuario en todos los elementos de la APP
 * @param {*} player sobre el que se realizará la actualizacion
 */

const actualizarNombreUsuarioApp = (player) => {
    if (player._color === 'red') {
        //Actualizar datos jugador red
        document.querySelector(".p-player-name-1").textContent = player._nombre;
    } else if (player._color === 'yellow') {
        //Actualizar datos jugador amarillo
        document.querySelector(".p-player-name-2").textContent = player._nombre;
    } else {
        console.log("¿Quien ha tocado mi código?")
    }
}

const updateGlobalUserData = () => {
    updatePlayerAvatar(jugador1);
    updatePlayerAvatar(jugador2);
    actualizarNombreUsuarioApp(jugador1);
    actualizarNombreUsuarioApp(jugador2);
}


/**
 * Actualiza el texto "Siguiente jugador", con el valor del actual turno de jugador
 */

const nextTurnPlayerTxt = () => {
    const txtTurnPlayer = document.querySelector(".player-turn-txt");
    txtTurnPlayer.textContent = getCurrentPlayer()._nombre;
}