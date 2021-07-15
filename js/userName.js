function userName() {
  const gameBoard = document.querySelector("#gameboard");
  const template = `
    <div id="user-name" class="container">
      <h2>Choose a user name</h2>
      <form id="input-text">
        <div id="insert-username">
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Insert your username" required/>
            <p id="username-error" style='color: red';></p>
        </div>
        <input id="user-submit" class="button" type="submit" value="START">
      </form>
    </div>
  `;

  gameBoard.innerHTML = template;
  gameBoard.querySelector("#input-text").addEventListener("submit", (event) => {
    event.preventDefault();

    if (
      event.target.username.value.length <= 8 &&
      event.target.username.value.length >= 3
    ) {
      game.currentUser = event.target.username.value;
      game.parameters = {
        num_columns: 8,
        num_rows: 4,
        gridReloadInterval: 1,
      };
      start();
    } else {
      let usernameError = document.getElementById("username-error");
      usernameError.textContent =
        "Insert a username between 3 and 8 characters.";
    }
  });
}
