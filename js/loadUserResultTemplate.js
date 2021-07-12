function loadUserResultTemplate(time) {
  const gameBoard = document.getElementById("gameboard");
  const template = `
    <div id="user-result">
      <section>
        <h2 class="user-result__title">Your score</h2>
        <span class="user-result__message">Your reaction time was:</span>
        <span class="user-result__result">${time} seconds.</span>
      </section>
      <nav>
        <button class="user-result__btn">Play Again</button>
        <button class="user-result__btn">Go Home</button>
      </nav>
    </div>
  `;

  gameBoard.innerHTML = template;
}
