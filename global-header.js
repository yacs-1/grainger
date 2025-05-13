/**
this script will inject the global page header into the #header into the #gheader div of each page
**/

const INJECTION = '<div id="global-preheader"> <h1 class="header"> Chloe Grainger</h1></div><div id="global-header"><ul id="nav-list"><li><a href="/grainger/"> Home</li><li><a href="/grainger/photo-albums/index.html">Photos</a><ul><li><a href="#">album 1 </a></li><li><a href="#">album 2 </a></li><li><a href="#">album 3 </a></li></ul></li><li><a href="/grainger/my-music">My Music</a><ul><li><a href="#">album 1 </a></li><li><a href="#">album 2 </a></li><li><a href="#">album 3 </a></li></ul></li><li><a href="/grainger/sports"> Sports </a><ul><li><a href="#">album 1 </a></li><li><a href="#">album 2 </a></li><li><a href="#">album 3 </a></li></ul></li><li><a href="/grainger/web-dev">Web Dev</a><ul><li><a href="/grainger/wdsub/week1.html">Week 1 </a></li><li><a href="/grainger/wdsub/recipe.html">Week 2 </a></li><li><a href="/grainger/wdsub/anchors.html">Week 3 </a></li><li><a href="/grainger/wdsub/poem.html">Week 4 </a></li><li><a href="/grainger/wdsub/reviews.html">Week 5 </a></li><li><a href="/grainger/wdsub/journal.html">Week 6 </a></li><li><a href="/grainger/wdsub/band-page.html">Week 7 </a></li><li><a href="/grainger/wdsub/list-maker.html">Week 8 </a></li><li><a href="/grainger/wdsub/quadratic-formula.html">Week 9 </a></li><li><a href="/grainger/wdsub/ttt.html">Week 10 </a></li></ul></li></ul></div>';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
