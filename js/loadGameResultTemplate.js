function loadGameResultTemplate(messageTemplate) {
	const gameBoard = document.querySelector("#gameboard");
	const template = `
    <div id="game-result" class="game-result">
      <section>
        ${messageTemplate}
      </section>
      <nav class="game-result__btns">
        <button class="game-result__btn" data-action="start-game">Play Again</button>
        <button class="game-result__btn" data-action="menu">Menu</button>
        <button class="game-result__btn" data-action="quit">Quit</button>
      </nav>
    </div>
  `;

	gameBoard.innerHTML = template;
	gameBoard.querySelector("#game-result").addEventListener("click", (event) => {
		if (event.target.matches("[data-action='start-game']")) startGame();
		if (event.target.matches("[data-action='menu']")) loadGameMenuTemplate();
		if (event.target.matches("[data-action='quit']")) loadUserSignupTemplate();
	});
}
