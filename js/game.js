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
  const getReadyTime = Math.floor(Math.random() * 11);
  game.lastStartTime = new Date();

  loadGetReadyTemplate();

  setTimeout(() => {
    game.gridReloadTimer = setInterval(() => {
      loadGameGridTemplate();
    }, game.gridReloadInterval);
  }, getReadyTime);
}

function stopGame() {
  clearInterval(game.gridReloadTimer);
  game.lastEndTime = new Date();
  getTimePlayed();
  updateRanking();
}

function getTimePlayed() {
  game.lastResultTime = parseFloat(((game.endTime - game.startTime) / 1000).toFixed(2));
}

/*
function updateRanking() {
  let isInserted = false;

  for (let i = 0; i < game.ranking.length && !isInserted; i++) {
    if (game.lastResultTime < game.ranking[i].time) {
      game.ranking.splice(i, 0, { username: game.currentUser, time: game.lastResultTime });
      isInserted = true;
    }
  }

  if (game.ranking.length < 10 && !isInserted) {
    game.ranking.push({ username: game.currentUser, time: game.lastResultTime });
  }
}
*/

function updateRanking() {
  game.ranking.push({ username: game.currentUser, time: game.lastResultTime });
  game.ranking.sort((a, b) => {
    a.time - b.time;
  });

  if (game.ranking.length > 10) game.ranking = game.ranking.slice(0, 10);
}
