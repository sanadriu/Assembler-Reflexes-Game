function loadGameMenuTemplate() {
	const gameBoard = document.querySelector("#gameboard");
	const template = `
    <div id="game-menu" class="game-menu">
      <button class="game-menu__btn" data-action="start-game">Start game</button>
      <button class="game-menu__btn" data-action="settings">Settings</button>
    </div>
  `;

	gameBoard.innerHTML = template;
	gameBoard.querySelector("#game-menu").addEventListener("click", (event) => {
		if (event.target.matches("[data-action='start-game']")) startGame();
		if (event.target.matches("[data-action='settings']")) loadSettingsTemplate();
	});

	const currentUser = document.getElementById("current-user");
	currentUser.innerHTML = `Current user: ${game.currentUser}`;
}
