function start() {
  const gameBoard = document.querySelector("#gameboard");
  const template = `<div id="start" class="container">
    <button id="start-button" class="button">Start game</button>
  </div>`;

  gameBoard.innerHTML = template;
  gameBoard.querySelector("#start").addEventListener("click", (event) => {
    if (event.target.matches("#start-button")) startGame();
  });
}
