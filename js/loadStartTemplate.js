function loadStartTemplate() {
	const gameBoard = document.querySelector("#gameboard");
	const template = `
    <div id="start" class="container">
      <button id="start-button" class="button">Start game</button>
      <button id="settings-button" class="button">Settings</button>
    </div>
  `;

	// Adding event for next step "getReady"

	gameBoard.innerHTML = template;
	gameBoard.querySelector("#start").addEventListener("click", (event) => {
		if (event.target.matches("#start-button")) startGame();
		if (event.target.matches("#settings-button")) loadSettingsTemplate();
	});

	//
	var currentUser = document.getElementById("current-user");
	currentUser.innerHTML = `Current user: ${game.currentUser}`;
}
