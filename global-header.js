/**
this script will inject the global page header into the #header into the #gheader div of each page
**/

const INJECTION = '<div id="global-preheader"> <h1 class="header"> Chloe Grainger</h1></div><div id="global-header"><ul id="nav-list"><li><a href="/grainger/"> Home</li><li><a href="/grainger/photo-albums/index.html">Photos</a><ul><li><a href="#">album 1 </a></li><li><a href="#">album 2 </a></li><li><a href="#">album 3 </a></li></ul></li><li><a href="/grainger/my-music">My Games</a><ul><li><a href="/grainger/wdsub/ttt.html">Tic-Tac-Toe</a></li><li><a href="/grainger/my-music/hangman.html">Hangman </a></li><li><a href="#">album 3 </a></li></ul></li><li><a href="/grainger/sports"> Sports </a><ul><li><a href="#">album 1 </a></li><li><a href="#">album 2 </a></li><li><a href="#">album 3 </a></li></ul></li><li><a href="/grainger/web-dev">Web Dev</a><ul><li><a href="/grainger/wdsub/week1.html">Basic coding</a></li><li><a href="/grainger/wdsub/recipe.html">Odd Brownie Recipie</a></li><li><a href="/grainger/wdsub/anchors.html">Lorem Ipsum Anchors</a></li><li><a href="/grainger/wdsub/poem.html">A Poem About Horses</a></li><li><a href="/grainger/wdsub/reviews.html">Reviews on Literature</a></li><li><a href="/grainger/wdsub/journal.html">Weekly News</a></li><li><a href="/grainger/wdsub/band-page.html">Cage the Elephant Band Page</a></li><li><a href="/grainger/wdsub/list-maker.html">List Maker</a></li><li><a href="/grainger/wdsub/quadratic-formula.html">Quadratic Formula Claculator</a></li><li><a href="/grainger/wdsub/ttt.html">Tic-Tac-Toe</a></li></ul></li></ul></div>';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
