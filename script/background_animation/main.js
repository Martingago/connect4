"use strict";

export { Bgrows, Bgcols, animacionFichas }
import { crearTableroAnimation, addFichaAleatoria } from "./background_animation.js";
//Elementos del tablero:
let Bgrows = 5;
let Bgcols = 8;

//Genera el tablero
crearTableroAnimation();

//animacion de fondo:
const animacionFichas = setInterval(() => {
    addFichaAleatoria(20)
}, 80);
