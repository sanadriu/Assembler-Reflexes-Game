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
		const time = parseFloat(((new Date() - game.startTime) / 1000).toFixed(2));

		updateRanking(time);
		loadScoreBoardTableTemplate();
		loadUserResultTemplate(`
			<h2 class="user-result__title">Your score</h2>
      <span class="user-result__message">Your reaction time was</span>
      <span class="user-result__result">${time} seconds.</span>
		`);
	} else {
		loadUserResultTemplate(`
			<h2 class="user-result__title">Too slow</h2>
			<span class="user-result__message">Your reaction time was</span>
			<span class="user-result__result">Over 10 seconds!</span>
		`);
	}

	game.startTime = null;
	game.gridReloadTimer = null;
	game.gridReloads = 0;
}

function updateRanking(time) {
	game.ranking.push({ username: game.currentUser, time: time });
	game.ranking = game.ranking.sort((a, b) => {
		return a.time - b.time;
	});

	if (game.ranking.length > 10) game.ranking = game.ranking.slice(0, 10);

	console.log(game.ranking);
}
