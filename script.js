// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
	// Get all cells
	const cells = document.querySelectorAll(".cell");
	// Hide board and message initially
	const board = document.querySelector(".board");
	board.style.display = "none";
	const message = document.querySelector(".message");
	message.style.display = "none";
	// Add event listener to submit button
	const submit = document.querySelector("#submit");
	submit.addEventListener("click", function() {
		// Get player names and show board
		const player1 = document.querySelector("#player-1").value;
		const player2 = document.querySelector("#player-2").value;
		if (player1 && player2) {
			// Hide input and show board
			const input = document.querySelector(".input");
			input.style.display = "none";
			board.style.display = "block";
			// Show message and set first player
			message.style.display = "block";
			message.innerHTML = `${player1}, you're up!`;
			// Add event listener to cells
			cells.forEach(cell => {
				cell.addEventListener("click", function() {
					if (!cell
