"use strict";

import { player1, player2, setPlayerAvatar } from "./players.js";
export { crearListaAvatares };

const avatarImagesAnimals = [
    "img/avatar/bear-user-avatar.png",
    'img/avatar/chicken-user-avatar.png',
    'img/avatar/dog-user-avatar.png',
    'img/avatar/giraffe-user-avatar.png',
    'img/avatar/meerkat-user-avatar.png',
    'img/avatar/panda-user-avatar.png',
    'img/avatar/puffer-fish-user-avatar.png',
    'img/avatar/rabbit-user-avatar.png',
    'img/avatar/wolf-user-avatar.png'
]

const avatarImagesHumans = [
    'img/avatar/astronaut.png'
]

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

// Agregar eventos de clic a los botones "Editar" para seleccionar avatares
btnSelectAvatarP1.addEventListener("click", () => {
    console.log("editando P1");
    const avatares = document.querySelectorAll(".avatar");
    avatares.forEach(avatar => {
        avatar.removeEventListener("click", selectAvatarP2); // Eliminar listener de P2
        avatar.addEventListener("click", selectAvatarP1);    // Agregar listener de P1
    });
});

btnSelectAvatarP2.addEventListener("click", () => {
    console.log("editando P2");
    const avatares = document.querySelectorAll(".avatar");
    avatares.forEach(avatar => {
        avatar.removeEventListener("click", selectAvatarP1); // Eliminar listener de P1
        avatar.addEventListener("click", selectAvatarP2);    // Agregar listener de P2
    });
});


btnConfirmAvatar.addEventListener("click", () => {
    const avatares = document.querySelectorAll(".avatar");
    avatares.forEach(avatar => {
        avatar.removeEventListener("click", selectAvatarP1);
        avatar.removeEventListener("click", selectAvatarP2);
    });
})



/**
 * Funcion que crea todos los avatares en el tablero para que el usuario pueda interactuar
 */
const crearListaAvatares = () => {
    const containerAvatares = document.querySelector(".container-avatar-elements");
    for (let i = 0; i < avatarImagesAnimals.length; i++) {
        const avatar = document.createElement('img'); //Creamos elemento img
        avatar.classList.add('avatar'); //añadido el classlist
        avatar.src = avatarImagesAnimals[i]; //Añadimos src del imagen
        avatar.alt = "Texto alternativo";
        avatar.dataset.avatar = avatarImagesAnimals[i]; //dataset avatar
        containerAvatares.appendChild(avatar);
    }
}