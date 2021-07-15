function loadgameResultTemplate(messageTemplate) {
	const gameBoard = document.querySelector("#gameboard");
	const template = `
    <div id="game-result" class="game-result">
      <section>
        ${messageTemplate}
      </section>
      <nav>
        <button class="game-result__btn" data-action="start-game">Play Again</button>
        <button class="game-result__btn" data-action="quit">Quit</button>
      </nav>
    </div>
  `;

	gameBoard.innerHTML = template;
	gameBoard.querySelector("#game-result").addEventListener("click", (event) => {
		if (event.target.matches("[data-action='start-game']")) startGame();
		if (event.target.matches("[data-action='quit']")) loadUserSignupTemplate();
	});
}
