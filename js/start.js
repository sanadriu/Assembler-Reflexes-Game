function start() {
  const gameBoard = document.querySelector("#gameboard");
  const template = `<div id="start" class="container">
    <button id="start-button" class="button">Start game</button>
    <button id="settings-button" class="button">Settings</button>
  </div>`;

  // Adding event for next step "getReady"

  gameBoard.innerHTML = template;
  gameBoard.querySelector("#start").addEventListener("click", (event) => {
    if (event.target.matches("#start-button")) startGame();
    if (event.target.matches("#settings-button")) setSettings();
  });
}

function setSettings() {
  const gameBoard = document.querySelector("#gameboard");
  const template = `
    <div id="settings" class="container">
      <form id="settings-form">
        <div class="input-field">
            <label for="time">Change Time</label>
            <input type="text" id="time" name="gridReloadInterval" required pattern="^[0-9](\.[0-9])?$" maxlength="3" size="3" value="${game.parameters.gridReloadInterval}"/>
        </div>
        <div class="input-field">
            <label for="rows">Num. of rows</label>
            <input type="number" id="rows" name="num_rows" required min="1" max="10" value="${game.parameters.num_rows}"/>
        </div>
        <div class="input-field">
            <label for="columns">Num. of columns</label>
            <input type="number" id="columns" name="num_columns" required min="1" max="10" value="${game.parameters.num_columns}"/>
        </div>
        <input id="settings-submit" type="submit" value="SAVE">
      </form>
    </div>
  `;

  gameBoard.innerHTML = template;
  gameBoard.querySelector("#settings-form").addEventListener("submit", (event) => {
    event.preventDefault();
    game.parameters.gridReloadInterval = event.target.gridReloadInterval.value;
    game.parameters.num_rows = event.target.num_rows.value;
    game.parameters.num_columns = event.target.num_columns.value;
    start();
  });
}
