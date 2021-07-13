const gameBoard = document.getElementById("gameboard");

function userName() {
  var userName = `<div class="container">
  <h2>Choose a user name</h2>
  <form id="input-text">
    <div id="insert-username">
        <label for="username">Username</label>
        <input
        id="username"
        type="text"
        placeholder="Insert your username"
        required
        />
    </div>
    <input id="user-submit" class="button" type="submit" value="START">
  </form>
</div>`;

  gameBoard.innerHTML = userName;

  // Adding event for next step "start.js"
  const userSubmit = document.getElementById("input-text");
  userSubmit.addEventListener("submit", start);
}
