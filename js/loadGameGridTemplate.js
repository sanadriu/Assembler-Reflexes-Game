function loadGameGridTemplate(numRows, numCols) {
	const col = Math.floor(Math.random() * numCols) + 1;
	const row = Math.floor(Math.random() * numRows) + 1;

	const gameBoard = document.querySelector("#gameboard");
	const template = `
    <div id="game-grid" class="game-grid" style="--num-rows: ${numRows}; --num-cols: ${numCols};">
      <button class="game-grid__btn" data-action="stop-game" style="--row: ${row}; --col: ${col};"></button>
    </div>
  `;

	gameBoard.innerHTML = template;
	gameBoard.querySelector("#game-grid").addEventListener("click", (event) => {
		if (event.target.matches("[data-action='stop-game']")) stopGame();
	});
}
