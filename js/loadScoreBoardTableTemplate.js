function loadScoreBoardTableTemplate() {
	const scoretable = document.querySelector(".scoreboard__table");

	let template = "";

	for (let i = 0; i < game.ranking.length; i++) {
		template += `<li class="scoreboard__record">#${i + 1} - ${game.ranking[i].username} ${game.ranking[i].time}</li>`;
	}

	scoretable.innerHTML = template;
}
