"use strict";

import { player1, player2, setPlayerAvatar } from "./players.js";
export { crearListaAvatares };

const avatarImagesAnimals = [
    'Animales',
    'img/avatar/animals/bear-user-avatar.png',
    'img/avatar/animals/cat-user-avatar.png',
    'img/avatar/animals/chicken-user-avatar.png',
    'img/avatar/animals/dog-user-avatar.png',
    'img/avatar/animals/giraffe-user-avatar.png',
    'img/avatar/animals/gorilla-user-avatar.png',
    'img/avatar/animals/horse-user-avatar.png',
    'img/avatar/animals/koala-user-avatar.png',
    'img/avatar/animals/meerkat-user-avatar.png',
    'img/avatar/animals/panda-user-avatar.png',
    'img/avatar/animals/penguin-user-avatar.png',
    'img/avatar/animals/puffer-fish-user-avatar.png',
    'img/avatar/animals/rabbit-user-avatar.png',
    'img/avatar/animals/wolf-user-avatar.png',
    'img/avatar/animals/wild-boar-user-avatar.png'
]

const avatarImagesHumans = [
    'Humanos',
    'img/avatar/humans/user-red-avatar.png',
    'img/avatar/humans/user-yellow-avatar.png',
    'img/avatar/humans/man-user-avatar.png',
    'img/avatar/humans/woman-user-avatar.png',
    'img/avatar/humans/astronaut-user-avatar.png',
    'img/avatar/humans/boy-user-avatar.png',
    'img/avatar/humans/girl-user-avatar.png',
    'img/avatar/humans/clown-user-avatar.png',
    'img/avatar/humans/fish-user-avatar.png',
    'img/avatar/humans/invisible-man-user-avatar.png',
    'img/avatar/humans/knight-user-avatar.png',
    'img/avatar/humans/robot-user-avatar.png',
    'img/avatar/humans/serial-killer-user-avatar.png',
    'img/avatar/humans/soldier-user-avatar.png',
    'img/avatar/humans/queen-user-avatar.png',
]

const arrayDeAvatares = [avatarImagesAnimals, avatarImagesHumans];


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
    const sectionAvatares = document.querySelector("#avatarOptions");
    
    arrayDeAvatares.forEach(avatarArray => {
        const avatarTitle = document.createElement('h5');
        avatarTitle.classList.add('avatar-title');
        avatarTitle.textContent = avatarArray[0];
        sectionAvatares.appendChild(avatarTitle);

        const containerAvatares = document.createElement('div');
        containerAvatares.classList.add('container-avatar-elements');
        
        for (let i = 1; i < avatarArray.length; i++) {
            const avatar = document.createElement('img'); //Creamos elemento img
            avatar.classList.add('avatar'); //añadido el classlist
            avatar.src = avatarArray[i]; //Añadimos src del imagen
            avatar.alt = "Texto alternativo";
            avatar.dataset.avatar = avatarArray[i]; //dataset avatar
            containerAvatares.appendChild(avatar);
        }
        
        sectionAvatares.appendChild(containerAvatares);
    });
};
