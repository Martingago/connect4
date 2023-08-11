"use strict";

import { inicializarDatosUsuarios, jugador1, jugador2 } from "./users/initUsers.js";


import { crearListaAvatares} from "./users/avatar/userAvatar.js";
import { seleccionarAvatarP1, seleccionarAvatarP2, stopAvatarUserSelection } from "./users/players/playersDataEdit.js";
import { updateDataPlayersStore } from "./users/hooks/updateChanges.js";
import { fillFormWithUserDetails } from "./users/hooks/avatarSelectorData.js";

//Genera la lista de avatares disponibles

inicializarDatosUsuarios();
//console.log(jugador1, jugador2)
//crear lista de avatares
crearListaAvatares();
fillFormWithUserDetails();
//Botones de gestion de avatares del usuario
const btnSelectAvatarP1 = document.querySelector('#selectAvatarBtn');
const btnSelectAvatarP2 = document.querySelector("#selectAvatarBtn2");

//Inicia el listener de las imagenes para actualizar el avatar del jugador seleccionado:
btnSelectAvatarP1.addEventListener("click", seleccionarAvatarP1);
btnSelectAvatarP2.addEventListener("click", seleccionarAvatarP2);

/**
 * Boton que al pulsarlo actualiza los datos de los usuarios.
 * => Actualiza los datos del objeto "jugador"
 */
const btnConfirmUserChanges = document.querySelector("#btnConfirmAvatar");

btnConfirmUserChanges.addEventListener("click", () => {
    let nombreInputP1 = document.querySelector("#form-player1-username").value;
    let nombreInputP2 = document.querySelector("#form-player2-username").value;
    // Validar los valores de los campos de entrada antes de actualizar los nombres
    if (nombreInputP1 !== null && nombreInputP1.trim() !== "") {
        jugador1._nombre = nombreInputP1.trim();  
    }

    if (nombreInputP2 !== null && nombreInputP2.trim() !== "") {
        jugador2._nombre = nombreInputP2.trim();
    }
    //Actualiza los datos del jugador en el store:
    updateDataPlayersStore(jugador1, jugador2);
    //Actuliza los botones de seleccion de avatar
    stopAvatarUserSelection();
})
