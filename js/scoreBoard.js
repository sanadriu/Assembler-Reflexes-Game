function displayRanking() {
  const scoretable = document.querySelector(".scoreboard__table");
  let template = "";

  for (let i = 0; i < game.ranking.length; i++) {
    template += `<article class="scoreboard__record">#${i + 1} - ${
      game.ranking[i].username
    } ${game.ranking[i].time}s</article>`;
  }

  scoretable.innerHTML = template;
}
