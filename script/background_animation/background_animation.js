"use strict";
import { Bgrows, Bgcols, animacionFichas } from "./main.js";
export {crearTableroAnimation, addFichaAleatoria }

//Intercambia el color de las fichas de la animacion
let animationColor = 'player1';
const switchAnimationColor = () => {
    animationColor = animationColor === 'player1' ? 'player2' : 'player1';
}


let animationBoard = [];
let animationRow;
let animationCol;


//Crea el tablero sobre el que se realizarán las animaciones
const crearTableroAnimation = () => {
    const tablero = document.querySelector("#background-animation");
    for (let row = 0; row < Bgrows; row++) {
        animationBoard[row] = [];
        for (let col = 0; col < Bgcols; col++) {
            const celda = document.createElement('div');
            celda.classList.add("ficha-background");
            celda.dataset.bgcol = col;
            celda.dataset.bgrow = row;
            tablero.appendChild(celda);
            animationBoard[row][col] = null;
        }
    }
    tablero.style.gridTemplateColumns = `repeat(${Bgcols}, auto)`;
}

//Suelta una ficha en una posicion del tablero
const dropTokenAnimation = (columna) => {

    if (columna != undefined)
        for (let row = Bgrows - 1; row >= 0; row--) {
            if (!animationBoard[row][columna]) { //Si la posicion está vacia devuelve true
                animationBoard[row][columna] = "data";
                let cell = document.querySelector(`[data-bgrow="${row}"][data-bgcol="${columna}"]`);
                animationCol = Number(columna); //valor de la columna en la que se colocó la ficha
                animationRow = Number(row); //valor de la fila en la que se colocó la ficha
                cell.classList.add(animationColor);
                switchAnimationColor();
                cell.classList.add("falling-background");
                // Retraso para quitar la clase 'falling' después de la animación
                setTimeout(() => {
                    cell.classList.remove("falling-background");
                }, 600);
                return true;
            }
        }
}

//genera numeros aleatorios y coloca fichas en su posicion
let contador = 0;
const addFichaAleatoria = (maxValue) => {
    if (contador < maxValue) {
        const numAleatorio = Math.floor(Math.random() * Bgcols);
        dropTokenAnimation(numAleatorio);
        contador++;
    } else {
        clearInterval(animacionFichas);
    }
}



