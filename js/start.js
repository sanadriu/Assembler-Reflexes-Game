function start(event) {
  event.preventDefault();

  var game = `<div class="container">
  <button id="start-button" class="button">Start game</button>
</div`;

  gameBoard.innerHTML = game;

  // Adding event for next step "getReady"
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", getReady);
}
