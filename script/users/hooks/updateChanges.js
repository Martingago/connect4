"use strict";
import { updatePlayerTxtScore } from "../../game_logic/view/updatePlayerData.js";
import { jugador1, jugador2 } from "../initUsers.js";
import { getCurrentPlayer} from "../players/players.js";
export { updatePlayerPreviewAvatar, updateDataPlayersStore, nextTurnPlayerTxt, updateGlobalUserData, updatePlayerScore, resetPlayersScore} 

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
 * Actualiza la informacion de puntuacion de jugador en el score
 * @param {*} playerID id del jugador, se utiliza para obtener la clave del store
 */
const updatePlayerScore = (playerID) => {
    const jugador = JSON.parse(localStorage.getItem("jugador"+playerID));
    jugador._score = ++jugador._score;
    localStorage.setItem("jugador"+jugador._id, JSON.stringify(jugador));
    updatePlayerTxtScore();
}


const resetPlayersScore = () => {
    jugador1._score = 0;
    jugador2._score = 0;
    updateDataPlayersStore(jugador1, jugador2);
    updatePlayerTxtScore();
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

/**
 * Actualiza la informacion en pantalla de los usuarios (nombres, avatares, etc) con los datos actuales del usuario
 */
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