"use strict";
import { handleCellHover, handleCellOutHover } from "../board/tokenPreview.js";
export {activateClickOnTablero}

const activateClickOnTablero = () => {
    const ficha = document.querySelectorAll(".celda");
    ficha.forEach(element => {
        element.addEventListener("mouseenter", handleCellHover);
        element.addEventListener("mouseleave", handleCellOutHover)
    })
}
