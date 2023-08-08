"use strict";

export { rows, cols, animacionFichas }
import { crearTableroAnimation, addFichaAleatoria } from "./background_animation.js";
//Elementos del tablero:
let rows = 4;
let cols = 7;

//Genera el tablero
crearTableroAnimation();

//animacion de fondo:
const animacionFichas = setInterval(() => {
    addFichaAleatoria(15)
}, 80);
