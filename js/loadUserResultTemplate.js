function loadUserResultTemplate(time) {
  const gameBoard = document.querySelector("#gameboard");
  const template = `
    <div id="user-result">
      <section>
        <h2 class="user-result__title">Your score</h2>
        <span class="user-result__message">Your reaction time was:</span>
        <span class="user-result__result">${time} seconds.&#127881;</span>
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
      userName();
    }
  });
}
