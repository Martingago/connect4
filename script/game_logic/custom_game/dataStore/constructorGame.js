"use strict";
export { setCustomCols, setCustomRows, setCustomWinnerLine, setStartPlayer, getCustomCols, getCustomRows, getCustomWinnerLine, createCustomGame, getCustomGame }

class customGame {
    constructor(rows, cols, wins, player) {
        this._rows = rows;
        this._cols = cols;
        this._wins = wins;
        this._player = player;
    }
}

let customCols = 7;
let customRows = 6;
let customWinnerLine = 4;
let startPlayer = 1;

const setCustomCols = (value) => {
    customCols = value;
}
const setCustomRows = (value) => {
    customRows = value;
}
const setCustomWinnerLine = (value) => {
    customWinnerLine = value;
}

const setStartPlayer = (value) => {
    startPlayer = value;
}

const getCustomCols = () => {
    return customCols;
}
const getCustomRows = () => {
    return customRows;
}
const getCustomWinnerLine = () => {
    return customWinnerLine;
}

const getStartPlayer = () => {
    return startPlayer;
}


const createCustomGame = () => {
    
    let player = getStartPlayer();
    console.log(player)
    if(player === 3){
        player = createRandomStartPlayer();
    }
    const juegoPersonalizado = new customGame(getCustomRows(), getCustomCols(), getCustomWinnerLine(), player);
    sessionStorage.setItem("custom_game", JSON.stringify(juegoPersonalizado));
}


const createRandomStartPlayer = () => {
    const r = Math.floor(Math.random() * 2) + 1;
    return r;
}

const getCustomGame = () => {
    const cg = sessionStorage.getItem('custom_game');
    console.log(cg)
}