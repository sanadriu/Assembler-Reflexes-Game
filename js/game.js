const game = {
	parameters: {
		num_columns: 8,
		num_rows: 4,
		gridReloadInterval: 1,
	},
	ranking: [
		{ username: "Gold", time: 0.3 },
		{ username: "Silver", time: 0.5 },
		{ username: "Bronze", time: 0.7 },
	],
	currentUser: null,
	gridReloadTimer: null,
	gridReloads: 0,
	startTime: null,
	resultTime: null,
};

function startGame() {
	const getReadyTime = Math.floor(Math.random() * 11) * 1000;

	loadGetReadyTemplate();

	setTimeout(() => {
		game.gridReloadTimer = setInterval(() => {
			if (game.startTime === null) game.startTime = new Date();

			loadGameGridTemplate(game.parameters.num_rows, game.parameters.num_columns);

			if (++game.gridReloads === 10) stopGame();
		}, game.parameters.gridReloadInterval * 1000);
	}, getReadyTime);
}

function stopGame() {
	clearInterval(game.gridReloadTimer);

	if (game.gridReloads < 10) {
		game.resultTime = parseFloat(((new Date() - game.startTime) / 1000).toFixed(2));

		updateRanking(game.resultTime);
		loadScoreBoardTableTemplate();
		loadgameResultTemplate(`
			<h2 class="game-result__title">Your score</h2>
      <span class="game-result__message">Your reaction time was</span>
      <span class="game-result__result">${game.resultTime} seconds.</span>
			<span class="game-result__message">${isInRankingMessage()}</span>
		`);
	} else {
		loadgameResultTemplate(`
			<h2 class="game-result__title">Too slow</h2>
			<span class="game-result__message">Your reaction time was</span>
			<span class="game-result__result">Over 10 seconds!</span>
		`);
	}

	game.startTime = null;
	game.resultTime = null;
	game.gridReloadTimer = null;
	game.gridReloads = 0;
}

function updateRanking() {
	game.ranking.push({ username: game.currentUser, time: game.resultTime });
	game.ranking = game.ranking.sort((a, b) => {
		return a.time - b.time;
	});

	if (game.ranking.length > 10) game.ranking = game.ranking.slice(0, 10);
}

function isInRankingMessage() {
	if (game.ranking.find((record) => record.username === game.currentUser && record.time === game.resultTime)) {
		return "You are in the ranking! &#127775;";
	} else {
		return "You are not in the ranking &#128546;";
	}
}
