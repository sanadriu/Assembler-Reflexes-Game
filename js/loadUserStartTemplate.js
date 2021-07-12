function loadUserStartTemplate() {
  const gameBoard = document.getElementById("gameboard");
  const template = `
  <div id="user-start">
    <h2>Choose a user name</h2>
    <form id="input-text">
      <div id="insert-username">
          <label for="username">Username</label>
          <input id="username" type="text" placeholder="Insert your username"/>
      </div>
      <input id="user-submit" type="submit" value="START">
      
    </div>
  </div>
  `;

  gameBoard.innerHTML = template;
}
