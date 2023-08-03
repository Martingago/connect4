"use strict";

import { player1, player2, setPlayerAvatar } from "./players.js";
import { arrayDeAvatares } from "./avatar/avatarImages.js";
export { crearListaAvatares };



//Botones de gestion de avatares del usuario
const btnSelectAvatarP1 = document.querySelector('#selectAvatarBtn');
const btnSelectAvatarP2 = document.querySelector("#selectAvatarBtn2");
const btnConfirmAvatar = document.querySelector("#btnConfirmAvatar");

// Función para manejar el evento de selección de avatar
const handleAvatarSelection = (player, avatarElement) => {
    player._avatar = avatarElement.dataset.avatar;
    setPlayerAvatar(player);
};

// Definir funciones nombradas para los eventos de selección de avatar
const selectAvatarP1 = (event) => handleAvatarSelection(player1, event.target);
const selectAvatarP2 = (event) => handleAvatarSelection(player2, event.target);

// Agregar eventos de click a los botones "Editar" para seleccionar avatares
btnSelectAvatarP1.addEventListener("click", () => {
    editandoP1 = !editandoP1;
    editButtonP1();
    if (editandoP2) {
        editandoP2 = false;
        editButtonP2();
    }

    const avatares = document.querySelectorAll(".avatar");
    avatares.forEach(avatar => {
        avatar.removeEventListener("click", selectAvatarP2); // Eliminar listener de P2
        avatar.addEventListener("click", selectAvatarP1);
    });
});

btnSelectAvatarP2.addEventListener("click", () => {
    editandoP2 = !editandoP2;
    editButtonP2();
    if (editandoP1) {
        editandoP1 = false;
        editButtonP1();
    }
    const avatares = document.querySelectorAll(".avatar");
    avatares.forEach(avatar => {
        avatar.removeEventListener("click", selectAvatarP1); // Eliminar listener de P1
        avatar.addEventListener("click", selectAvatarP2);    // Agregar listener de P2
    });
});

let editandoP1 = false;
let editandoP2 = false;

const editButtonP1 = () => {
    if (editandoP1) {
        btnSelectAvatarP1.textContent = "Editando";
    } else {

        btnSelectAvatarP1.textContent = "Editar";
    }
}

const editButtonP2 = () => {
    if (editandoP2) {
        btnSelectAvatarP2.textContent = "Editando";
    } else {
        btnSelectAvatarP2.textContent = "Editar"
    }
}

/**
 * ESTA FUNCION TENGO QUE MOVERLA PARA EMPLEAR EL MISMO BOTON CON OTRAS FUNCIONES!
 */
btnConfirmAvatar.addEventListener("click", () => {
    const avatares = document.querySelectorAll(".avatar");
    editandoP1 = false;
    editandoP2 = false;
    editButtonP1();
    editButtonP2();
    avatares.forEach(avatar => {
        avatar.removeEventListener("click", selectAvatarP1);
        avatar.removeEventListener("click", selectAvatarP2);
    });
})



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
