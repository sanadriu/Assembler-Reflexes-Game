const game = {
  parameters: {
    num_columns: 8,
    num_rows: 4,
    gridReloadInterval: 1000,
  },
  ranking: [
    { username: "Gold", time: 0.3 },
    { username: "Silver", time: 0.5 },
    { username: "Bronze", time: 0.7 },
  ],
  currentUser: null,
  gridReloadTimer: null,
  lastStartTime: null,
  lastEndTime: null,
  lastResultTime: null,
};

function startGame() {
  const getReadyTime = Math.floor(Math.random() * 11) * 1000;

  loadGetReadyTemplate();

  setTimeout(() => {
    game.gridReloadTimer = setInterval(() => {
      if (game.lastStartTime === null) game.lastStartTime = new Date();

      loadGameGridTemplate(game.parameters.num_rows, game.parameters.num_columns);
    }, game.parameters.gridReloadInterval);
  }, getReadyTime);
}

function stopGame() {
  clearInterval(game.gridReloadTimer);
  game.lastEndTime = new Date();
  game.lastResultTime = parseFloat(((game.lastEndTime - game.lastStartTime) / 1000).toFixed(2));
  updateRanking();
  loadUserResultTemplate(game.lastResultTime);

  // Reset
  game.gridReloadTimer = null;
  game.lastStartTime = null;
  game.lastEndTime = null;
  game.lastResultTime = null;
}

function updateRanking() {
  game.ranking.push({ username: game.currentUser, time: game.lastResultTime });
  game.ranking = game.ranking.sort((a, b) => {
    return a.time - b.time;
  });

  if (game.ranking.length > 10) game.ranking = game.ranking.slice(0, 10);

  console.log(game.ranking);
}
