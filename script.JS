let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const statusDisplay = document.getElementById('game-status');

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const winCondition = winningConditions[i];
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];
    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusDisplay.innerHTML = `Player ${currentPlayer} has won!`;
    gameActive = false;
    return;
  }

  if (!board.includes('')) {
    statusDisplay.innerHTML = 'Game ended in a draw!';
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
}

function makeMove(index) {
  if (board[index] !== '' || !gameActive) {
    return;
  }

  board[index] = currentPlayer;
  document.getElementById(`cell-${index}`).innerHTML = currentPlayer;
  handleResultValidation();
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
  document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
}

document.addEventListener('DOMContentLoaded', () => {
  statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
});

document.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
