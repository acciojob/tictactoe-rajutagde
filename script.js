//your JS code here. If required.
const container = document.querySelector('.container');
const inputContainer = document.querySelector('.input-container');
const player1Input = document.querySelector('#player-1');
const player2Input = document.querySelector('#player-2');
const submitButton = document.querySelector('#submit');
const board = document.querySelector('.board');
const message = document.querySelector('.message');
const cells = document.querySelectorAll('.cell');
let currentPlayer;
let winner;

submitButton.addEventListener('click', () => {
  const player1Name = player1Input.value.trim();
  const player2Name = player2Input.value.trim();
  if (!player1Name || !player2Name) {
    alert('Please enter names for both players.');
    return;
  }
  currentPlayer = player1Name;
  inputContainer.style.display = 'none';
  board.style.display = 'block';
  message.textContent = `${currentPlayer}, you're up!`;
});

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (!cell.textContent && !winner) {
      cell.textContent = currentPlayer === player1Input.value ? 'X' : 'O';
      checkWinner();
      if (winner) {
        message.textContent

