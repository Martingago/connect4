"use strict";

import { arrayDeAvatares } from "./avatarImages.js";
import { seleccionarAvatarP1, seleccionarAvatarP2 } from "../playersDataEdit.js";
export { crearListaAvatares };


//Botones de gestion de avatares del usuario
const btnSelectAvatarP1 = document.querySelector('#selectAvatarBtn');
const btnSelectAvatarP2 = document.querySelector("#selectAvatarBtn2");
const btnConfirmAvatar = document.querySelector("#btnConfirmAvatar");


btnSelectAvatarP1.addEventListener("click", seleccionarAvatarP1);
btnSelectAvatarP2.addEventListener("click", seleccionarAvatarP2);



/**
 * Funcion que crea todos los avatares en el tablero para que el usuario pueda interactuar
 */
const crearListaAvatares = () => {
    const sectionAvatares = document.querySelector("#avatarOptions");

    arrayDeAvatares.forEach(avatarArray => {
        const avatarTitle = document.createElement('h5');
        avatarTitle.classList.add('avatar-title');
        avatarTitle.textContent = avatarArray[0]; //Titulo de la seccion
        sectionAvatares.appendChild(avatarTitle);

        const containerAvatares = document.createElement('div');
        containerAvatares.classList.add('container-avatar-elements');

        for (let i = 1; i < avatarArray.length; i++) {
            const avatar = document.createElement('img'); //Creamos elemento img
            avatar.classList.add('avatar'); //añadido el classlist
            avatar.src = avatarArray[i].url; //Añadimos src del imagen
            avatar.alt = avatarArray[i].alt; //añadido texto alternativo
            avatar.dataset.avatar = avatarArray[i].url; //Dataset del avatar con la URL de la imagen
            containerAvatares.appendChild(avatar);
        }
        sectionAvatares.appendChild(containerAvatares);
    });
};