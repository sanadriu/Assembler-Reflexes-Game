function loadUserResultTemplate(messageTemplate) {
	const gameBoard = document.querySelector("#gameboard");
	const template = `
    <div id="user-result">
      <section>
        ${messageTemplate}
      </section>
      <nav>
        <button class="user-result__btn" data-action="start-game">Play Again</button>
        <button class="user-result__btn" data-action="go-home">Go Home</button>
      </nav>
    </div>
  `;

	gameBoard.innerHTML = template;
	gameBoard.querySelector("#user-result").addEventListener("click", (event) => {
		if (event.target.matches("[data-action='start-game']")) {
			startGame();
		}

		if (event.target.matches("[data-action='go-home']")) {
			loadUserNameTemplate();
		}
	});
}
