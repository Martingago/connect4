"use strict";
import { stopAvatarUserSelection } from "./playersDataEdit.js";
export { switchCurrentPlayerTest, getCurrentPlayer, setCurrentPlayer, nextTurnPlayerTxt, player1, player2, updatePlayerAvatar }

/**
 * Constructor del objeto jugador
 */
class Jugador {
    constructor(nombre, color) {
        this._nombre = nombre;
        this._color = color;
        this._avatar = "img/general/img-placeholder-web.png";
        this._puntuacion = 0;
    }
}

//Se crean los jugadores por defecto
const player1 = new Jugador("Jugador 1", "red");
const player2 = new Jugador("Jugador 2", "yellow");

const txtPlayer1 = document.querySelector(".p-player-name-1");
const txtPlayer2 = document.querySelector(".p-player-name-2");
txtPlayer1.textContent = player1._nombre;
txtPlayer2.textContent = player2._nombre;

//Se establece el jugador actual (Por defecto Player1);
let currentPlayer = player1;

const getCurrentPlayer = () => {
    return currentPlayer;
}

const setCurrentPlayer = (newPlayer) => {
    currentPlayer = newPlayer;
}

//intercambia valores del jugador actual:
const switchCurrentPlayerTest = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
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
        console.log("¿Quien ha tocado mi coódigo?")
    }
}


/**
 * Actualiza el texto "Siguiente jugador", con el valor del actual turno de jugador
 */

const nextTurnPlayerTxt = () => {
    const txtTurnPlayer = document.querySelector(".player-turn-txt");
    txtTurnPlayer.textContent = getCurrentPlayer()._nombre;
}


/**
 * Boton que al pulsarlo actualiza los datos de los usuarios.
 * => Actualiza los datos del objeto "jugador"
 * => Actualiza la informacion dentro de la aplicacion
 */
const btnConfirmUserChanges = document.querySelector("#btnConfirmAvatar");

btnConfirmUserChanges.addEventListener("click", () => {
    let nombreInputP1 = document.querySelector("#form-player1-username").value;
    let nombreInputP2 = document.querySelector("#form-player2-username").value;
    // Validar los valores de los campos de entrada antes de actualizar los nombres
    if (nombreInputP1 !== null && nombreInputP1.trim() !== "") {
        player1._nombre = nombreInputP1.trim();
        actualizarNombreUsuarioApp(player1);
    }

    if (nombreInputP2 !== null && nombreInputP2.trim() !== "") {
        player2._nombre = nombreInputP2.trim();
        actualizarNombreUsuarioApp(player2);
    }
    
    //Actuliza los botones de seleccion de avatar
    stopAvatarUserSelection();
    //Actualiza tambien el nombre del turno del jugador:
    nextTurnPlayerTxt();
})



