"use strict";

export { Bgrows, Bgcols, animacionFichas }
import { crearTableroAnimation, addFichaAleatoria } from "./background_animation.js";
//Elementos del tablero:
let Bgrows = 4;
let Bgcols = 7;

//Genera el tablero
crearTableroAnimation();

//animacion de fondo:
const animacionFichas = setInterval(() => {
    addFichaAleatoria(15)
}, 80);
