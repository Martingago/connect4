 "use strict";
import { jugador1, jugador2 } from "../../../users/initUsers.js";
import { setCurrentPlayer } from "../../../users/players/players.js";
 import { setCols,setRows, setFichasVictoria, getCols, getRows, getFichasVictoria } from "../../board/board.js";
 export {createCustomGame, setBoardData, setStartPlayer, getStartPlayer}

let player = 1;

class customGame {
    constructor(rows, cols, wins, player) {
        this._rows = rows;
        this._cols = cols;
        this._wins = wins;
        this._player = player;
    }
}



const setStartPlayer = (value) => {
    player = value;
}

 const getStartPlayer = () => {
    return player;
 }


const createCustomGame = () => {
    const juegoPersonalizado = new customGame(getRows(), getCols(), getFichasVictoria(), getStartPlayer());
    sessionStorage.setItem("custom_game", JSON.stringify(juegoPersonalizado));
}

const setBoardData = () => {
    const boardData = JSON.parse(sessionStorage.getItem("custom_game"));
    if(boardData){
        setCols(boardData._cols);
        setRows(boardData._rows);
        setFichasVictoria(boardData._wins);
        player = boardData._player;
        setJugadorInicial();
    }else{
        setCols(7);
        setRows(6);
        setFichasVictoria(4);
        setCurrentPlayer(jugador1);
        console.log("has entrado por donde has querido...")
    }

}

const createRandomStartPlayer = () => {
    const r = Math.floor(Math.random() * 2) + 1;
    return r;
}

const setJugadorInicial = () => {
    while (player !== 1 && player !== 2) {
        player = createRandomStartPlayer();
    }
    switch(player){
        case 1:
            console.log("jugador inicial: 1")
            setCurrentPlayer(jugador1);
            break;
        case 2:
            console.log("jugador inicial: 2")
            setCurrentPlayer(jugador2);
            break;
    }
}