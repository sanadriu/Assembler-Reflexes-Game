function userName() {
  const gameBoard = document.querySelector("#gameboard");
  const template = `
    <div id="user-name" class="container">
      <h2>Choose a user name</h2>
      <form id="input-text">
        <div id="insert-username">
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Insert your username" required/>
        </div>
        <input id="user-submit" class="button" type="submit" value="START">
      </form>
    </div>
  `;

  gameBoard.innerHTML = template;
  gameBoard.querySelector("#input-text").addEventListener("submit", (event) => {
    event.preventDefault();
    game.currentUser = event.target.username.value;
    start();
  });
}
