"use strict";
import { jugador1, jugador2 } from "../initUsers.js";
import { updatePlayerPreviewAvatar } from "../hooks/updateChanges.js";
export { seleccionarAvatarP1, seleccionarAvatarP2, stopAvatarUserSelection }

//Botones de gestion de avatares del usuario
const btnSelectAvatarP1 = document.querySelector('#selectAvatarBtn');
const btnSelectAvatarP2 = document.querySelector("#selectAvatarBtn2");

/**
 * Variable de estado de los botones
 * False: El usuario no está editando
 * True: El usuario está editando
 */
let editandoP1 = false;
let editandoP2 = false;


/**
 * Maneja la nueva imagen de perfil de un usuario seleccionado 
 * @param {*} player recibe como parametro el usuario sobre el que se va a realizar el cambio
 * @param {*} avatarElement recibe como parametro la nueva imagen que se va a establecer en el usuario
 */
const handleAvatarSelection = (player, avatarElement) => {
    player._avatar = avatarElement.dataset.avatar;
    updatePlayerPreviewAvatar(player);
    if(player === jugador1){
        deleteLastSelectedAvatar("selectedP1");
        avatarElement.classList.add("selectedP1");
    } else if(player === jugador2){
        deleteLastSelectedAvatar("selectedP2")
        avatarElement.classList.add("selectedP2");
    }
};


// Definir funciones nombradas para los eventos de selección de avatar
const selectAvatarP1 = (event) => handleAvatarSelection(jugador1, event.target);
const selectAvatarP2 = (event) => handleAvatarSelection(jugador2, event.target);


const previewP1 = document.querySelector("#preview-avatar-p1");
const previewP2 = document.querySelector("#preview-avatar-p2");
/**
 * Activa la seleccion de avatar del jugador1
 * Desactiva la seleccion del jugador2
 */
const seleccionarAvatarP1 = () => {
    editandoP1 = !editandoP1;
    previewP1.classList.add("selected");
    editButtonTxt(btnSelectAvatarP1, editandoP1);
    if (editandoP2) {
        editandoP2 = false;
        previewP2.classList.remove("selected");
        editButtonTxt(btnSelectAvatarP2, editandoP2);
        
        
    }
    const avatares = document.querySelectorAll(".avatar");
    avatares.forEach(avatar => {
        if (editandoP1) {
            avatar.removeEventListener("click", selectAvatarP2); // Eliminar listener de P2
            avatar.addEventListener("click", selectAvatarP1);
            avatar.classList.add("observe");
            
        } else {
            avatar.removeEventListener("click", selectAvatarP1);
            avatar.classList.remove("observe")
            previewP1.classList.remove("selected")
        }
    });
}

/**
 * Activa la seleccion de avatar del jugador2
 * Desactiva la seleccion del jugador1
 */
const seleccionarAvatarP2 = () => {
    editandoP2 = !editandoP2;
    editButtonTxt(btnSelectAvatarP2, editandoP2);
    previewP2.classList.add("selected");
    
    if (editandoP1) {
        previewP1.classList.remove("selected");
        editandoP1 = false;
        editButtonTxt(btnSelectAvatarP1, editandoP1);
    }
    const avatares = document.querySelectorAll(".avatar");
    avatares.forEach(avatar => {
        if (editandoP2) {
            avatar.classList.add("observe")
            avatar.removeEventListener("click", selectAvatarP1); // Eliminar listener de P1
            avatar.addEventListener("click", selectAvatarP2);    // Agregar listener de P2
        } else {
            avatar.removeEventListener("click", selectAvatarP2);
            avatar.classList.remove("observe")
            previewP2.classList.remove("selected")
            
        }
    });
}

//Edita el textContenct del boton del jugador
const editButtonTxt = (btnUsuario, editando) => {
    btnUsuario.textContent = editando ? "Editando" : "Editar";
}

//Eliminar selector anterior:
const deleteLastSelectedAvatar = (remove) => {
    const avatar = document.querySelectorAll(".avatar");
    avatar.forEach(element => {
        element.classList.remove(remove)
    });
}

/**
 * Restablece los botones de edicion de avatar y elimina el listener de los mismos.
 */
const stopAvatarUserSelection = () => {
    const avatares = document.querySelectorAll(".avatar");
    editandoP1 = false;
    editandoP2 = false;
    editButtonTxt(btnSelectAvatarP1, editandoP1);
    editButtonTxt(btnSelectAvatarP2, editandoP2);
    avatares.forEach(avatar => {
        avatar.removeEventListener("click", selectAvatarP1);
        avatar.removeEventListener("click", selectAvatarP2);
        avatar.classList.remove("observe");
    });
}

