function loadUserSignupTemplate() {
	const gameBoard = document.querySelector("#gameboard");
	const template = `
    <div id="user-signup" class="user-signup">
      <h2 class="user-signup__title">Insert a username</h2>
      <form id="user-signup-form" class="user-signup__form">
				<div class="user-signup__input-field">
          <label for="username">Username</label>
          <input id="username" type="text" placeholder="Insert your username" required/>
        </div>
        <input class="user-signup__submit" type="submit" value="START">
      </form>
    </div>
  `;

	gameBoard.innerHTML = template;
	gameBoard.querySelector("#user-signup-form").addEventListener("submit", (event) => {
		event.preventDefault();
		game.currentUser = event.target.username.value;
		loadGameMenuTemplate();
	});
}
