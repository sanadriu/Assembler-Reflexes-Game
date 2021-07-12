var $scoreBoard = document.getElementById("scoreboard");

var scoresTable =
 `<div class="scoresTable">
 <div class="scoresTable1">
<article>#1 User A [[Seconds]]</article>
<article>#2 User b [[Seconds]]</article>
<article>#3 User c [[Seconds]]</article>
<article>#4 User D [[Seconds]]</article>
<article>#5 User E [[Seconds]]</article>
</div>
<div class="scoresTable1">
<article>#6 User F [[Seconds]]</article>
<article>#7 User G [[Seconds]]</article>
<article>#8 User H [[Seconds]]</article>
<article>#9 User I [[Seconds]]</article>
<article>#10 User J [[Seconds]]</article>
</div>
</div>`;

$scoreBoard.innerHTML+=scoresTable;

