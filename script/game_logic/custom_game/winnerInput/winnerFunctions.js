"use strict";
export { getMaxValue, verificarValorDeLinea }

const verificarValorDeLinea = (filas, columnas, winner) => {
  const maximo = Math.max(filas, columnas); //Obtiene el valor maximo entre filas y columnas
  if (maximo < winner) { //Si el valor de la linea es mayor al valor maximo, linea tendrá el valor máximo
    winner = maximo
  }
  return winner;
}

const getMaxValue = (filas, columnas) => {
  return Math.max(filas, columnas);
}