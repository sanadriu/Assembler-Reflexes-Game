function loadGameGridTarget(numRows, numCols) {
	const col = Math.floor(Math.random() * numCols) + 1;
	const row = Math.floor(Math.random() * numRows) + 1;

	const gameGrid = document.querySelector("#game-grid");
	const button = `<button class="game-grid__btn" data-action="stop-game" style="--row: ${row}; --col: ${col};"></button>`;

	gameGrid.innerHTML = button;
	gameGrid.addEventListener("click", (event) => {
		if (event.target.matches("[data-action='stop-game']")) stopGame();
	});
}
