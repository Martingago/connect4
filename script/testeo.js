// Variables globales
const rows = 6;
const cols = 7;
let currentPlayer = 'red';
let gameBoard = [];


let colFicha;
let rowFicha;

// Crear la cuadrícula del juego
const grid = document.querySelector('.tablero');
for (let row = 0; row < rows; row++) {
    gameBoard[row] = [];
    for (let col = 0; col < cols; col++) {
        const cell = document.createElement('div');
        cell.classList.add('celda');
        cell.dataset.column = col;
        cell.dataset.row = row;
        grid.appendChild(cell);
        gameBoard[row][col] = null;
    }
}

// Función para colocar una ficha en la cuadrícula
function dropToken(col) {
    for (let row = rows - 1; row >= 0; row--) {
        if (!gameBoard[row][col]) {
            gameBoard[row][col] = currentPlayer;
            const cell = document.querySelector(`[data-row="${row}"][data-column="${col}"]`);
            colFicha = Number(col);
            rowFicha = Number(row);
            cell.classList.add(currentPlayer);
            return true;
        }
    }
    return false;
}

// Función para verificar si alguien ha ganado
function checkWin(row, col) {

    console.log(row, col)
    const directions = [
        [0, 1], // horizontal
        [1, 0], // vertical
        [1, 1], // diagonal hacia abajo
        [1, -1] // diagonal hacia arriba
    ];

    for (const [dx, dy] of directions) {
        let count = 1;
        for (const sign of [-1, 1]) {
            let r = row + sign * dx;
            let c = col + sign * dy;
            while (r >= 0 && r < rows && c >= 0 && c < cols && gameBoard[r][c] === currentPlayer) {
                count++;
                r += sign * dx;
                c += sign * dy;
            }
        }
        if (count >= 4) return true;
    }
    return false;
}

// Función para cambiar el turno del jugador
function switchPlayer() {
    currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
}

// Función para manejar el clic en la cuadrícula
function handleCellClick(event) {
    const col = event.target.dataset.column;
    if (dropToken(col)) {
        if (checkWin(rowFicha, colFicha)) {
            setTimeout(() => {
                alert(`${currentPlayer.toUpperCase()} ha ganado!`);
                resetGame();
            }, 100);
        } else {
            switchPlayer();
        }
    }
}

// Agregar evento de clic a las celdas
grid.addEventListener('click', handleCellClick);

// Función para reiniciar el juego
function resetGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.remove('red', 'yellow');
    });
    gameBoard = gameBoard.map(row => row.map(() => null));
    currentPlayer = 'red';
}
