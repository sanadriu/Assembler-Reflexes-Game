var $scoreBoard = document.getElementById("scoreboard");

var scoresTable = `
<h2 class="scoreboard__title">Score Board<h2>
<div class="scoreboard__table">
  <article class="scoreboard__record">#1 User A [[Seconds]]</article>
  <article class="scoreboard__record">#2 User B [[Seconds]]</article>
  <article class="scoreboard__record">#3 User C [[Seconds]]</article>
  <article class="scoreboard__record">#4 User D [[Seconds]]</article>
  <article class="scoreboard__record">#5 User E [[Seconds]]</article>
  <article class="scoreboard__record">#6 User F [[Seconds]]</article>
  <article class="scoreboard__record">#7 User G [[Seconds]]</article>
  <article class="scoreboard__record">#8 User H [[Seconds]]</article>
  <article class="scoreboard__record">#9 User I [[Seconds]]</article>
  <article class="scoreboard__record">#10 User J [[Seconds]]</article>
</div>
`;

$scoreBoard.innerHTML += scoresTable;
