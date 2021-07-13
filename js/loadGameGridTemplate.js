function loadGameGridTemplate(numRows, numCols) {
  const pos_x = Math.floor(Math.random() * numCols) + 1;
  const pos_y = Math.floor(Math.random() * numRows) + 1;

  const gameBoard = document.querySelector("#gameboard");
  const template = `
    <div id="game-grid" style="grid-template-columns: repeat(${numCols}, 1fr); grid-template-rows: repeat(${numRows}, 1fr);">
      <button data-action="stop-game" class="game-grid__btn" style="grid-column: ${pos_x}; grid-row: ${pos_y}"></button>
    </div>
  `;

  gameBoard.innerHTML = template;
  gameBoard.querySelector("#game-grid").addEventListener("click", (event) => {
    if (event.target.matches("[data-action='stop-game']")) stopGame();
  });
}
