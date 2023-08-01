"use strict";

export {switchCurrentPlayerTest, getCurrentPlayerTest, setCurrentPlayer, nextTurnPlayerTxt, player1, player2, setPlayerAvatar }

class Jugador {
    constructor(nombre, color) {
        this._nombre = nombre;
        this._color = color;
        this._avatar = "img/avatar/user-red-icon.svg";
        this._puntuacion = 0;
    }
}

//Se crean los jugadores por defecto
const player1 = new Jugador("Chirimollo", "red");
const player2 = new Jugador("Jugador 2", "yellow");

const txtPlayer1 = document.querySelector(".p-player-name-1");
const txtPlayer2 = document.querySelector(".p-player-name-2");
txtPlayer1.textContent = player1._nombre;
txtPlayer2.textContent = player2._nombre;

//Se establece el jugador actual (Por defecto Player1);
let currentPlayer = player1;

//intercambia valores del jugador actual:
const switchCurrentPlayerTest = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
}


const setPlayerAvatar = (player) => {
    //jugador 1
    if(player._color === 'red'){
        const imgPlayer1 = document.querySelectorAll(".avatar-player-1");
        imgPlayer1.forEach(img => {
            img.src =player._avatar;
        });

    }else{
        //jugador 2
        const imgPlayer2 = document.querySelectorAll(".avatar-player-2");
        imgPlayer2.forEach(img => {
            img.src = player._avatar;
        });
    }

}



const txtTurnPlayer = document.querySelector(".player-turn-txt");

const nextTurnPlayerTxt = () => {
    txtTurnPlayer.textContent = getCurrentPlayerTest()._nombre;
}

const getCurrentPlayerTest = () => {
    return currentPlayer;
}

const setCurrentPlayer = (newPlayer) => {
    currentPlayer= newPlayer;
}




