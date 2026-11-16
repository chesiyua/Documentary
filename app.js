
// How Phones Changed - flip-phone entry, opening lines, then the SNAKE MAZE (v24).
// The maze is a small labyrinth (recursive backtracker, fixed seed).
// The snake is a TRANSITION ANIMATION, not a game to operate. There is
// ONE main road through the maze: the solution path from the entrance
// to the exit. The snake walks that road by itself and NEVER revisits a
// cell (no backtracking, no detours). The 9 chapter dots sit ON the road
// in story order; the snake passes 2 setback snakes on the way (Iridium
// between the smaller-phones and BlackBerry chapters, Note7 between the
// iPhone and Today chapters). Eat a dot -> the card opens and everything
// waits -> close the card (or Space) -> the snake grows one segment and
// walks on alone to the exit.
var $ = function (id) { return document.getElementById(id); };
var YEARS = ["1876", "LATE 1800s", "1900s", "1946", "1973–1983", "1990s", "2000", "2007", "TODAY"];
var PLACES = ["BOSTON", "THE EXCHANGE", "AT HOME", "ON THE ROAD", "IN THE HAND", "IN THE POCKET", "JAPAN", "MACWORLD", "IN OUR HANDS"];
var GHOST = ["1876", "1800s", "1900s", "1946", "1973", "1990s", "2000", "2007", "TODAY"];
var DATA = {"chapters": [{"strip": "YEAR: 1876 · FIRST CLEAR SPEECH SENT THROUGH A WIRE", "cam": "IMG 01 — BOSTON, 1876", "img": "images/bell1876.jpg", "imgs": ["images/bell1876.jpg", "images/bell-liquid.png", "images/bell-patent.jpg"], "cap": "Bell's box telephone, 1876 — one of the first telephones sold. National Museum of American History. Photo: Daderot, CC0. · Bell's liquid transmitter, the device used for the first call. From Darrow (1918), public domain. Wikimedia Commons. · Bell's patent drawing, US Patent 174,465 (patented March 7, 1876) — Fig. 7 shows the liquid transmitter. US National Archives, public domain.", "tag": "STOP 2 · 1876", "title": "Early Telephones", "paras": ["Today, calling someone far away takes a few seconds. In 1876, hearing a voice through a wire was something new.", "Alexander Graham Bell successfully transmitted clear speech to his assistant through a telephone. The device turned sound into electrical signals, then back into sound at the other end. People could hear a voice and respond straight away, even without being together."]}, {"strip": "CONNECTION: BY HAND · OPERATOR + SWITCHBOARD", "cam": "IMG 02 — THE EXCHANGE, LATE 1800s", "img": "images/operators.jpg", "cap": "Women operators at the Bell Telephone exchange, Montreal, about 1897–1899. Photo: Cassell & Co., public domain, Wikimedia Commons.", "tag": "STOP 3 · LATE 1800s", "title": "Telephone Exchanges", "paras": ["As telephone networks grew, calling someone still took a few steps.", "First, you picked up the receiver and spoke to an operator. You told them who you wanted to call. Then they plugged cables into a switchboard to connect you.", "Telephones began entering homes and workplaces. But each conversation depended on someone making that connection by hand."]}, {"strip": "DIAL: BY YOURSELF · PLACE: STILL AT HOME", "cam": "IMG 03 — AT HOME", "img": "images/rotary.jpg", "cap": "Rotary landline phone. Photo: Berthold Werner, CC BY-SA 3.0, Wikimedia Commons.", "tag": "STOP 4 · 1900s", "title": "Landline Phones", "paras": ["With automatic exchanges, people could dial numbers themselves. Rotary dials came first, followed later by buttons. But the phone stayed at home or at work. If nobody answered, you tried again later.", "Cost was another problem. One family who moved abroad in the early 1970s called home about twice a year, for no more than five minutes each time. International calls were too expensive to talk for long. They could hear their family's voices, but had little time to catch up."]}, {"strip": "SERVICE STARTED: 1946 · IN THE CAR ONLY", "cam": "IMG 04 — IN THE CAR", "img": "images/carphone.jpg", "cap": "Motorola car phone, 1964. Photo: Daderot, CC0, Wikimedia Commons.", "tag": "STOP 5 · 1946", "title": "Car Phones", "paras": ["People also wanted to make calls away from home. By 1946, commercial car telephone services were operating in the United States.", "These phones used radio to connect to the telephone network. The equipment took up space in the car, and only a few calls could happen at once. Sometimes you had to wait for a free channel.", "You could make a call from your car, but you couldn't take the phone with you when you got out."]}, {"strip": "1973: FIRST HANDHELD · 1983: $3,995 · 790 G · TALK ≈30 MIN · CHARGE ≈10 H", "cam": "IMG 05 — 1973 + 1983", "img": "images/cooper.jpg", "imgs": ["images/cooper.jpg", "images/dynatac.jpg"], "cap": "Martin Cooper with the 1973 prototype — this photo is from 2007, a reenactment, not a photo from 1973. Photo: Rico Shen, CC BY-SA 3.0. · DynaTAC 8000X — the phone in this photo has an old British Telecom logo. Photo: Redrum0486, CC BY-SA 3.0. Wikimedia Commons.", "tag": "STOP 6 · 1973–1983", "title": "Handheld Mobile Phones", "paras": ["In 1973, Motorola demonstrated a handheld cellular phone. About ten years later, the DynaTAC 8000X received approval in the United States.", "It cost 3,995 US dollars and weighed around 790 grams. A full charge gave you about 30 minutes of talk time. Charging it again took roughly ten hours.", "That was a lot of money and waiting for a short conversation. Still, you could carry it outside and make a call without looking for a telephone."]}, {"strip": "FIRST SMS: 1992 · 160 CHARACTERS · SNAKE: 1997", "cam": "IMG 06 — NOKIA 6110", "img": "images/nokia6110.jpg", "cap": "Nokia 6110 — the first phone with Snake, 1997. Photo: Raimond Spekking, CC BY-SA 4.0, Wikimedia Commons.", "tag": "STOP 7 · 1990s", "title": "Texting and Games", "paras": ["The first SMS was sent from a computer to a phone in 1992. It said, “Merry Christmas.” A standard English SMS could hold up to 160 characters. People kept messages short, often using abbreviations. A quick “I'm home” could reassure someone without starting a phone call.", "Phones also became something to play with. Nokia's version of Snake arrived on the 6110 in 1997. Even when there was nobody to call, you could take out your phone and play a game."]}, {"strip": "YEAR: 2000 · SHARP J-SH04 · CAMERA: 0.11 MP", "cam": "IMG 07 — JAPAN, 2000", "img": "images/jsh04.jpg", "cap": "Sharp J-SH04, 2000 — front and back. The camera lens is on the back. Photo: Morio, CC BY-SA 3.0, Wikimedia Commons.", "tag": "STOP 8 · 2000", "title": "Camera Phones", "paras": ["In 2000, the Sharp J-SH04 combined a phone with a camera and let users send photos over the mobile network.", "You could photograph something and share it using the same device. A new home, a family meal, or somewhere you had visited could all become part of a conversation.", "For people living apart, pictures added everyday details that were harder to share through a short call."]}, {"strip": "IBM SIMON: 1990s · iPHONE: 2007 · APP STORE: 2008", "cam": "IMG 08 — 2007", "img": "images/iphone2007.jpg", "cap": "The first iPhone, Macworld, January 9, 2007. Photo: Arnold Reinhold, CC BY-SA 4.0, Wikimedia Commons.", "tag": "STOP 9 · 2007", "title": "Smartphones", "paras": ["Earlier devices, including the IBM Simon in the 1990s, had already combined telephone and handheld computer features.", "The iPhone's arrival in 2007 was another important step. People could touch the screen to browse websites, move through photos, and check maps. Apple's App Store followed in 2008.", "Downloading an app could give the phone another use. You could listen to music, plan a journey, or play a game on the device you carried for calls."]}, {"strip": "NOW: MANY DEVICES IN ONE", "cam": "IMG 09 \u2014 VIDEO CALL, TODAY", "img": "images/videocall.jpg", "cap": "A woman makes a video call on her smartphone in a cafe. Photo: Shixart1985, CC BY 2.0, Wikimedia Commons.", "tag": "STOP 10 · TODAY", "title": "Smartphones Today", "paras": ["Today's smartphones can do the jobs of many older devices. A video call lets family members see each other across long distances.", "The camera takes photos and records video. People listen to music, watch films, read the news, and use maps to find their way.", "They pay in shops, send money, and do their banking on the phone. Messages, email, games, and social apps are all on the same small device."]}], "sources": {"strip": "END OF LOG · SOURCES", "tag": "END OF THE LINE", "title": "Sources", "paras": ["All photos are from Wikimedia Commons, used under the licence shown under each photo. Facts about the phones were checked against the sources in my process document.", "How Phones Changed — Siyuan Chen · Narrative for Interaction Design, Project 2"]}};

// ---------- session clock + quiet chrome ----------
var sessionSec = 0;
setInterval(function () {
  sessionSec++;
  var m = String(Math.floor(sessionSec / 60)), s = String(sessionSec % 60);
  $("hudClock").textContent = (m.length < 2 ? "0" + m : m) + ":" + (s.length < 2 ? "0" + s : s);
}, 1000);
var lastPoke = Date.now();
function pokeChrome() { lastPoke = Date.now(); document.body.classList.remove("chrome-off"); }
window.addEventListener("mousemove", pokeChrome);
window.addEventListener("click", pokeChrome);
setInterval(function () { if (Date.now() - lastPoke > 4500) document.body.classList.add("chrome-off"); }, 600);

// ---------- phases: flip-phone entry -> opening lines -> the maze ----------
var phase = "phone";
initEntry3D(function () {
  if (phase !== "phone") return;
  $("entry").hidden = true;
  $("intro2").hidden = false;
  phase = "intro";
  startIntroBuild();
});
$("intro2").addEventListener("click", function () {
  if (phase !== "intro") return;
  if (!introBuildDone()) { finishIntroBuild(); return; }
  $("intro2").hidden = true;
  phase = "title";
  var mt = $("mainTitle");
  mt.hidden = false;
  requestAnimationFrame(function () { mt.classList.add("on"); });
  var goJourney = function () {
    if (phase !== "title") return;
    phase = "journey";
    mt.classList.remove("on"); mt.hidden = true;
    document.body.classList.add("phase-journey");
    $("game").hidden = false;
    startGame();
    if (won || over) resetGame(); else paused = false;
    pokeChrome();
  };
  mt.addEventListener("click", goJourney);
  setTimeout(goJourney, 2400);
});

// ---------- the maze ----------
var EW = ["010100000000101", "011001000101101", "010110010110111", "100101010110111", "000010100101011", "100101000010011", "111010100110101", "111000101011101", "001000001000001"];
var SW = ["100011011111010", "010110111000000", "101001100101100", "011100011000000", "011111101111110", "000000111100100", "000111001001011", "010011110110010", "111111111111111"];
var MW = 31, MH = 19, CELL = 48;
var WALLS = {};
for (var fy = 0; fy < MH; fy++) for (var fx = 0; fx < MW; fx++) {
  var openCell = false;
  if (fx % 2 === 1 && fy % 2 === 1) openCell = true;
  else if (fx % 2 === 0 && fy % 2 === 1 && fx > 0 && fx < MW - 1 && EW[(fy - 1) / 2][(fx - 2) / 2] === "0") openCell = true;
  else if (fx % 2 === 1 && fy % 2 === 0 && fy > 0 && fy < MH - 1 && SW[(fy - 2) / 2][(fx - 1) / 2] === "0") openCell = true;
  if (!openCell) WALLS[fx + "," + fy] = 1;
}
var SPAWN = { x: 1, y: 1 }, EXIT = { x: 29, y: 15 };
var CHAPTER_POS = [[5,1],[11,7],[5,17],[11,15],[17,13],[19,9],[19,1],[23,9],[29,11]];
var SETBACKS = [
  { x: 14, y: 21,  name: "SETBACK · 1973 — THE BATTERY", text: "The first handheld phone could only talk for about 20 minutes. Then the battery was empty, and charging it took 10 hours." },
  { x: 6, y: 13, name: "SETBACK · 1983 — THE PRICE", text: "The DynaTAC cost 3,995 dollars. Most people could not buy one. For years, a mobile phone was only for rich people and for business." },
  { x: 24,  y: 9, name: "SETBACK · 1999 — IRIDIUM", text: "Motorola's Iridium connected phones through satellites. It cost billions of dollars, very few people used it, and the company went bankrupt in 1999." },
  { x: 27, y: 17, name: "SETBACK · 2010 — THE ANTENNA", text: "The iPhone 4 had a problem: if you held it in one way, the signal went down. Apple had to give free cases to the buyers." },
  { x: 12, y: 3, name: "SETBACK · THE 2010s — BLACKBERRY FALLS", text: "BlackBerry did not follow the touchscreen. In a few years, almost nobody bought one. The phone that was made for work lost its market." },
  { x: 3, y: 17, name: "SETBACK · 2016 — NOTE7", text: "Samsung's Note7 had a battery problem. Some of the phones caught fire. Samsung had to take back every Note7 and stop selling it." }
];
function isWall(x, y) { return x < 0 || y < 0 || x >= MW || y >= MH || !!WALLS[x + "," + y]; }
function placeEnemies() {
  SETBACKS.forEach(function (s) { s.gone = false; s.cells = null; });
  Object.keys(EVENTS).forEach(function (k) {
    var ev = EVENTS[k];
    if (ev.type !== "setback") return;
    var idx = +k, cells = [];
    for (var j = 0; j < 4; j++) cells.push({ x: route[idx + j].x, y: route[idx + j].y });
    SETBACKS[ev.s].cells = cells;
  });
}
function enemyAt(x, y) {
  for (var i = 0; i < SETBACKS.length; i++) {
    var s = SETBACKS[i];
    if (s.gone || !s.cells) continue;
    for (var j = 0; j < s.cells.length; j++) if (s.cells[j].x === x && s.cells[j].y === y) return s;
  }
  return null;
}
function ridge(x, y) { return Math.pow(0.5 + 0.5 * Math.sin(x * 0.0035 + 1.7 * Math.sin(y * 0.0028)), 2); }
var dotSeed = 7;
function dotRnd() { dotSeed = (dotSeed * 16807) % 2147483647; return dotSeed / 2147483647; }
function buildPellets() { return {}; }


// ---------- preset route + auto-walk (the snake runs itself) ----------
var DIRS4 = [[1,0],[0,1],[-1,0],[0,-1]];
var SETBACK_ON_PATH = [[2, 6], [5, 8]];
var route = [], EVENTS = {}, routeIdx = 0, walking = false, walkTimer = null;
function roomOf(f) { return { x: (f.x - 1) / 2, y: (f.y - 1) / 2 }; }
function centerOf(r) { return { x: 2 * r.x + 1, y: 2 * r.y + 1 }; }
function wallBetween(a, b) {
  if (b.x === a.x + 1) return EW[a.y][a.x] === "1";
  if (b.x === a.x - 1) return EW[a.y][b.x] === "1";
  if (b.y === a.y + 1) return SW[a.y][a.x] === "1";
  return SW[b.y][a.x] === "1";
}
function roomPath(s, t) {
  var RW = (MW - 1) / 2, RH = (MH - 1) / 2;
  var prev = {}; prev[s.x + "," + s.y] = null; var q = [s];
  while (q.length) {
    var c = q.shift();
    if (c.x === t.x && c.y === t.y) break;
    for (var i = 0; i < 4; i++) {
      var n = { x: c.x + DIRS4[i][0], y: c.y + DIRS4[i][1] };
      var k = n.x + "," + n.y;
      if (n.x < 0 || n.y < 0 || n.x >= RW || n.y >= RH || (k in prev) || wallBetween(c, n)) continue;
      prev[k] = c; q.push(n);
    }
  }
  var path = [], cur = t;
  while (cur) { path.unshift(cur); cur = prev[cur.x + "," + cur.y]; }
  return path;
}
function buildRoute() {
  var path = roomPath(roomOf(SPAWN), roomOf(EXIT));
  var cells = [centerOf(path[0])];
  for (var ri = 1; ri < path.length; ri++) {
    var ca = centerOf(path[ri - 1]), cb = centerOf(path[ri]);
    cells.push({ x: (ca.x + cb.x) / 2, y: (ca.y + cb.y) / 2 });
    cells.push(cb);
  }
  var L = path.length - 1, events = {}, chapterSteps = [], chapterPos = [];
  for (var k = 0; k < 9; k++) {
    var st = Math.round(L * (k + 1) / 10);
    chapterSteps.push(st);
    events[2 * st] = { type: "chapter", i: k };
    chapterPos.push([2 * path[st].x + 1, 2 * path[st].y + 1]);
  }
  SETBACK_ON_PATH.forEach(function (sp) {
    var mid = Math.round((chapterSteps[sp[1] - 1] + chapterSteps[sp[1]]) / 2);
    events[2 * mid] = { type: "setback", s: sp[0] };
  });
  events[cells.length - 1] = { type: "exit" };
  return { cells: cells, events: events, chapterPos: chapterPos };
}
function startWalk() {
  if (walking || paused || won || over || routeIdx >= route.length - 1) return;
  walking = true;
  walkTimer = setInterval(walkStep, 92);
}
function stopWalk() { walking = false; if (walkTimer) { clearInterval(walkTimer); walkTimer = null; } }
function walkStep() {
  if (paused || won || over) { stopWalk(); return; }
  var nxt = route[routeIdx + 1];
  if (!nxt) { stopWalk(); return; }
  var nd = { x: Math.sign(nxt.x - snake[0].x), y: Math.sign(nxt.y - snake[0].y) };
  prevSnake = snake.map(function (s) { return { x: s.x, y: s.y }; });
  stepAt = performance.now();
  lastDir = nd;
  snake.unshift({ x: nxt.x, y: nxt.y }); snake.pop();
  routeIdx++;
  var ev = EVENTS[routeIdx];
  if (ev) {
    stopWalk();
    if (ev.type === "chapter") eatChapter(ev.i);
    else if (ev.type === "setback") biteEnemy(SETBACKS[ev.s]);
    else if (ev.type === "exit") winGame();
  }
}

// ---------- state ----------
var cv = $("mazeCv"), g2 = cv.getContext("2d");
var snake, prevSnake, lastDir, eaten, hits, hp, pellets, paused, started, won, over;
var growOnClose = false, pendingGameOver = false, shakeT = 0, flashT = 0, stepAt = 0, lastTs = 0;
var particles = [];
function hearts() { var h = ""; for (var i = 0; i < 3; i++) h += i < hp ? "♥" : "♡"; return h; }
function updateHud() {
  $("hudPoint").textContent = won ? "THE END · HOW PHONES CHANGED" :
    "CHAPTER " + Math.min(eaten + 1, 9) + " / 9 · " + YEARS[Math.min(eaten, 8)];
}
var WALL_TINT = {}, ROUTE_TINT = [];
function eraLerp(stops, t) {
  for (var i = 1; i < stops.length; i++) {
    if (t <= stops[i][0] || i === stops.length - 1) {
      var a = stops[i - 1], b = stops[i], f = (t - a[0]) / Math.max(0.0001, b[0] - a[0]);
      f = Math.max(0, Math.min(1, f));
      return [Math.round(a[1][0] + (b[1][0] - a[1][0]) * f), Math.round(a[1][1] + (b[1][1] - a[1][1]) * f), Math.round(a[1][2] + (b[1][2] - a[1][2]) * f)];
    }
  }
}
function buildEraTints() {
  var n = Math.max(1, route.length - 1);
  ROUTE_TINT = route.map(function (c, i) {
    var rgb = eraLerp([[0, [255, 186, 102]], [0.5, [196, 204, 118]], [1, [61, 220, 132]]], i / n);
    return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ",.07)";
  });
  WALL_TINT = {};
  Object.keys(WALLS).forEach(function (k) {
    var p = k.split(","), wx = +p[0], wy = +p[1], best = 1e18, bi = 0;
    for (var i = 0; i < route.length; i++) {
      var dx = route[i].x - wx, dy = route[i].y - wy, d = dx * dx + dy * dy;
      if (d < best) { best = d; bi = i; }
    }
    var t = bi / n;
    var base = eraLerp([[0, [58, 47, 25]], [0.5, [37, 47, 27]], [1, [27, 66, 39]]], t);
    var hi = eraLerp([[0, [255, 206, 132]], [1, [150, 255, 190]]], t);
    var ha = (0.30 + (0.20 - 0.30) * t).toFixed(3);
    WALL_TINT[k] = ["rgb(" + base[0] + "," + base[1] + "," + base[2] + ")", "rgba(" + hi[0] + "," + hi[1] + "," + hi[2] + "," + ha + ")"];
  });
}
function resetGame() {
  snake = [{ x: SPAWN.x, y: SPAWN.y }]; prevSnake = [{ x: SPAWN.x, y: SPAWN.y }];
  lastDir = { x: 1, y: 0 }; eaten = 0; hits = 0; hp = 3;
  paused = false; won = false; over = false; growOnClose = false; pendingGameOver = false;
  var built = buildRoute(); route = built.cells; EVENTS = built.events; routeIdx = 0; CHAPTER_POS = built.chapterPos;
  buildEraTints();
  placeEnemies(); pellets = buildPellets(); particles = [];
  buildTimeline();
  setTimeout(startWalk, 700);
  updateHud();
  showLowerThird(0);
}
function startGame() { if (started) return; started = true; makeGrain(); resetGame(); requestAnimationFrame(frame); }
function buildTimeline() {
  var bar = $("tlTicks"); if (!bar || !route.length) return;
  bar.innerHTML = "";
  var total = route.length - 1;
  Object.keys(EVENTS).forEach(function (k) {
    var ev = EVENTS[k];
    if (ev.type === "exit") return;
    var t = document.createElement("span");
    t.className = "tl-tick" + (ev.type === "setback" ? " red" : "");
    t.style.left = (k / total * 100).toFixed(2) + "%";
    t.innerHTML = ev.type === "chapter" ? "<i></i><em>" + YEARS[ev.i] + "</em>" : "<i></i>";
    bar.appendChild(t);
  });
}

// ---------- sheets ----------
function openSheet(html) { paused = true; hideLowerThird(); var sh = $("sheet"); sh.className = "sheet"; sh.innerHTML = html; $("sheetWrap").hidden = false; }
function closeSheet() {
  $("sheetWrap").hidden = true; paused = false;
  if (growOnClose) {
    growOnClose = false;
    snake.push({ x: snake[snake.length - 1].x, y: snake[snake.length - 1].y });
    burst(snake[snake.length - 1], "#3ddc84", 14);
  }
  if (pendingGameOver) { pendingGameOver = false; gameOver(); return; }
  updateHud();
  if (!won && !over && eaten < 9) showLowerThird(eaten);
  if (!won && !over && route.length) setTimeout(startWalk, 350);
}
var DECKS = [
  "FIRST CLEAR SPEECH SENT THROUGH A WIRE",
  "EVERY CALL CONNECTED BY HAND AT THE EXCHANGE",
  "NOW YOU DIAL IT YOURSELF \u2014 BUT THE PHONE STAYS AT HOME",
  "THE TELEPHONE TAKES TO THE ROAD",
  "A TELEPHONE YOU CAN CARRY \u2014 AT A PRICE",
  "MESSAGES IN 160 CHARACTERS \u2014 AND A GAME CALLED SNAKE",
  "THE TELEPHONE LEARNS TO TAKE PHOTOGRAPHS",
  "THE TELEPHONE BECOMES A COMPUTER",
  "MANY DEVICES IN ONE SMALL PHONE"
];
var DATELINES = ["BOSTON, 1876", "MONTREAL, LATE 1800s", "THE HOME, 1900s", "ON THE ROAD, 1946", "NEW YORK, 1973", "IN THE POCKET, THE 1990s", "JAPAN, 2000", "MACWORLD, 2007", "IN OUR HANDS, TODAY"];
function chapterSheet(i) {
  var c = DATA.chapters[i];
  var era = i < 7 ? "era-bw" : "era-color";
  var imgs = c.imgs || (c.img ? [c.img] : []);
  var fig = imgs.length ?
    '<figure class="np-photo ' + era + '"><div class="np-band n' + imgs.length + '">' + imgs.map(function (s) { return '<div class="np-frame"><img src="' + s + '" alt=""></div>'; }).join("") + '</div><figcaption>' + c.cap + '</figcaption></figure>'
    : '<figure class="np-photo"><div class="np-nophoto">' + c.cap + '</div></figure>';
  var body = c.paras.map(function (t, k) {
    return "<p>" + (k === 0 ? '<span class="np-dl">' + DATELINES[i] + " \u2014</span> " : "") + t + "</p>";
  }).join("");
  return '<div class="news-paper">' +
    '<div class="np-folio"><span>FOUNDED 1876</span><span>HOW PHONES CHANGED</span><span>No. ' + (i + 1) + '</span></div>' +
    '<div class="np-mast"><h1>THE EVENING RECORD</h1></div>' +
    '<div class="np-sub"><span>' + PLACES[i] + '</span><span>' + YEARS[i] + ' EDITION</span><span>CHAPTER ' + (i + 1) + ' OF 9</span></div>' +
    '<h2 class="np-head">' + c.title + '</h2>' +
    '<p class="np-deck">' + DECKS[i] + '</p>' +
    '<p class="np-byline">BY SIYUAN CHEN</p>' +
    fig +
    '<div class="np-cols">' + body + '</div>' +
    '<p class="np-strip">' + c.strip + '</p>' +
    '<p class="np-end">' + (i === 8 ? "\u2014 END OF THIS EDITION \u2014" : "\u2014 CONTINUED ON THE FOLLOWING PAGE \u2014") + '</p>' +
    '<div class="np-btnrow"><button class="np-btn" id="shClose">CONTINUE \u2192</button></div>' +
    '</div>';
}
var EXTRA_DECKS = {
  "IRIDIUM": "PHONES ON SATELLITES \u2014 AND ALMOST NO USERS",
  "NOTE7": "BATTERY FIRES FORCE A FULL RECALL"
};
function setbackSheet(s) {
  var yr = s.name.split("\u2014")[0].replace("SETBACK \u00b7 ", "").trim();
  var nm = s.name.split("\u2014")[1] ? s.name.split("\u2014")[1].trim() : s.name;
  var deck = EXTRA_DECKS[nm] || "A SETBACK IN THE STORY";
  return '<div class="news-paper extra">' +
    '<div class="np-folio"><span>THE EVENING RECORD</span><span>HOW PHONES CHANGED</span><span>' + yr + '</span></div>' +
    '<div class="np-extra-band">EXTRA \u2014 EXTRA \u2014 EXTRA</div>' +
    '<h2 class="np-head">' + nm + '</h2>' +
    '<p class="np-deck">' + deck + '</p>' +
    '<div class="np-xbody"><p>' + s.text + '</p></div>' +
    '<div class="np-btnrow"><button class="np-btn" id="shClose">KEEP GOING \u2192</button></div>' +
    '</div>';
}
function endSheet() {
  var s = DATA.sources;
  var block = '<p class="sh-end">THE END</p><p class="sh-place">HOW PHONES CHANGED</p>' +
    '<div class="sh-credits"><p>PHOTOS — WIKIMEDIA COMMONS (EACH PHOTO IS CREDITED UNDER THE PHOTO)</p>' +
    '<p>NARRATION — AI VOICE</p>' +
    '<p>STORY, WEBSITE AND RECORDING — SIYUAN CHEN</p></div>' +
    '<p>One head, nine parts. Every part is one part of the story of the phone.</p>';
  var srcs = '<div class="sh-sources"><p class="sh-src-head">SOURCES</p>' +
    s.paras.map(function (p) { return "<p>" + p + "</p>"; }).join("") + '</div>';
  return '<p class="sh-strip">' + s.strip + '</p><div class="sh-text end">' +
    '<div class="credits-view"><div class="credits-roll">' + block + '</div></div>' + srcs +
    '<button class="sh-btn" id="shAgain">↺ START AGAIN</button> <button class="sh-btn" id="shPhone">CLOSE THE PHONE ▸</button></div>';
}
var tcTimer = null;
function intertitle(html, ms, done) {
  paused = true;
  var tc = $("titleCard");
  tc.innerHTML = html; tc.hidden = false;
  requestAnimationFrame(function () { tc.classList.add("on"); });
  var finish = function () {
    if (tcTimer) { clearTimeout(tcTimer); tcTimer = null; }
    tc.classList.remove("on"); tc.hidden = true;
    tc.removeEventListener("click", finish);
    done();
  };
  tc.addEventListener("click", finish);
  tcTimer = setTimeout(finish, ms);
}
function chapterTitle(i) {
  return '<p class="tc-kicker">CHAPTER ' + (i + 1) + ' OF 9</p><h2 class="tc-title">' + DATA.chapters[i].title + '</h2>' +
    '<p class="tc-year">' + YEARS[i] + ' · ' + PLACES[i] + '</p><div class="tc-rule"></div>';
}
function setbackTitle(s) {
  var yr = s.name.split("—")[0].replace("SETBACK · ", "").trim();
  var nm = s.name.split("—")[1] ? s.name.split("—")[1].trim() : s.name;
  return '<p class="tc-kicker red">SETBACK</p><h2 class="tc-title">' + nm + '</h2>' +
    '<p class="tc-year">' + yr + '</p><div class="tc-rule red"></div>';
}
function makeGrain() {
  var fx = $("filmFx"); if (!fx || fx.style.backgroundImage) return;
  var c = document.createElement("canvas"); c.width = c.height = 140;
  var x = c.getContext("2d"), im = x.createImageData(140, 140);
  for (var i = 0; i < im.data.length; i += 4) {
    var v = Math.random() * 255 | 0, a = Math.random() * 44;
    im.data[i] = v; im.data[i + 1] = v; im.data[i + 2] = v; im.data[i + 3] = a;
  }
  x.putImageData(im, 0, 0);
  fx.style.backgroundImage = "url(" + c.toDataURL() + ")";
}
var ltTimer = null;
function showLowerThird(i) {
  var lt = $("lowerThird"); if (!lt) return;
  if (ltTimer) clearTimeout(ltTimer);
  lt.innerHTML = '<div class="lt-y">' + YEARS[i] + '</div><div class="lt-p">' + PLACES[i] + '</div>';
  lt.classList.add("on");
  ltTimer = setTimeout(function () { lt.classList.remove("on"); }, 3600);
}
function hideLowerThird() {
  var lt = $("lowerThird"); if (!lt) return;
  if (ltTimer) { clearTimeout(ltTimer); ltTimer = null; }
  lt.classList.remove("on");
}
var pbTimer = null;
function photoBeat(i, done) {
  var c = DATA.chapters[i];
  var src = c.imgs ? c.imgs[0] : c.img;
  if (!src) { done(); return; }
  paused = true;
  var pb = $("photoBeat");
  pb.className = i < 7 ? "era-bw" : "era-color";
  $("pbImg").src = src;
  $("pbCam").textContent = c.cam || "";
  $("pbCap").textContent = c.cap;
  pb.hidden = false;
  requestAnimationFrame(function () { pb.classList.add("on"); });
  var finish = function () {
    if (pbTimer) { clearTimeout(pbTimer); pbTimer = null; }
    pb.classList.remove("on"); pb.hidden = true;
    pb.removeEventListener("click", finish);
    done();
  };
  pb.addEventListener("click", finish);
  pbTimer = setTimeout(finish, 2100);
}
function gameOverSheet() {
  return '<div class="sh-hit"><p class="sh-strip red">✖ SIGNAL LOST</p><h2 class="sh-down">The Snake Is Down</h2>' +
    '<p class="sh-hittext">The snake lost all its health. The setbacks were too many this time. Chapters eaten: ' + eaten + ' / 9.</p>' +
    '<button class="sh-btn red" id="shAgain">↺ TRY AGAIN</button></div>';
}

// ---------- events ----------
function burst(cell, color, n) {
  for (var i = 0; i < n; i++) particles.push({ x: (cell.x + .5) * CELL, y: (cell.y + .5) * CELL,
    vx: (Math.random() - .5) * 190, vy: (Math.random() - .5) * 190, life: 1, color: color });
}
function eatChapter(i) {
  burst(snake[0], "#3ddc84", 22);
  intertitle(chapterTitle(i), 1500, function () {
    photoBeat(i, function () {
      openSheet(chapterSheet(i));
      $("sheet").classList.add("news");
      growOnClose = true; eaten++;
      $("shClose").addEventListener("click", closeSheet);
    });
  });
}
function biteEnemy(s) {
  hits++; s.gone = true; flashT = 1; shakeT = 30;
  burst(snake[0], "#ff5147", 26);
  var st = $("hitStamp"); st.classList.add("show");
  setTimeout(function () { st.classList.remove("show"); }, 950);
  intertitle(setbackTitle(s), 1250, function () {
    openSheet(setbackSheet(s));
    $("sheet").classList.add("news");
    $("sheet").classList.add("extra-sheet");
    $("shClose").addEventListener("click", closeSheet);
    updateHud();
  });
}
function gameOver() {
  over = true; paused = true;
  openSheet(gameOverSheet());
  $("shAgain").addEventListener("click", function () { $("sheetWrap").hidden = true; resetGame(); });
}
function winGame() {
  won = true; paused = true; burst(snake[0], "#3ddc84", 40);
  openSheet(endSheet());
  $("sheet").classList.add("film-end");
  $("shAgain").addEventListener("click", function () { $("sheetWrap").hidden = true; resetGame(); });
  $("shPhone").addEventListener("click", closeToPhone);
  updateHud();
}
function closeToPhone() {
  $("sheetWrap").hidden = true;
  streamDoneFlag = false; streamIdx = 0;
  if (streamTimer) { clearInterval(streamTimer); streamTimer = null; }
  if (!window.entryClosePhone) { resetGame(); return; }
  document.body.classList.remove("phase-journey");
  $("game").hidden = true;
  phase = "phone";
  $("entry").hidden = false;
  window.entryClosePhone(function () {});
}

// ---------- one step per key press; the snake never moves on its own ----------
function step(nd) {
  var head = { x: snake[0].x + nd.x, y: snake[0].y + nd.y };
  if (isWall(head.x, head.y)) { shakeT = Math.max(shakeT, 6); return; }
  prevSnake = snake.map(function (s) { return { x: s.x, y: s.y }; });
  stepAt = performance.now();
  lastDir = nd;
  snake.unshift(head); snake.pop();
  var k = head.x + "," + head.y;
  if (pellets[k]) { delete pellets[k]; burst(head, "#3ddc84", 3); }
  var cp = CHAPTER_POS[eaten];
  if (eaten < 9 && cp && head.x === cp[0] && head.y === cp[1]) { eatChapter(eaten); return; }
  var en = enemyAt(head.x, head.y);
  if (en) { biteEnemy(en); return; }
  if (eaten >= 9 && head.x === EXIT.x && head.y === EXIT.y) { winGame(); return; }
}
window.addEventListener("keydown", function (e) {
  if (phase !== "journey" || !started) return;
  if (paused && (e.code === "Space" || e.code === "Enter")) { e.preventDefault(); closeSheet(); }
});

// ---------- rendering ----------
function rr(x, y, w, h, r) { g2.beginPath(); g2.moveTo(x + r, y); g2.arcTo(x + w, y, x + w, y + h, r); g2.arcTo(x + w, y + h, x, y + h, r); g2.arcTo(x, y + h, x, y, r); g2.arcTo(x, y, x + w, y, r); g2.closePath(); }
function frame(ts) {
  requestAnimationFrame(frame);
  if (!started) return;
  var dt = Math.min(80, ts - lastTs); lastTs = ts;
  var t = Math.min(1, (ts - stepAt) / 105);
  g2.clearRect(0, 0, cv.width, cv.height);
  g2.save();
  if (shakeT > 0) { shakeT--; g2.translate((Math.random() - .5) * 9, (Math.random() - .5) * 9); }
  g2.fillStyle = "#070a08"; g2.fillRect(-12, -12, cv.width + 24, cv.height + 24);
  // era wash along the road itself: warm and dim at 1876, clean green today
  for (var wi = 0; wi < route.length; wi++) {
    var wc = route[wi];
    rr(wc.x * CELL + 1, wc.y * CELL + 1, CELL - 2, CELL - 2, 6);
    g2.fillStyle = ROUTE_TINT[wi] || "rgba(61,220,132,.05)"; g2.fill();
  }
  // the walked route leaves a thin drawn line on the map - a trail, not a fill
  if (routeIdx > 0) {
    g2.beginPath();
    for (var ti = 0; ti <= routeIdx && ti < route.length; ti++) {
      var tc = route[ti], tx = (tc.x + .5) * CELL, ty = (tc.y + .5) * CELL;
      if (ti === 0) g2.moveTo(tx, ty); else g2.lineTo(tx, ty);
    }
    g2.strokeStyle = "rgba(61,220,132,.16)"; g2.lineWidth = 3;
    g2.lineJoin = "round"; g2.lineCap = "round"; g2.stroke();
  }
  // (the old dot terrain was removed in v22 — chapters are the only green dots)
  Object.keys(pellets).forEach(function (k) {
    var d = pellets[k];
    g2.beginPath(); g2.arc(d.x, d.y, d.r, 0, 6.2832);
    g2.fillStyle = "rgba(61,220,132," + (0.20 + d.r * 0.075) + ")"; g2.fill();
  });
  // exit
  var ex = EXIT.x * CELL, ey = EXIT.y * CELL, open = eaten >= 9;
  g2.fillStyle = open ? "rgba(61,220,132,.20)" : "rgba(120,130,122,.10)"; g2.fillRect(ex + 2, ey + 2, CELL - 4, CELL - 4);
  g2.strokeStyle = open ? "#3ddc84" : "#5a665c"; g2.lineWidth = 2; g2.strokeRect(ex + 3, ey + 3, CELL - 6, CELL - 6);
  g2.fillStyle = open ? "#3ddc84" : "#77847a"; g2.font = "700 8.5px monospace"; g2.textAlign = "center";
  g2.fillText(open ? "EXIT →" : (9 - eaten) + " LEFT", ex + CELL / 2, ey + CELL / 2 + 3);
  // enemy snakes (the setbacks)
  SETBACKS.forEach(function (s) {
    if (s.gone || !s.cells) return;
    var pulse = .82 + Math.sin(ts / 260 + s.x) * .18;
    var ax = s.cells[3].x - s.cells[0].x, ay = s.cells[3].y - s.cells[0].y;
    var al = Math.sqrt(ax * ax + ay * ay) || 1; ax /= al; ay /= al;
    var px = -ay, py = ax;
    s.cells.forEach(function (c, j) {
      var wob = Math.sin(ts / 170 + j * 0.95 + s.x * 1.3 + s.y) * (1.6 + j * 1.35);
      var ix = (c.x + .5) * CELL + px * wob, iy = (c.y + .5) * CELL + py * wob;
      if (j === 0) {
        g2.beginPath(); g2.arc(ix, iy, 12.5, 0, 6.2832);
        g2.fillStyle = "rgba(255,81,71," + pulse + ")"; g2.fill();
        var nx = s.cells[1] ? Math.sign(s.cells[1].x - c.x) : 0, ny = s.cells[1] ? Math.sign(s.cells[1].y - c.y) : 0;
        g2.fillStyle = "#1c0503";
        g2.beginPath(); g2.arc(ix - nx * 4 - ny * 5, iy - ny * 4 + nx * 5, 2.2, 0, 6.2832); g2.fill();
        g2.beginPath(); g2.arc(ix - nx * 4 + ny * 5, iy - ny * 4 - nx * 5, 2.2, 0, 6.2832); g2.fill();
      } else {
        rr(ix - 10.5, iy - 10.5, 21, 21, 6);
        g2.fillStyle = j % 2 ? "rgba(214,48,49,.9)" : "rgba(165,32,36,.9)"; g2.fill();
      }
    });
  });
  // walls: chunky blocks with a lit top edge, like the reference maze
  Object.keys(WALLS).forEach(function (k) {
    var p = k.split(","), x = +p[0] * CELL, y = +p[1] * CELL;
    var wt = WALL_TINT[k] || ["#1b3021", "rgba(140,255,180,.16)"];
    rr(x + 1, y + 1, CELL - 2, CELL - 2, 6); g2.fillStyle = wt[0]; g2.fill();
    g2.fillStyle = wt[1]; g2.fillRect(x + 4, y + 2.5, CELL - 8, 3);
    g2.fillStyle = "rgba(0,0,0,.28)"; g2.beginPath(); g2.arc(x + CELL / 2, y + CELL / 2 + 3, 2.2, 0, 6.2832); g2.fill();
  });
  // chapters: one green dot each (steps 1-9), small number beside the dot
  CHAPTER_POS.forEach(function (p, i) {
    if (i < eaten) return;
    var cxp = (p[0] + .5) * CELL, cyp = (p[1] + .5) * CELL;
    var isNext = i === eaten;
    var pulse = isNext ? Math.sin(ts / 240) * 1.6 : 0;
    g2.beginPath(); g2.arc(cxp, cyp, 11 + pulse, 0, 6.2832);
    g2.fillStyle = isNext ? "#3ddc84" : "rgba(61,220,132,.55)"; g2.fill();
    g2.fillStyle = isNext ? "#3ddc84" : "rgba(61,220,132,.5)";
    g2.font = "700 13px monospace"; g2.textAlign = "left";
    g2.fillText(String(i + 1).padStart(2, "0"), cxp + 16, cyp + 4.5);
    g2.textAlign = "center";
  });
  // our snake (interpolated between steps)
  for (var i = snake.length - 1; i >= 0; i--) {
    var cur = snake[i], prv = prevSnake[Math.min(i, prevSnake.length - 1)] || cur;
    var ix = (prv.x + (cur.x - prv.x) * t + .5) * CELL, iy = (prv.y + (cur.y - prv.y) * t + .5) * CELL;
    if (i === 0) {
      g2.beginPath(); g2.arc(ix, iy, 13, 0, 6.2832); g2.fillStyle = "#57e389"; g2.fill();
      g2.strokeStyle = "#0d2817"; g2.lineWidth = 2; g2.stroke();
      var exx = lastDir.x * 4.5, eyy = lastDir.y * 4.5, px = -lastDir.y * 5.5, py = lastDir.x * 5.5;
      g2.fillStyle = "#06130b";
      g2.beginPath(); g2.arc(ix + exx + px, iy + eyy + py, 2.4, 0, 6.2832); g2.fill();
      g2.beginPath(); g2.arc(ix + exx - px, iy + eyy - py, 2.4, 0, 6.2832); g2.fill();
    } else {
      rr(ix - 11.5, iy - 11.5, 23, 23, 7);
      g2.fillStyle = i % 2 ? "#2fbf71" : "#28a862"; g2.fill();
      g2.strokeStyle = "rgba(6,19,11,.5)"; g2.lineWidth = 1; g2.stroke();
      if (i <= eaten) { g2.fillStyle = "#06130b"; g2.font = "800 11px monospace"; g2.textAlign = "center"; g2.fillText(String(i), ix, iy + 4); }
    }
  }
  // particles
  particles = particles.filter(function (p) { return p.life > 0; });
  particles.forEach(function (p) {
    p.x += p.vx * dt / 1000; p.y += p.vy * dt / 1000; p.vx *= .92; p.vy *= .92; p.life -= dt / 550;
    g2.globalAlpha = Math.max(0, p.life); g2.fillStyle = p.color; g2.beginPath(); g2.arc(p.x, p.y, 3, 0, 6.2832); g2.fill(); g2.globalAlpha = 1;
  });
  g2.restore();
  var tlP = route.length > 1 ? (routeIdx / (route.length - 1) * 100) : 0;
  if (tlP !== frame._tlP) {
    frame._tlP = tlP;
    var tld = $("tlDot"), tlf = $("tlFill");
    if (tld) tld.style.left = tlP + "%";
    if (tlf) tlf.style.width = tlP + "%";
  }
  if (flashT > 0) { flashT = Math.max(0, flashT - dt / 450); $("flash").style.opacity = String(flashT * .55); }
}

// ---------- v29: the intro is a real Tetris well ----------
// Whole tetromino pieces (the 7 classic shapes, classic colours) fall
// from the top of a framed well one after another and stack up until
// the stack spells the project description. The tiling was solved
// offline: the pieces cover the letters exactly. A NEXT preview and a
// score counter sit in the strip above the well, like the game.
// Click during the build: finish at once. Click when done: the maze.
(function () {
  var PLAN_RAW = ["M,244,13", "I,231,13,232,13,233,13,234,13", "I,218,13,219,13,220,13,221,13", "M,98,13", "M,340,13", "M,91,13", "M,272,13", "M,101,13", "M,216,13", "I,386,13,387,13,388,13,389,13", "M,73,13", "D,391,13,390,13", "D,125,13,124,13", "I,282,13,283,13,284,13,285,13", "M,127,13", "M,325,13", "D,399,13,398,13", "M,451,13", "M,440,13", "M,264,13", "M,433,13", "M,379,13", "M,373,13", "D,113,13,112,13", "J,235,13,235,12,234,12,233,12", "O,80,12,81,12,80,13,81,13", "O,332,12,333,12,332,13,333,13", "O,462,12,463,12,462,13,463,13", "J,245,12,245,13,246,13,247,13", "S,243,12,244,12,242,13,243,13", "O,60,12,61,12,60,13,61,13", "O,86,12,87,12,86,13,87,13", "S,90,12,91,12,89,13,90,13", "T,170,13,169,13,168,13,169,12", "T,175,13,174,13,173,13,174,12", "S,100,12,101,12,99,13,100,13", "D,88,13,88,12", "L,230,13,232,12,231,12,230,12", "Z,170,12,171,12,171,13,172,13", "O,258,12,259,12,258,13,259,13", "D,136,13,136,12", "O,458,12,459,12,458,13,459,13", "J,158,12,158,13,159,13,160,13", "O,256,12,257,12,256,13,257,13", "O,254,12,255,12,254,13,255,13", "S,450,12,451,12,449,13,450,13", "O,192,12,193,12,192,13,193,13", "S,123,12,124,12,122,13,123,13", "O,368,12,369,12,368,13,369,13", "D,313,13,313,12", "T,125,12,126,12,127,12,126,13", "T,448,13,447,13,446,13,447,12", "O,280,12,281,12,280,13,281,13", "J,400,13,400,12,399,12,398,12", "O,401,12,402,12,401,13,402,13", "D,403,12,403,13", "O,278,12,279,12,278,13,279,13", "J,161,12,161,13,162,13,163,13", "L,117,12,115,13,116,13,117,13", "L,114,13,116,12,115,12,114,12", "T,377,12,378,12,379,12,378,13", "Z,375,12,376,12,376,13,377,13", "Z,373,12,374,12,374,13,375,13", "O,320,12,321,12,320,13,321,13", "S,109,12,110,12,108,13,109,13", "S,111,12,112,12,110,13,111,13", "J,24,13,25,13,25,12,25,11", "L,413,13,412,11,412,12,412,13", "J,32,13,33,13,33,12,33,11", "J,200,13,201,13,201,12,201,11", "S,340,12,340,11,341,13,341,12", "J,313,11,312,11,312,12,312,13", "L,136,11,137,13,137,12,137,11", "T,273,11,273,12,273,13,272,12", "T,217,11,217,12,217,13,216,12", "Z,324,13,324,12,325,12,325,11", "T,441,11,441,12,441,13,440,12", "L,41,13,40,11,40,12,40,13", "T,265,11,265,12,265,13,264,12", "L,361,13,360,11,360,12,360,13", "T,432,13,432,12,432,11,433,12", "L,277,13,276,11,276,12,276,13", "I,72,13,72,12,72,11,72,10", "I,296,13,296,12,296,11,296,10", "I,297,13,297,12,297,11,297,10", "I,304,13,304,12,304,11,304,10", "I,305,13,305,12,305,11,305,10", "I,288,13,288,12,288,11,288,10", "I,289,13,289,12,289,11,289,10", "I,372,13,372,12,372,11,372,10", "I,218,12,219,12,220,12,221,12", "M,168,12", "D,98,12,99,12", "D,247,12,246,12", "M,24,12", "M,89,12", "D,173,12,172,12", "I,388,12,389,12,390,12,391,12", "M,122,12", "M,175,12", "D,387,12,386,12", "I,282,12,283,12,284,12,285,12", "D,449,12,448,12", "D,163,12,162,12", "M,242,12", "M,446,12", "M,113,12", "S,160,11,161,11,159,12,160,12", "J,33,10,32,10,32,11,32,12", "L,40,10,41,12,41,11,41,10", "Z,108,12,108,11,109,11,109,10", "I,200,12,200,11,200,10,200,9", "I,73,12,73,11,73,10,73,9", "I,413,12,413,11,413,10,413,9", "I,361,12,361,11,361,10,361,9", "I,277,12,277,11,277,10,277,9", "M,384,11", "M,464,11", "M,381,11", "M,85,11", "M,229,11", "D,60,11,61,11", "M,241,11", "M,261,11", "M,369,11", "M,373,11", "O,96,10,97,10,96,11,97,11", "O,78,10,79,10,78,11,79,11", "O,444,10,445,10,444,11,445,11", "O,330,10,331,10,330,11,331,11", "D,452,11,452,10", "O,248,10,249,10,248,11,249,11", "O,460,10,461,10,460,11,461,11", "O,128,10,129,10,128,11,129,11", "O,222,10,223,10,222,11,223,11", "D,396,11,396,10", "D,253,11,253,10", "O,404,10,405,10,404,11,405,11", "O,176,10,177,10,176,11,177,11", "D,236,11,236,10", "D,103,10,103,11", "D,321,11,321,10", "Z,380,11,380,10,381,10,381,9", "T,24,11,24,10,24,9,25,10", "L,452,9,453,11,453,10,453,9", "L,396,9,397,11,397,10,397,9", "S,464,10,464,9,465,11,465,10", "T,272,11,272,10,272,9,273,10", "T,228,11,228,10,228,9,229,10", "S,340,10,340,9,341,11,341,10", "T,84,11,84,10,84,9,85,10", "J,253,9,252,9,252,10,252,11", "T,240,11,240,10,240,9,241,10", "J,325,9,324,9,324,10,324,11", "J,456,11,457,11,457,10,457,9", "L,121,11,120,9,120,10,120,11", "L,393,11,392,9,392,10,392,11", "J,217,9,216,9,216,10,216,11", "T,440,11,440,10,440,9,441,10", "T,433,9,433,10,433,11,432,10", "Z,260,11,260,10,261,10,261,9", "Z,368,11,368,10,369,10,369,9", "J,103,9,102,9,102,10,102,11", "I,385,11,385,10,385,9,385,8", "I,93,11,93,10,93,9,93,8", "I,92,11,92,10,92,9,92,8", "I,192,11,192,10,192,9,192,8", "I,193,11,193,10,193,9,193,8", "I,237,11,237,10,237,9,237,8", "I,264,11,264,10,264,9,264,8", "I,320,11,320,10,320,9,320,8", "M,201,10", "M,325,10", "M,412,10", "M,121,10", "M,137,10", "M,217,10", "D,313,10,313,9", "J,457,8,456,8,456,9,456,10", "T,136,10,136,9,136,8,137,9", "J,60,10,61,10,61,9,61,8", "J,361,8,360,8,360,9,360,10", "L,161,10,160,8,160,9,160,10", "J,313,8,312,8,312,9,312,10", "T,373,8,373,9,373,10,372,9", "J,277,8,276,8,276,9,276,10", "I,384,10,384,9,384,8,384,7", "I,393,10,393,9,393,8,393,7", "I,265,10,265,9,265,8,265,7", "I,108,10,108,9,108,8,108,7", "M,380,9", "M,444,9", "M,85,9", "M,341,9", "M,297,9", "M,229,9", "M,60,9", "M,236,9", "D,288,9,289,9", "M,321,9", "D,465,9,465,8", "O,176,8,177,8,176,9,177,9", "O,76,8,77,8,76,9,77,9", "L,461,9,460,7,460,8,460,9", "J,73,7,72,7,72,8,72,9", "L,200,7,201,9,201,8,201,7", "L,405,9,404,7,404,8,404,9", "Z,296,9,296,8,297,8,297,7", "J,40,9,41,9,41,8,41,7", "J,304,9,305,9,305,8,305,7", "T,121,7,121,8,121,9,120,8", "S,272,8,272,7,273,9,273,8", "T,241,7,241,8,241,9,240,8", "Z,260,9,260,8,261,8,261,7", "L,329,9,328,7,328,8,328,9", "Z,368,9,368,8,369,8,369,7", "J,110,7,109,7,109,8,109,9", "I,25,9,25,8,25,7,25,6", "I,32,9,32,8,32,7,32,6", "I,33,9,33,8,33,7,33,6", "I,445,9,445,8,445,7,445,6", "I,412,9,412,8,412,7,412,6", "I,432,9,432,8,432,7,432,6", "I,225,9,225,8,225,7,225,6", "I,224,9,224,8,224,7,224,6", "I,161,9,161,8,161,7,161,6", "I,441,9,441,8,441,7,441,6", "D,381,8,380,8", "M,73,8", "M,200,8", "M,413,8", "M,405,8", "M,252,8", "M,329,8", "M,324,8", "M,289,8", "M,103,8", "O,340,7,341,7,340,8,341,8", "O,228,7,229,7,228,8,229,8", "D,40,8,40,7", "D,392,7,392,8", "O,396,7,397,7,396,8,397,8", "D,84,8,84,7", "D,60,7,60,8", "J,440,8,440,7,439,7,438,7", "L,325,8,327,7,326,7,325,7", "L,460,6,461,8,461,7,461,6", "Z,464,8,464,7,465,7,465,6", "L,84,6,85,8,85,7,85,6", "T,137,6,137,7,137,8,136,7", "Z,433,8,433,7,434,7,434,6", "T,253,6,253,7,253,8,252,7", "J,216,8,217,8,217,7,217,6", "T,236,8,236,7,236,6,237,7", "T,288,8,288,7,288,6,289,7", "L,320,6,321,8,321,7,321,6", "I,24,8,24,7,24,6,24,5", "I,444,8,444,7,444,6,444,5", "I,452,8,452,7,452,6,452,5", "I,453,8,453,7,453,6,453,5", "I,304,8,304,7,304,6,304,5", "I,372,8,372,7,372,6,372,5", "I,102,8,102,7,102,6,102,5", "I,280,7,281,7,282,7,283,7", "D,28,7,29,7", "I,373,7,374,7,375,7,376,7", "D,295,7,296,7", "I,111,7,112,7,113,7,114,7", "M,216,7", "M,240,7", "M,62,7", "M,273,7", "M,260,7", "M,160,7", "M,264,7", "M,368,7", "M,199,7", "I,315,7,316,7,317,7,318,7", "I,74,7,75,7,76,7,77,7", "J,175,7,175,6,174,6,173,6", "J,172,6,172,7,173,7,174,7", "O,170,6,171,6,170,7,171,7", "J,67,7,67,6,66,6,65,6", "J,64,6,64,7,65,7,66,7", "O,78,6,79,6,78,7,79,7", "L,379,6,377,7,378,7,379,7", "J,115,7,115,6,114,6,113,6", "L,294,7,296,6,295,6,294,6", "D,63,6,63,7", "D,120,7,120,6", "J,435,6,435,7,436,7,437,7", "T,362,7,361,7,360,7,361,6", "J,329,6,329,7,330,7,331,7", "T,314,7,313,7,312,7,313,6", "Z,362,6,363,6,363,7,364,7", "L,367,7,369,6,368,6,367,6", "O,365,6,366,6,365,7,366,7", "T,198,7,197,7,196,7,197,6", "O,194,6,195,6,194,7,195,7", "Z,318,6,319,6,319,7,320,7", "L,279,6,277,7,278,7,279,7", "L,276,7,278,6,277,6,276,6", "L,269,7,268,5,268,6,268,7", "L,384,5,385,7,385,6,385,5", "J,456,7,457,7,457,6,457,5", "L,404,5,405,7,405,6,405,5", "T,61,7,61,6,61,5,62,6", "L,193,7,192,5,192,6,192,7", "J,325,5,324,5,324,6,324,7", "I,413,7,413,6,413,5,413,4", "I,93,7,93,6,93,5,93,4", "I,92,7,92,6,92,5,92,4", "I,103,7,103,6,103,5,103,4", "I,280,6,281,6,282,6,283,6", "I,374,6,375,6,376,6,377,6", "M,29,6", "D,340,6,341,6", "M,378,6", "M,384,6", "I,109,6,110,6,111,6,112,6", "M,228,6", "M,396,6", "M,404,6", "I,436,6,437,6,438,6,439,6", "M,121,6", "M,440,6", "M,261,6", "D,330,6,331,6", "M,360,6", "I,325,6,326,6,327,6,328,6", "I,198,6,199,6,200,6,201,6", "I,314,6,315,6,316,6,317,6", "M,312,6", "M,364,6", "M,196,6", "I,74,6,75,6,76,6,77,6", "O,240,5,241,5,240,6,241,6", "D,393,5,393,6", "D,272,5,272,6", "O,72,5,73,5,72,6,73,6", "L,268,4,269,6,269,5,269,4", "L,41,6,40,4,40,5,40,6", "T,28,6,28,5,28,4,29,5", "S,432,5,432,4,433,6,433,5", "S,228,5,228,4,229,6,229,5", "J,264,6,265,6,265,5,265,4", "T,136,6,136,5,136,4,137,5", "S,396,5,396,4,397,6,397,5", "T,216,6,216,5,216,4,217,5", "Z,252,6,252,5,253,5,253,4", "Z,260,6,260,5,261,5,261,4", "S,236,5,236,4,237,6,237,5", "L,272,4,273,6,273,5,273,4", "T,160,6,160,5,160,4,161,5", "L,372,4,373,6,373,5,373,4", "S,288,5,288,4,289,6,289,5", "T,108,6,108,5,108,4,109,5", "I,464,6,464,5,464,4,464,3", "I,456,6,456,5,456,4,456,3", "I,392,6,392,5,392,4,392,3", "I,297,6,297,5,297,4,297,3", "I,60,6,60,5,60,4,60,3", "I,305,6,305,5,305,4,305,3", "I,193,6,193,5,193,4,193,3", "M,380,5", "M,80,5", "M,168,5", "M,264,5", "M,412,5", "O,340,4,341,4,340,5,341,5", "O,292,4,293,4,292,5,293,5", "D,81,4,81,5", "D,41,5,41,4", "O,224,4,225,4,224,5,225,5", "O,32,4,33,4,32,5,33,5", "D,332,5,332,4", "O,200,4,201,4,200,5,201,5", "O,440,4,441,4,440,5,441,5", "D,276,5,276,4", "J,84,5,85,5,85,4,85,3", "T,381,3,381,4,381,5,380,4", "J,120,5,121,5,121,4,121,3", "L,24,3,25,5,25,4,25,3", "L,332,3,333,5,333,4,333,3", "T,169,3,169,4,169,5,168,4", "S,444,4,444,3,445,5,445,4", "L,321,5,320,3,320,4,320,5", "L,313,5,312,3,312,4,312,5", "J,360,5,361,5,361,4,361,3", "L,276,3,277,5,277,4,277,3", "I,369,5,369,4,369,3,369,2", "I,69,5,69,4,69,3,69,2", "I,68,5,68,4,68,3,68,2", "I,368,5,368,4,368,3,368,2", "I,465,5,465,4,465,3,465,2", "I,296,5,296,4,296,3,296,2", "M,29,4", "M,404,4", "M,24,4", "M,397,4", "M,240,4", "M,304,4", "D,72,4,73,4", "M,289,4", "J,85,2,84,2,84,3,84,4", "J,121,2,120,2,120,3,120,4", "Z,80,4,80,3,81,3,81,2", "L,392,2,393,4,393,3,393,2", "J,384,4,385,4,385,3,385,2", "L,456,2,457,4,457,3,457,2", "S,228,3,228,2,229,4,229,3", "J,452,4,453,4,453,3,453,2", "T,405,2,405,3,405,4,404,3", "J,193,2,192,2,192,3,192,4", "J,361,2,360,2,360,3,360,4", "T,137,2,137,3,137,4,136,3", "S,432,3,432,2,433,4,433,3", "L,320,2,321,4,321,3,321,2", "Z,412,4,412,3,413,3,413,2", "L,312,2,313,4,313,3,313,2", "L,236,2,237,4,237,3,237,2", "L,60,2,61,4,61,3,61,2", "S,160,3,160,2,161,4,161,3", "S,240,3,240,2,241,4,241,3", "L,216,2,217,4,217,3,217,2", "Z,252,4,252,3,253,3,253,2", "J,324,4,325,4,325,3,325,2", "L,108,2,109,4,109,3,109,2", "Z,102,4,102,3,103,3,103,2", "I,260,4,260,3,260,2,260,1", "I,264,4,264,3,264,2,264,1", "M,380,3", "M,30,3", "M,236,3", "M,216,3", "M,108,3", "O,342,2,343,2,342,3,343,3", "O,38,2,39,2,38,3,39,3", "O,42,2,43,2,42,3,43,3", "O,248,2,249,2,248,3,249,3", "O,222,2,223,2,222,3,223,3", "O,128,2,129,2,128,3,129,3", "O,200,2,201,2,200,3,201,3", "O,290,2,291,2,290,3,291,3", "O,26,2,27,2,26,3,27,3", "J,270,2,270,3,271,3,272,3", "T,267,3,266,3,265,3,266,2", "O,338,2,339,2,338,3,339,3", "D,452,2,452,3", "D,168,3,168,2", "D,384,2,384,3", "J,273,3,273,2,272,2,271,2", "D,445,3,445,2", "Z,30,2,31,2,31,3,32,3", "D,33,3,33,2", "O,92,2,93,2,92,3,93,3", "D,324,2,324,3", "J,396,3,397,3,397,2,397,1", "L,303,1,304,3,304,2,304,1", "L,73,3,72,1,72,2,72,3", "L,373,3,372,1,372,2,372,3", "L,289,3,288,1,288,2,288,3", "I,441,3,441,2,441,1,441,0", "I,440,3,440,2,440,1,440,0", "I,261,3,261,2,261,1,261,0", "D,381,2,380,2", "M,80,2", "M,267,2", "D,333,2,332,2", "M,229,2", "M,136,2", "M,169,2", "M,444,2", "M,241,2", "M,161,2", "M,373,2", "M,252,2", "M,276,2", "L,277,2,279,1,278,1,277,1", "J,465,0,464,0,464,1,464,2", "L,296,0,297,2,297,1,297,0", "L,264,0,265,2,265,1,265,0", "T,404,2,404,1,404,0,405,1", "L,25,2,24,0,24,1,24,2", "L,432,0,433,2,433,1,433,0", "Z,412,2,412,1,413,1,413,0", "Z,32,2,32,1,33,1,33,0", "J,397,0,396,0,396,1,396,2", "L,304,0,305,2,305,1,305,0", "Z,73,2,73,1,74,1,74,0", "T,102,2,102,1,102,0,103,1", "L,288,0,289,2,289,1,289,0", "I,174,1,175,1,176,1,177,1", "M,246,1", "D,127,1,126,1", "I,137,1,138,1,139,1,140,1", "I,88,1,89,1,90,1,91,1", "I,64,1,65,1,66,1,67,1", "D,230,1,231,1", "M,79,1", "I,328,1,329,1,330,1,331,1", "M,232,1", "D,86,1,87,1", "M,465,1", "M,105,1", "M,408,1", "M,432,1", "I,316,1,317,1,318,1,319,1", "M,386,1", "M,296,1", "M,363,1", "I,110,1,111,1,112,1,113,1", "O,36,0,37,0,36,1,37,1", "O,344,0,345,0,344,1,345,1", "J,247,1,247,0,246,0,245,0", "T,235,1,234,1,233,1,234,0", "Z,377,0,378,0,378,1,379,1", "L,125,1,127,0,126,0,125,0", "O,194,0,195,0,194,1,195,1", "O,456,0,457,0,456,1,457,1", "T,103,0,104,0,105,0,104,1", "T,245,1,244,1,243,1,244,0", "T,77,0,78,0,79,0,78,1", "D,242,1,242,0", "O,44,0,45,0,44,1,45,1", "O,336,0,337,0,336,1,337,1", "T,386,0,387,0,388,0,387,1", "T,408,0,409,0,410,0,409,1", "O,123,0,124,0,123,1,124,1", "L,306,1,308,0,307,0,306,0", "L,309,0,307,1,308,1,309,1", "D,122,0,122,1", "S,411,0,412,0,410,1,411,1", "J,141,1,141,0,140,0,139,0", "L,221,0,219,1,220,1,221,1", "L,390,0,388,1,389,1,390,1", "D,391,0,391,1", "L,196,1,198,0,197,0,196,0", "L,136,1,138,0,137,0,136,0", "J,446,0,446,1,447,1,448,1", "L,199,0,197,1,198,1,199,1", "L,218,1,220,0,219,0,218,0", "O,100,0,101,0,100,1,101,1", "D,25,1,25,0", "L,417,0,415,1,416,1,417,1", "O,172,0,173,0,172,1,173,1", "O,170,0,171,0,170,1,171,1", "L,414,1,416,0,415,0,414,0", "J,75,0,75,1,76,1,77,1", "O,314,0,315,0,314,1,315,1", "T,135,1,134,1,133,1,134,0", "D,132,1,132,0", "L,63,0,61,1,62,1,63,1", "L,60,1,62,0,61,0,60,0", "O,272,0,273,0,272,1,273,1", "L,163,0,161,1,162,1,163,1", "Z,365,0,366,0,366,1,367,1", "L,451,0,449,1,450,1,451,1", "O,284,0,285,0,284,1,285,1", "J,158,0,158,1,159,1,160,1", "Z,363,0,364,0,364,1,365,1", "D,362,0,362,1", "L,327,0,325,1,326,1,327,1", "L,324,1,326,0,325,0,324,0", "J,300,0,300,1,301,1,302,1", "T,377,1,376,1,375,1,376,0", "S,374,0,375,0,373,1,374,1", "O,252,0,253,0,252,1,253,1", "O,216,0,217,0,216,1,217,1", "O,116,0,117,0,116,1,117,1", "T,283,1,282,1,281,1,282,0", "O,114,0,115,0,114,1,115,1", "T,279,0,280,0,281,0,280,1", "L,276,1,278,0,277,0,276,0", "L,109,1,111,0,110,0,109,0", "D,108,1,108,0", "I,328,0,329,0,330,0,331,0", "M,235,0", "I,174,0,175,0,176,0,177,0", "I,86,0,87,0,88,0,89,0", "M,379,0", "I,230,0,231,0,232,0,233,0", "M,243,0", "M,405,0", "M,389,0", "I,64,0,65,0,66,0,67,0", "I,447,0,448,0,449,0,450,0", "D,91,0,90,0", "M,76,0", "I,316,0,317,0,318,0,319,0", "M,367,0", "M,133,0", "M,135,0", "M,32,0", "I,159,0,160,0,161,0,162,0", "M,260,0", "D,303,0,302,0", "M,301,0", "D,73,0,72,0", "D,373,0,372,0", "M,283,0", "D,113,0,112,0", "D,410,30,411,30", "I,354,30,355,30,356,30,357,30", "M,402,30", "M,370,30", "D,82,30,81,30", "D,427,30,428,30", "I,155,30,156,30,157,30,158,30", "D,236,30,237,30", "I,456,30,457,30,458,30,459,30", "M,19,30", "M,152,30", "D,423,30,422,30", "I,166,30,167,30,168,30,169,30", "D,170,30,171,30", "M,78,30", "I,332,30,333,30,334,30,335,30", "M,239,30", "I,45,30,46,30,47,30,48,30", "M,122,30", "M,467,30", "M,464,30", "M,475,30", "M,246,30", "D,164,30,163,30", "M,66,30", "D,299,30,298,30", "D,447,29,447,30", "O,188,29,189,29,188,30,189,30", "O,350,29,351,29,350,30,351,30", "O,104,29,105,29,104,30,105,30", "T,108,30,107,30,106,30,107,29", "O,230,29,231,29,230,30,231,30", "O,336,29,337,29,336,30,337,30", "D,211,30,211,29", "O,84,29,85,29,84,30,85,30", "D,255,29,255,30", "Z,152,29,153,29,153,30,154,30", "J,83,30,83,29,82,29,81,29", "D,109,30,109,29", "Z,78,29,79,29,79,30,80,30", "L,431,29,429,30,430,30,431,30", "O,274,29,275,29,274,30,275,30", "O,74,29,75,29,74,30,75,30", "J,238,30,238,29,237,29,236,29", "J,479,30,479,29,478,29,477,29", "O,438,29,439,29,438,30,439,30", "J,358,29,358,30,359,30,360,30", "Z,239,29,240,29,240,30,241,30", "J,361,30,361,29,360,29,359,29", "J,476,29,476,30,477,30,478,30", "L,165,30,167,29,166,29,165,29", "O,318,29,319,29,318,30,319,30", "O,138,29,139,29,138,30,139,30", "J,49,30,49,29,48,29,47,29", "Z,71,29,72,29,72,30,73,30", "J,453,29,453,30,454,30,455,30", "L,44,30,46,29,45,29,44,29", "Z,69,29,70,29,70,30,71,30", "S,463,29,464,29,462,30,463,30", "L,303,29,301,30,302,30,303,30", "J,471,30,471,29,470,29,469,29", "J,468,29,468,30,469,30,470,30", "S,466,29,467,29,465,30,466,30", "L,300,30,302,29,301,29,300,29", "D,127,29,127,30", "O,178,29,179,29,178,30,179,30", "L,452,29,450,30,451,30,452,30", "O,38,29,39,29,38,30,39,30", "D,31,30,31,29", "T,69,30,68,30,67,30,68,29", "D,54,29,54,30", "L,177,29,175,30,176,30,177,30", "L,162,30,164,29,163,29,162,29", "S,297,29,298,29,296,30,297,30", "J,114,30,115,30,115,29,115,28", "J,282,30,283,30,283,29,283,28", "J,447,28,446,28,446,29,446,30", "J,134,30,135,30,135,29,135,28", "J,211,28,210,28,210,29,210,30", "T,403,28,403,29,403,30,402,29", "J,255,28,254,28,254,29,254,30", "L,415,30,414,28,414,29,414,30", "J,390,30,391,30,391,29,391,28", "J,62,30,63,30,63,29,63,28", "J,398,30,399,30,399,29,399,28", "Z,18,30,18,29,19,29,19,28", "J,342,30,343,30,343,29,343,28", "L,158,28,159,30,159,29,159,28", "L,147,30,146,28,146,29,146,30", "T,123,28,123,29,123,30,122,29", "T,474,30,474,29,474,28,475,29", "J,222,30,223,30,223,29,223,28", "T,247,28,247,29,247,30,246,29", "J,31,28,30,28,30,29,30,30", "L,54,28,55,30,55,29,55,28", "I,371,30,371,29,371,28,371,27", "I,426,30,426,29,426,28,426,27", "I,126,30,126,29,126,28,126,27", "I,291,30,291,29,291,28,291,27", "I,290,30,290,29,290,28,290,27", "I,174,30,174,29,174,28,174,27", "I,294,30,294,29,294,28,294,27", "I,295,30,295,29,295,28,295,27", "I,354,29,355,29,356,29,357,29", "I,154,29,155,29,156,29,157,29", "M,108,29", "I,427,29,428,29,429,29,430,29", "M,80,29", "M,158,29", "M,106,29", "I,455,29,456,29,457,29,458,29", "M,241,29", "M,459,29", "I,168,29,169,29,170,29,171,29", "D,332,29,333,29", "M,282,29", "M,73,29", "M,462,29", "M,454,29", "M,465,29", "M,299,29", "M,296,29", "O,410,28,411,28,410,29,411,29", "O,422,28,423,28,422,29,423,29", "D,67,28,67,29", "J,399,27,398,27,398,28,398,29", "J,391,27,390,27,390,28,390,29", "J,334,29,335,29,335,28,335,27", "J,63,27,62,27,62,28,62,29", "J,450,29,451,29,451,28,451,27", "L,176,29,175,27,175,28,175,29", "J,67,27,66,27,66,28,66,29", "I,114,29,114,28,114,27,114,26", "I,134,29,134,28,134,27,134,26", "I,370,29,370,28,370,27,370,26", "I,342,29,342,28,342,27,342,26", "I,415,29,415,28,415,27,415,26", "I,147,29,147,28,147,27,147,26", "I,222,29,222,28,222,27,222,26", "M,235,28", "M,103,28", "M,191,28", "M,427,28", "M,43,28", "M,51,28", "M,450,28", "M,127,28", "O,180,27,181,27,180,28,181,28", "O,480,27,481,27,480,28,481,28", "O,228,27,229,27,228,28,229,28", "O,348,27,349,27,348,28,349,28", "O,432,27,433,27,432,28,433,28", "O,110,27,111,27,110,28,111,28", "O,242,27,243,27,242,28,243,28", "D,275,28,275,27", "D,150,28,150,27", "D,439,27,439,28", "Z,234,28,234,27,235,27,235,26", "Z,102,28,102,27,103,27,103,26", "L,363,28,362,26,362,27,362,28", "J,275,26,274,26,274,27,274,28", "Z,190,28,190,27,191,27,191,26", "T,282,28,282,27,282,26,283,27", "T,402,28,402,27,402,26,403,27", "Z,42,28,42,27,43,27,43,26", "J,462,28,463,28,463,27,463,26", "L,319,28,318,26,318,27,318,28", "Z,50,28,50,27,51,27,51,26", "S,474,27,474,26,475,28,475,27", "J,38,28,39,28,39,27,39,26", "J,439,26,438,26,438,27,438,28", "L,163,28,162,26,162,27,162,28", "I,86,28,86,27,86,26,86,25", "I,87,28,87,27,87,26,87,25", "I,18,28,18,27,18,26,18,25", "I,151,28,151,27,151,26,151,25", "I,334,28,334,27,334,26,334,25", "I,138,28,138,27,138,26,138,25", "I,122,28,122,27,122,26,122,25", "I,139,28,139,27,139,26,139,25", "I,246,28,246,27,246,26,246,25", "M,115,27", "M,410,27", "M,343,27", "M,211,27", "M,423,27", "M,446,27", "M,247,27", "D,55,27,54,27", "O,254,26,255,26,254,27,255,27", "D,414,26,414,27", "D,159,26,159,27", "D,123,27,123,26", "O,30,26,31,26,30,27,31,27", "D,163,26,163,27", "L,134,25,135,27,135,26,135,25", "L,362,25,363,27,363,26,363,25", "T,427,25,427,26,427,27,426,26", "S,410,26,410,25,411,27,411,26", "J,147,25,146,25,146,26,146,27", "Z,210,27,210,26,211,26,211,25", "Z,422,27,422,26,423,26,423,25", "S,446,26,446,25,447,27,447,26", "L,318,25,319,27,319,26,319,25", "T,127,25,127,26,127,27,126,26", "I,19,27,19,26,19,25,19,24", "I,450,27,450,26,450,25,450,24", "I,462,27,462,26,462,25,462,24", "I,158,27,158,26,158,25,158,24", "I,223,27,223,26,223,25,223,24", "I,38,27,38,26,38,25,38,24", "M,188,26", "M,482,26", "M,398,26", "M,390,26", "Z,188,25,189,25,189,26,190,26", "D,434,26,434,25", "O,62,25,63,25,62,26,63,26", "O,290,25,291,25,290,26,291,26", "D,243,25,243,26", "O,294,25,295,25,294,26,295,26", "D,174,26,174,25", "O,66,25,67,25,66,26,67,26", "J,116,24,115,24,115,25,115,26", "L,434,24,435,26,435,25,435,24", "L,225,24,226,26,226,25,226,24", "S,482,25,482,24,483,26,483,25", "L,347,26,346,24,346,25,346,26", "Z,234,26,234,25,235,25,235,24", "J,452,24,451,24,451,25,451,26", "L,334,24,335,26,335,25,335,24", "S,398,25,398,24,399,26,399,25", "T,343,24,343,25,343,26,342,25", "S,402,25,402,24,403,26,403,25", "J,182,26,183,26,183,25,183,24", "Z,42,26,42,25,43,25,43,24", "L,282,24,283,26,283,25,283,24", "T,50,26,50,25,50,24,51,25", "S,390,25,390,24,391,26,391,25", "L,246,24,247,26,247,25,247,24", "T,475,24,475,25,475,26,474,25", "J,54,26,55,26,55,25,55,24", "L,174,24,175,26,175,25,175,24", "I,371,26,371,25,371,24,371,23", "I,227,26,227,25,227,24,227,23", "I,102,26,102,25,102,24,102,23", "I,150,26,150,25,150,24,150,23", "I,242,26,242,25,242,24,242,23", "D,191,25,190,25", "M,426,25", "M,414,25", "M,463,25", "M,126,25", "M,275,25", "M,222,25", "M,282,25", "M,447,25", "D,438,25,439,25", "D,347,25,347,24", "D,103,24,103,25", "J,411,25,411,24,410,24,409,24", "O,254,24,255,24,254,25,255,25", "D,182,24,182,25", "J,123,25,123,24,122,24,121,24", "S,163,24,164,24,162,25,163,25", "D,39,24,39,25", "J,115,23,114,23,114,24,114,25", "T,415,23,415,24,415,25,414,24", "L,158,23,159,25,159,24,159,23", "T,210,25,210,24,210,23,211,24", "L,31,25,30,23,30,24,30,25", "J,55,23,54,23,54,24,54,25", "Z,422,25,422,24,423,24,423,23", "I,370,25,370,24,370,23,370,22", "I,274,25,274,24,274,23,274,22", "M,456,24", "M,349,24", "M,85,24", "I,154,24,155,24,156,24,157,24", "M,23,24", "M,73,24", "I,358,24,359,24,360,24,361,24", "I,318,24,319,24,320,24,321,24", "I,67,24,68,24,69,24,70,24", "M,71,24", "D,21,24,20,24", "D,322,24,323,24", "D,216,24,217,24", "M,408,24", "I,394,24,395,24,396,24,397,24", "D,404,24,405,24", "I,165,24,166,24,167,24,168,24", "M,212,24", "M,391,24", "M,42,24", "I,284,24,285,24,286,24,287,24", "M,133,24", "J,457,24,457,23,456,23,455,23", "O,24,23,25,23,24,24,25,24", "T,455,24,454,24,453,24,454,23", "T,119,24,118,24,117,24,118,23", "T,347,23,348,23,349,23,348,24", "S,84,23,85,23,83,24,84,24", "O,228,23,229,23,228,24,229,24", "L,224,24,226,23,225,23,224,23", "L,82,23,80,24,81,24,82,24", "O,356,23,357,23,356,24,357,24", "T,71,23,72,23,73,23,72,24", "S,145,23,146,23,144,24,145,24", "T,21,23,22,23,23,23,22,24", "O,324,23,325,23,324,24,325,24", "L,18,24,20,23,19,23,18,23", "L,407,24,409,23,408,23,407,23", "T,119,23,120,23,121,23,120,24", "S,345,23,346,23,344,24,345,24", "J,406,24,406,23,405,23,404,23", "D,151,23,151,24", "J,169,24,169,23,168,23,167,23", "L,215,24,217,23,216,23,215,23", "L,62,23,60,24,61,24,62,24", "S,32,23,33,23,31,24,32,24", "L,447,23,445,24,446,24,447,24", "Z,212,23,213,23,213,24,214,24", "T,301,24,300,24,299,24,300,23", "S,393,23,394,23,392,24,393,24", "T,297,23,298,23,299,23,298,24", "J,295,23,295,24,296,24,297,24", "L,35,23,33,24,34,24,35,24", "T,443,23,444,23,445,23,444,24", "O,36,23,37,23,36,24,37,24", "L,130,23,128,24,129,24,130,24", "Z,133,23,134,23,134,24,135,24", "O,131,23,132,23,131,24,132,24", "J,289,23,289,24,290,24,291,24", "O,420,23,421,23,420,24,421,24", "D,288,24,288,23", "J,441,23,441,24,442,24,443,24", "L,440,23,438,24,439,24,440,24", "L,427,24,426,22,426,23,426,24", "J,146,24,147,24,147,23,147,22", "L,482,22,483,24,483,23,483,22", "T,463,22,463,23,463,24,462,23", "L,398,22,399,24,399,23,399,22", "L,139,24,138,22,138,23,138,24", "Z,342,24,342,23,343,23,343,22", "J,126,24,127,24,127,23,127,22", "Z,222,24,222,23,223,23,223,22", "J,235,22,234,22,234,23,234,24", "J,163,22,162,22,162,23,162,24", "J,295,22,294,22,294,23,294,24", "J,67,22,66,22,66,23,66,24", "L,242,22,243,24,243,23,243,22", "J,475,22,474,22,474,23,474,24", "I,250,24,250,23,250,22,250,21", "I,251,24,251,23,251,22,251,21", "I,403,24,403,23,403,22,403,21", "I,51,24,51,23,51,22,51,21", "I,275,24,275,23,275,22,275,21", "I,63,24,63,23,63,22,63,21", "I,450,23,451,23,452,23,453,23", "I,154,23,155,23,156,23,157,23", "I,358,23,359,23,360,23,361,23", "D,117,23,116,23", "D,80,23,81,23", "M,482,23", "M,83,23", "I,67,23,68,23,69,23,70,23", "I,320,23,321,23,322,23,323,23", "M,427,23", "M,411,23", "M,144,23", "I,395,23,396,23,397,23,398,23", "M,255,23", "M,139,23", "M,183,23", "M,344,23", "I,163,23,164,23,165,23,166,23", "D,61,23,60,23", "M,235,23", "M,214,23", "M,301,23", "M,296,23", "M,318,23", "M,392,23", "M,34,23", "M,246,23", "D,43,23,42,23", "I,283,23,284,23,285,23,286,23", "D,129,23,128,23", "M,135,23", "M,442,23", "M,287,23", "M,475,23", "M,175,23", "O,434,22,435,22,434,23,435,23", "D,402,22,402,23", "D,126,22,126,23", "D,50,22,50,23", "D,247,22,247,23", "T,31,21,31,22,31,23,30,22", "S,102,22,102,21,103,23,103,22", "T,410,23,410,22,410,21,411,22", "J,334,23,335,23,335,22,335,21", "L,39,23,38,21,38,22,38,23", "Z,182,23,182,22,183,22,183,21", "T,446,23,446,22,446,21,447,22", "S,318,22,318,21,319,23,319,22", "J,122,23,123,23,123,22,123,21", "S,210,22,210,21,211,23,211,22", "L,291,23,290,21,290,22,290,23", "Z,282,23,282,22,283,22,283,21", "Z,422,23,422,22,423,22,423,21", "Z,174,23,174,22,175,22,175,21", "L,439,23,438,21,438,22,438,23", "I,254,23,254,22,254,21,254,20", "I,414,23,414,22,414,21,414,20", "I,390,23,390,22,390,21,390,20", "I,391,23,391,22,391,21,391,20", "M,354,22", "M,78,22", "M,334,22", "M,342,22", "M,371,22", "M,291,22", "M,62,22", "M,415,22", "O,142,21,143,21,142,22,143,22", "O,418,21,419,21,418,22,419,22", "O,58,21,59,21,58,22,59,22", "D,355,21,355,22", "D,451,22,451,21", "O,54,21,55,21,54,22,55,22", "O,134,21,135,21,134,22,135,22", "D,122,22,122,21", "O,42,21,43,21,42,22,43,22", "D,439,21,439,22", "J,230,22,231,22,231,21,231,20", "T,79,20,79,21,79,22,78,21", "J,147,20,146,20,146,21,146,22", "J,451,20,450,20,450,21,450,22", "J,350,22,351,22,351,21,351,20", "L,115,22,114,20,114,21,114,22", "J,26,22,27,22,27,21,27,20", "J,18,22,19,22,19,21,19,20", "L,38,20,39,22,39,21,39,20", "T,139,20,139,21,139,22,138,21", "Z,222,22,222,21,223,21,223,20", "T,246,22,246,21,246,20,247,21", "I,427,22,427,21,427,20,427,19", "I,462,22,462,21,462,20,462,19", "I,150,22,150,21,150,20,150,19", "I,151,22,151,21,151,20,151,19", "I,255,22,255,21,255,20,255,19", "D,435,21,434,21", "M,426,21", "M,147,21", "D,482,21,483,21", "M,18,21", "M,126,21", "M,463,21", "M,399,21", "M,182,21", "M,67,21", "M,422,21", "D,242,21,243,21", "O,234,20,235,20,234,21,235,21", "L,415,21,417,20,416,20,415,20", "D,295,20,295,21", "Z,402,21,402,20,403,20,403,19", "J,231,19,230,19,230,20,230,21", "Z,354,21,354,20,355,20,355,19", "T,411,19,411,20,411,21,410,20", "S,126,20,126,19,127,21,127,20", "L,102,19,103,21,103,20,103,19", "J,27,19,26,19,26,20,26,21", "J,351,19,350,19,350,20,350,21", "T,334,21,334,20,334,19,335,20", "S,446,20,446,19,447,21,447,20", "L,343,21,342,19,342,20,342,21", "L,114,19,115,21,115,20,115,19", "J,370,21,371,21,371,20,371,19", "S,290,20,290,19,291,21,291,20", "Z,50,21,50,20,51,20,51,19", "Z,398,21,398,20,399,20,399,19", "J,162,21,163,21,163,20,163,19", "Z,274,21,274,20,275,20,275,19", "J,295,19,294,19,294,20,294,21", "Z,282,21,282,20,283,20,283,19", "J,63,19,62,19,62,20,62,21", "T,66,21,66,20,66,19,67,20", "T,211,19,211,20,211,21,210,20", "Z,174,21,174,20,175,20,175,19", "L,475,21,474,19,474,20,474,21", "I,30,21,30,20,30,19,30,18", "I,319,21,319,20,319,19,319,18", "M,102,20", "I,54,20,55,20,56,20,57,20", "M,138,20", "M,343,20", "M,63,20", "O,432,19,433,19,432,20,433,20", "O,110,19,111,19,110,20,111,20", "O,158,19,159,19,158,20,159,20", "O,480,19,481,19,480,20,481,20", "D,78,20,78,19", "O,134,19,135,19,134,20,135,20", "O,180,19,181,19,180,20,181,20", "J,247,19,247,20,248,20,249,20", "O,122,19,123,19,122,20,123,20", "Z,139,19,140,19,140,20,141,20", "O,252,19,253,19,252,20,253,20", "O,242,19,243,19,242,20,243,20", "O,42,19,43,19,42,20,43,20", "D,475,20,475,19", "L,369,18,370,20,370,19,370,18", "T,222,20,222,19,222,18,223,19", "I,422,20,422,19,422,18,422,17", "I,423,20,423,19,423,18,423,17", "I,31,20,31,19,31,18,31,17", "I,438,20,438,19,438,18,438,17", "I,463,20,463,19,463,18,463,17", "I,426,20,426,19,426,18,426,17", "I,439,20,439,19,439,18,439,17", "I,18,20,18,19,18,18,18,17", "I,318,20,318,19,318,18,318,17", "I,162,20,162,19,162,18,162,17", "D,248,19,249,19", "M,79,19", "M,402,19", "M,354,19", "M,127,19", "M,141,19", "D,56,19,57,19", "M,410,19", "M,55,19", "M,50,19", "D,417,19,416,19", "D,235,19,234,19", "M,282,19", "M,415,19", "M,274,19", "L,335,19,337,18,336,18,335,18", "D,210,18,210,19", "O,450,18,451,18,450,19,451,19", "L,147,19,146,17,146,18,146,19", "L,39,19,38,17,38,18,38,19", "J,390,19,391,19,391,18,391,17", "T,246,19,246,18,246,17,247,18", "T,54,19,54,18,54,17,55,18", "J,20,17,19,17,19,18,19,19", "T,447,17,447,18,447,19,446,18", "S,342,18,342,17,343,19,343,18", "Z,138,19,138,18,139,18,139,17", "T,414,19,414,18,414,17,415,18", "T,254,19,254,18,254,17,255,18", "T,291,17,291,18,291,19,290,18", "J,399,17,398,17,398,18,398,19", "L,66,17,67,19,67,18,67,17", "J,175,17,174,17,174,18,174,19", "M,431,18", "M,229,18", "D,46,18,47,18", "I,224,18,225,18,226,18,227,18", "M,23,18", "M,427,18", "I,406,18,407,18,408,18,409,18", "D,366,18,367,18", "D,109,18,108,18", "M,332,18", "I,371,18,372,18,373,18,374,18", "D,359,18,358,18", "M,236,18", "M,80,18", "D,21,18,20,18", "D,86,18,87,18", "M,327,18", "I,345,18,346,18,347,18,348,18", "M,349,18", "D,241,18,240,18", "I,294,18,295,18,296,18,297,18", "M,238,18", "M,322,18", "M,320,18", "M,399,18", "M,167,18", "M,163,18", "M,66,18", "M,216,18", "M,456,18", "M,177,18", "M,452,18", "O,122,17,123,17,122,18,123,18", "L,171,17,169,18,170,18,171,18", "O,24,17,25,17,24,18,25,18", "S,430,17,431,17,429,18,430,18", "L,130,17,128,18,129,18,130,18", "J,157,18,157,17,156,17,155,17", "T,21,17,22,17,23,17,22,18", "S,45,17,46,17,44,18,45,18", "O,278,17,279,17,278,18,279,18", "T,227,17,228,17,229,17,228,18", "O,270,17,271,17,270,18,271,18", "T,427,17,428,17,429,17,428,18", "O,362,17,363,17,362,18,363,18", "L,168,18,170,17,169,17,168,17", "Z,47,17,48,17,48,18,49,18", "D,39,18,39,17", "J,154,17,154,18,155,18,156,18", "D,147,17,147,18", "Z,332,17,333,17,333,18,334,18", "O,152,17,153,17,152,18,153,18", "T,222,17,223,17,224,17,223,18", "J,368,18,368,17,367,17,366,17", "O,356,17,357,17,356,18,357,18", "D,390,18,390,17", "O,404,17,405,17,404,18,405,18", "T,133,18,132,18,131,18,132,17", "L,107,18,109,17,108,17,107,17", "T,236,17,237,17,238,17,237,18", "J,375,18,375,17,374,17,373,17", "L,75,17,73,18,74,18,75,18", "J,360,18,360,17,359,17,358,17", "D,361,17,361,18", "O,114,17,115,17,114,18,115,18", "L,72,18,74,17,73,17,72,17", "Z,80,17,81,17,81,18,82,18", "D,462,17,462,18", "O,105,17,106,17,105,18,106,18", "S,326,17,327,17,325,18,326,18", "J,301,17,301,18,302,18,303,18", "T,343,17,344,17,345,17,344,18", "T,82,17,83,17,84,17,83,18", "S,85,17,86,17,84,18,85,18", "D,104,17,104,18", "J,479,18,479,17,478,17,477,17", "T,300,18,299,18,298,18,299,17", "O,282,17,283,17,282,18,283,18", "J,476,17,476,18,477,18,478,18", "S,324,17,325,17,323,18,324,18", "L,239,18,241,17,240,17,239,17", "O,70,17,71,17,70,18,71,18", "L,321,18,323,17,322,17,321,17", "O,68,17,69,17,68,18,69,18", "T,165,17,166,17,167,17,166,18", "Z,163,17,164,17,164,18,165,18", "O,62,17,63,17,62,18,63,18", "T,219,18,218,18,217,18,218,17", "L,459,17,457,18,458,18,459,18", "J,272,17,272,18,273,18,274,18", "O,178,17,179,17,178,18,179,18", "L,215,18,217,17,216,17,215,17", "L,277,17,275,18,276,18,277,18", "T,455,18,454,18,453,18,454,17", "Z,212,17,213,17,213,18,214,18", "S,176,17,177,17,175,18,176,18", "Z,210,17,211,17,211,18,212,18", "O,474,17,475,17,474,18,475,18", "M,44,17", "M,49,17", "D,129,17,128,17", "I,334,17,335,17,336,17,337,17", "D,226,17,225,17", "I,406,17,407,17,408,17,409,17", "M,133,17", "M,30,17", "M,55,17", "M,131,17", "M,247,17", "D,303,17,302,17", "I,369,17,370,17,371,17,372,17", "M,255,17", "M,138,17", "I,295,17,296,17,297,17,298,17", "I,346,17,347,17,348,17,349,17", "M,87,17", "M,446,17", "M,415,17", "M,294,17", "D,320,17,319,17", "M,300,17", "M,290,17", "M,219,17", "I,455,17,456,17,457,17,458,17", "I,273,17,274,17,275,17,276,17", "I,450,17,451,17,452,17,453,17", "M,214,17", "I,306,47,307,47,308,47,309,47", "D,150,47,151,47", "I,51,47,52,47,53,47,54,47", "I,302,47,303,47,304,47,305,47", "M,20,47", "M,0,47", "M,79,47", "M,224,47", "D,350,47,349,47", "D,76,47,75,47", "D,391,47,390,47", "M,74,47", "M,389,47", "I,314,47,315,47,316,47,317,47", "M,217,47", "M,403,47", "M,384,47", "I,26,47,27,47,28,47,29,47", "I,234,47,235,47,236,47,237,47", "M,187,47", "M,208,47", "M,184,47", "D,397,47,398,47", "M,396,47", "D,253,47,252,47", "M,229,47", "M,231,47", "I,110,47,111,47,112,47,113,47", "J,357,47,357,46,356,46,355,46", "O,338,46,339,46,338,47,339,47", "O,264,46,265,46,264,47,265,47", "O,342,46,343,46,342,47,343,47", "Z,447,46,448,46,448,47,449,47", "J,55,46,55,47,56,47,57,47", "O,30,46,31,46,30,47,31,47", "J,354,46,354,47,355,47,356,47", "L,149,47,151,46,150,46,149,46", "O,182,46,183,46,182,47,183,47", "J,278,46,278,47,279,47,280,47", "Z,384,46,385,46,385,47,386,47", "O,172,46,173,46,172,47,173,47", "L,353,46,351,47,352,47,353,47", "D,134,46,134,47", "O,378,46,379,46,378,47,379,47", "J,377,47,377,46,376,46,375,46", "D,297,47,297,46", "O,404,46,405,46,404,47,405,47", "J,374,46,374,47,375,47,376,47", "O,424,46,425,46,424,47,425,47", "O,282,46,283,46,282,47,283,47", "J,281,47,281,46,280,46,279,46", "O,318,46,319,46,318,47,319,47", "J,48,46,48,47,49,47,50,47", "D,465,46,465,47", "O,146,46,147,46,146,47,147,47", "S,78,46,79,46,77,47,78,47", "Z,386,46,387,46,387,47,388,47", "D,84,47,84,46", "D,92,46,92,47", "S,402,46,403,46,401,47,402,47", "O,122,46,123,46,122,47,123,47", "O,124,46,125,46,124,47,125,47", "D,148,46,148,47", "S,313,46,314,46,312,47,313,47", "Z,184,46,185,46,185,47,186,47", "Z,445,46,446,46,446,47,447,47", "S,400,46,401,46,399,47,400,47", "O,434,46,435,46,434,47,435,47", "O,12,46,13,46,12,47,13,47", "O,114,46,115,46,114,47,115,47", "O,436,46,437,46,436,47,437,47", "O,438,46,439,46,438,47,439,47", "T,229,46,230,46,231,46,230,47", "O,232,46,233,46,232,47,233,47", "O,482,46,483,46,482,47,483,47", "D,484,47,484,46", "J,297,45,296,45,296,46,296,47", "L,84,45,85,47,85,46,85,45", "J,472,47,473,47,473,46,473,45", "L,134,45,135,47,135,46,135,45", "L,92,45,93,47,93,46,93,45", "T,21,45,21,46,21,47,20,46", "T,1,45,1,46,1,47,0,46", "T,225,45,225,46,225,47,224,46", "J,465,45,464,45,464,46,464,47", "Z,216,47,216,46,217,46,217,45", "J,300,47,301,47,301,46,301,45", "L,37,47,36,45,36,46,36,47", "S,208,46,208,45,209,47,209,46", "L,445,47,444,45,444,46,444,47", "L,45,47,44,45,44,46,44,47", "I,456,47,456,46,456,45,456,44", "I,457,47,457,46,457,45,457,44", "I,348,47,348,46,348,45,348,44", "I,288,47,288,46,288,45,288,44", "I,228,47,228,46,228,45,228,44", "I,289,47,289,46,289,45,289,44", "I,273,47,273,46,273,45,273,44", "I,272,47,272,46,272,45,272,44", "I,485,47,485,46,485,45,485,44", "I,306,46,307,46,308,46,309,46", "D,57,46,56,46", "I,51,46,52,46,53,46,54,46", "M,449,46", "I,349,46,350,46,351,46,352,46", "I,74,46,75,46,76,46,77,46", "I,388,46,389,46,390,46,391,46", "I,302,46,303,46,304,46,305,46", "I,26,46,27,46,28,46,29,46", "M,312,46", "D,315,46,316,46", "M,317,46", "D,186,46,187,46", "I,234,46,235,46,236,46,237,46", "I,396,46,397,46,398,46,399,46", "M,252,46", "M,110,46", "D,45,45,45,46", "T,113,46,112,46,111,46,112,45", "J,473,44,472,44,472,45,472,46", "L,50,46,49,44,49,45,49,46", "T,253,44,253,45,253,46,252,45", "I,300,46,300,45,300,44,300,43", "I,37,46,37,45,37,44,37,43", "M,441,45", "M,180,45", "M,285,45", "D,152,45,153,45", "M,189,45", "M,432,45", "O,126,44,127,44,126,45,127,45", "O,144,44,145,44,144,45,145,45", "O,372,44,373,44,372,45,373,45", "O,450,44,451,44,450,45,451,45", "O,380,44,381,44,380,45,381,45", "O,172,44,173,44,172,45,173,45", "D,393,44,393,45", "D,24,44,24,45", "O,12,44,13,44,12,45,13,45", "L,484,44,482,45,483,45,484,45", "L,265,45,264,43,264,44,264,45", "T,440,45,440,44,440,43,441,44", "T,284,45,284,44,284,43,285,44", "S,180,44,180,43,181,45,181,44", "Z,20,45,20,44,21,44,21,43", "J,225,43,224,43,224,44,224,45", "J,393,43,392,43,392,44,392,45", "L,348,43,349,45,349,44,349,43", "L,277,45,276,43,276,44,276,45", "Z,0,45,0,44,1,44,1,43", "J,340,45,341,45,341,44,341,43", "Z,188,45,188,44,189,44,189,43", "L,33,45,32,43,32,44,32,45", "J,336,45,337,45,337,44,337,43", "J,424,45,425,45,425,44,425,43", "T,113,43,113,44,113,45,112,44", "T,445,43,445,44,445,45,444,44", "L,397,45,396,43,396,44,396,45", "I,345,45,345,44,345,43,345,42", "I,344,45,344,44,344,43,344,42", "I,216,45,216,44,216,43,216,42", "I,25,45,25,44,25,43,25,42", "I,320,45,320,44,320,43,320,42", "I,48,45,48,44,48,43,48,42", "I,321,45,321,44,321,43,321,42", "I,77,45,77,44,77,43,77,42", "I,76,45,76,44,76,43,76,42", "I,209,45,209,44,209,43,209,42", "I,229,45,229,44,229,43,229,42", "I,433,45,433,44,433,43,433,42", "M,296,44", "M,225,44", "M,277,44", "M,424,44", "M,36,44", "M,208,44", "M,45,44", "M,217,44", "D,482,44,483,44", "O,84,43,85,43,84,44,85,44", "D,93,43,93,44", "O,152,43,153,43,152,44,153,44", "O,464,43,465,43,464,44,465,44", "D,432,43,432,44", "J,134,44,135,44,135,43,135,42", "T,297,42,297,43,297,44,296,43", "J,93,42,92,42,92,43,92,44", "L,264,42,265,44,265,43,265,42", "Z,44,44,44,43,45,43,45,42", "Z,252,44,252,43,253,43,253,42", "L,396,42,397,44,397,43,397,42", "I,340,44,340,43,340,42,340,41", "I,336,44,336,43,336,42,336,41", "I,301,44,301,43,301,42,301,41", "I,33,44,33,43,33,42,33,41", "D,472,43,473,43", "M,49,43", "M,112,43", "D,134,42,134,43", "O,172,42,173,42,172,43,173,43", "O,128,42,129,42,128,43,129,43", "O,456,42,457,42,456,43,457,43", "O,288,42,289,42,288,43,289,43", "L,453,43,452,41,452,42,452,43", "J,372,43,373,43,373,42,373,41", "T,181,41,181,42,181,43,180,42", "J,25,41,24,41,24,42,24,43", "J,380,43,381,43,381,42,381,41", "J,21,41,20,41,20,42,20,43", "Z,188,43,188,42,189,42,189,41", "T,441,41,441,42,441,43,440,42", "T,424,43,424,42,424,41,425,42", "L,13,43,12,41,12,42,12,43", "Z,36,43,36,42,37,42,37,41", "J,445,41,444,41,444,42,444,43", "J,272,43,273,43,273,42,273,41", "I,285,43,285,42,285,41,285,40", "I,217,43,217,42,217,41,217,40", "I,0,43,0,42,0,41,0,40", "I,277,43,277,42,277,41,277,40", "I,228,43,228,42,228,41,228,40", "I,208,43,208,42,208,41,208,40", "M,472,42", "M,85,42", "D,392,42,393,42", "M,21,42", "M,296,42", "M,337,42", "D,152,42,153,42", "M,44,42", "M,13,42", "M,445,42", "M,272,42", "D,284,41,284,42", "T,48,41,49,41,50,41,49,42", "D,453,42,453,41", "L,252,42,254,41,253,41,252,41", "O,464,41,465,41,464,42,465,42", "D,1,42,1,41", "D,276,41,276,42", "S,472,41,472,40,473,42,473,41", "J,373,40,372,40,372,41,372,42", "T,84,42,84,41,84,40,85,41", "L,340,40,341,42,341,41,341,40", "J,381,40,380,40,380,41,380,42", "S,223,41,223,40,224,42,224,41", "Z,432,42,432,41,433,41,433,40", "J,112,42,113,42,113,41,113,40", "L,349,42,348,40,348,41,348,42", "I,300,42,300,41,300,40,300,39", "I,32,42,32,41,32,40,32,39", "I,225,42,225,41,225,40,225,39", "D,386,41,387,41", "I,51,41,52,41,53,41,54,41", "I,352,41,353,41,354,41,355,41", "M,234,41", "M,122,41", "M,400,41", "I,294,41,295,41,296,41,297,41", "I,459,41,460,41,461,41,462,41", "M,128,41", "M,463,41", "M,458,41", "I,13,41,14,41,15,41,16,41", "M,440,41", "M,42,41", "D,221,41,220,41", "D,269,41,270,41", "J,55,41,55,40,54,40,53,40", "J,388,41,388,40,387,40,386,40", "O,389,40,390,40,389,41,390,41", "O,136,40,137,40,136,41,137,41", "O,150,40,151,40,150,41,151,41", "T,319,41,318,41,317,41,318,40", "D,391,41,391,40", "O,258,40,259,40,258,41,259,41", "T,403,41,402,41,401,41,402,40", "L,7,40,5,41,6,41,7,41", "L,4,41,6,40,5,40,4,40", "T,316,41,315,41,314,41,315,40", "J,235,41,235,40,234,40,233,40", "L,257,40,255,41,256,41,257,41", "T,233,41,232,41,231,41,232,40", "O,2,40,3,40,2,41,3,41", "S,230,40,231,40,229,41,230,41", "J,90,40,90,41,91,41,92,41", "D,180,40,180,41", "L,399,41,401,40,400,40,399,40", "D,93,41,93,40", "D,216,41,216,40", "T,122,40,123,40,124,40,123,41", "O,218,40,219,40,218,41,219,41", "T,126,41,125,41,124,41,125,40", "T,126,40,127,40,128,40,127,41", "O,76,40,77,40,76,41,77,41", "Z,42,40,43,40,43,41,44,41", "L,457,41,459,40,458,40,457,40", "L,19,40,17,41,18,41,19,41", "D,188,41,188,40", "J,222,41,222,40,221,40,220,40", "O,397,40,398,40,397,41,398,41", "L,305,40,303,41,304,41,305,41", "O,306,40,307,40,306,41,307,41", "D,289,40,289,41", "L,351,40,349,41,350,41,351,41", "S,272,40,273,40,271,41,272,41", "L,268,41,270,40,269,40,268,40", "T,267,41,266,41,265,41,266,40", "L,345,41,344,39,344,40,344,41", "J,172,41,173,41,173,40,173,39", "T,337,39,337,40,337,41,336,40", "L,44,39,45,41,45,40,45,39", "L,128,39,129,41,129,40,129,39", "T,425,39,425,40,425,41,424,40", "J,457,39,456,39,456,40,456,41", "S,301,40,301,39,302,41,302,40", "L,208,39,209,41,209,40,209,39", "Z,36,41,36,40,37,40,37,39", "T,264,41,264,40,264,39,265,40", "I,112,41,112,40,112,39,112,38", "I,396,41,396,40,396,39,396,38", "I,288,41,288,40,288,39,288,38", "M,319,40", "I,49,40,50,40,51,40,52,40", "M,452,40", "M,314,40", "I,253,40,254,40,255,40,256,40", "M,403,40", "D,316,40,317,40", "I,352,40,353,40,354,40,355,40", "M,172,40", "I,460,40,461,40,462,40,463,40", "M,44,40", "I,14,40,15,40,16,40,17,40", "D,296,40,295,40", "M,12,40", "M,294,40", "D,304,40,303,40", "D,349,40,350,40", "M,18,40", "M,271,40", "M,267,40", "S,92,39,93,39,91,40,92,40", "D,345,40,345,39", "D,465,39,465,40", "D,440,39,440,40", "S,452,39,452,38,453,40,453,39", "L,472,38,473,40,473,39,473,38", "T,284,40,284,39,284,38,285,39", "Z,48,40,48,39,49,39,49,38", "T,85,38,85,39,85,40,84,39", "Z,252,40,252,39,253,39,253,38", "J,20,40,21,40,21,39,21,38", "S,188,39,188,38,189,40,189,39", "S,12,39,12,38,13,40,13,39", "T,276,40,276,39,276,38,277,39", "J,444,40,445,40,445,39,445,38", "T,432,40,432,39,432,38,433,39", "L,25,40,24,38,24,39,24,40", "L,32,38,33,40,33,39,33,38", "J,225,38,224,38,224,39,224,40", "T,229,38,229,39,229,40,228,39", "I,181,40,181,39,181,38,181,37", "I,1,40,1,39,1,38,1,37", "I,464,40,464,39,464,38,464,37", "I,441,40,441,39,441,38,441,37", "I,297,40,297,39,297,38,297,37", "M,121,39", "M,472,39", "D,372,39,373,39", "M,260,39", "M,444,39", "M,25,39", "M,289,39", "M,265,39", "O,148,38,149,38,148,39,149,39", "O,88,38,89,38,88,39,89,39", "O,138,38,139,38,138,39,139,39", "O,292,38,293,38,292,39,293,39", "O,40,38,41,38,40,39,41,39", "D,217,39,217,38", "D,348,39,348,38", "O,272,38,273,38,272,39,273,39", "Z,120,39,120,38,121,38,121,37", "J,8,39,9,39,9,38,9,37", "J,312,39,313,39,313,38,313,37", "T,261,37,261,38,261,39,260,38", "J,384,39,385,39,385,38,385,37", "T,172,39,172,38,172,37,173,38", "J,217,37,216,37,216,38,216,39", "L,381,39,380,37,380,38,380,39", "Z,336,39,336,38,337,38,337,37", "L,112,37,113,39,113,38,113,37", "L,396,37,397,39,397,38,397,37", "Z,424,39,424,38,425,38,425,37", "Z,36,39,36,38,37,38,37,37", "I,180,39,180,38,180,37,180,36", "I,0,39,0,38,0,37,0,36", "I,20,39,20,38,20,37,20,36", "I,77,39,77,38,77,37,77,36", "I,76,39,76,38,76,37,76,36", "I,296,39,296,38,296,37,296,36", "I,349,39,349,38,349,37,349,36", "M,453,38", "D,129,38,128,38", "M,277,38", "D,457,38,456,38", "M,433,38", "M,208,38", "O,264,37,265,37,264,38,265,38", "O,344,37,345,37,344,38,345,38", "D,84,37,84,38", "O,300,37,301,37,300,38,301,38", "L,289,38,291,37,290,37,289,37", "J,9,36,8,36,8,37,8,38", "J,313,36,312,36,312,37,312,38", "L,93,38,92,36,92,37,92,38", "J,385,36,384,36,384,37,384,38", "L,284,36,285,38,285,37,285,36", "J,372,38,373,38,373,37,373,36", "L,464,36,465,38,465,37,465,36", "J,441,36,440,36,440,37,440,38", "J,253,36,252,36,252,37,252,38", "L,45,38,44,36,44,37,44,38", "T,13,36,13,37,13,38,12,37", "T,189,36,189,37,189,38,188,37", "L,24,36,25,38,25,37,25,36", "Z,228,38,228,37,229,37,229,36", "S,208,37,208,36,209,38,209,37", "I,381,38,381,37,381,36,381,35", "I,48,38,48,37,48,36,48,35", "I,444,38,444,37,444,36,444,35", "M,120,37", "M,284,37", "M,110,37", "M,93,37", "M,260,37", "M,45,37", "M,253,37", "M,21,37", "M,336,37", "M,372,37", "M,24,37", "M,288,37", "D,38,37,39,37", "M,36,37", "O,450,36,451,36,450,37,451,37", "O,470,36,471,36,470,37,471,37", "O,474,36,475,36,474,37,475,37", "O,276,36,277,36,276,37,277,37", "T,110,36,111,36,112,36,111,37", "O,432,36,433,36,432,37,433,37", "O,128,36,129,36,128,37,129,37", "T,87,37,86,37,85,37,86,36", "O,456,36,457,36,456,37,457,37", "O,32,36,33,36,32,37,33,37", "L,141,37,140,35,140,36,140,37", "T,173,35,173,36,173,37,172,36", "L,225,37,224,35,224,36,224,37", "L,273,37,272,35,272,36,272,37", "J,446,35,445,35,445,36,445,37", "J,150,37,151,37,151,36,151,35", "Z,424,37,424,36,425,36,425,35", "J,349,35,348,35,348,36,348,37", "I,49,37,49,36,49,35,49,34", "D,121,36,120,36", "D,265,36,264,36", "D,261,36,260,36", "M,181,36", "M,217,36", "M,1,36", "M,85,36", "M,141,36", "M,87,36", "M,188,36", "M,228,36", "M,209,36", "S,397,35,398,35,396,36,397,36", "J,289,35,289,36,290,36,291,36", "J,37,35,37,36,38,36,39,36", "L,345,36,344,34,344,35,344,36", "J,301,34,300,34,300,35,300,36", "L,272,34,273,36,273,35,273,34", "S,92,35,92,34,93,36,93,35", "T,113,34,113,35,113,36,112,35", "J,336,36,337,36,337,35,337,34", "J,373,34,372,34,372,35,372,36", "J,381,34,380,34,380,35,380,36", "S,20,35,20,34,21,36,21,35", "L,224,34,225,36,225,35,225,34", "T,216,36,216,35,216,34,217,35", "T,84,36,84,35,84,34,85,35", "T,297,34,297,35,297,36,296,35", "J,13,34,12,34,12,35,12,36", "Z,301,36,301,35,302,35,302,34", "S,44,35,44,34,45,36,45,35", "S,149,35,149,34,150,36,150,35", "J,289,34,288,34,288,35,288,36", "J,37,34,36,34,36,35,36,36", "I,4,35,5,35,6,35,7,35", "I,0,35,1,35,2,35,3,35", "I,315,35,316,35,317,35,318,35", "D,319,35,320,35", "M,79,35", "I,233,35,234,35,235,35,236,35", "M,74,35", "I,28,35,29,35,30,35,31,35", "M,314,35", "M,174,35", "M,373,35", "I,460,35,461,35,462,35,463,35", "I,123,35,124,35,125,35,126,35", "I,183,35,184,35,185,35,186,35", "D,428,35,429,35", "I,229,35,230,35,231,35,232,35", "M,401,35", "M,256,35", "M,133,35", "D,54,35,55,35", "M,283,35", "M,390,35", "M,53,35", "D,139,35,138,35", "M,13,35", "M,393,35", "M,396,35", "D,281,35,280,35", "I,354,35,355,35,356,35,357,35", "D,152,35,153,35", "M,279,35", "I,350,35,351,35,352,35,353,35", "M,424,35", "I,208,35,209,35,210,35,211,35", "M,207,35", "O,468,34,469,34,468,35,469,35", "T,259,35,258,35,257,35,258,34", "J,434,34,434,35,435,35,436,35", "O,476,34,477,34,476,35,477,35", "L,206,34,204,35,205,35,206,35", "T,170,35,169,35,168,35,169,34", "O,264,34,265,34,264,35,265,35", "Z,170,34,171,34,171,35,172,35", "L,405,34,403,35,404,35,405,35", "J,437,35,437,34,436,34,435,34", "J,321,35,321,34,320,34,319,34", "L,402,35,404,34,403,34,402,34", "D,336,35,336,34", "T,177,35,176,35,175,35,176,34", "O,438,34,439,34,438,35,439,35", "L,255,35,257,34,256,34,255,34", "J,237,35,237,34,236,34,235,34", "S,392,34,393,34,391,35,392,35", "D,345,35,345,34", "S,78,34,79,34,77,35,78,35", "S,76,34,77,34,75,35,76,35", "L,122,35,124,34,123,34,122,34", "Z,55,34,56,34,56,35,57,35", "J,386,34,386,35,387,35,388,35", "O,26,34,27,34,26,35,27,35", "J,141,35,141,34,140,34,139,34", "S,400,34,401,34,399,35,400,35", "J,389,35,389,34,388,34,387,34", "J,127,35,127,34,126,34,125,34", "L,427,35,429,34,428,34,427,34", "L,182,35,184,34,183,34,182,34", "L,420,35,422,34,421,34,420,34", "T,281,34,282,34,283,34,282,35", "J,187,35,187,34,186,34,185,34", "T,449,35,448,35,447,35,448,34", "L,423,34,421,35,422,35,423,35", "L,228,35,230,34,229,34,228,34", "L,303,35,305,34,304,34,303,34", "L,254,34,252,35,253,35,254,35", "O,458,34,459,34,458,35,459,35", "L,52,35,54,34,53,34,52,34", "L,132,35,134,34,133,34,132,34", "T,136,35,135,35,134,35,135,34", "J,307,34,307,35,308,35,309,35", "T,136,34,137,34,138,34,137,35", "L,306,34,304,35,305,35,306,35", "L,278,35,280,34,279,34,278,34", "Z,211,34,212,34,212,35,213,35", "O,50,34,51,34,50,35,51,35", "J,146,34,146,35,147,35,148,35", "O,144,34,145,34,144,35,145,35", "J,426,35,426,34,425,34,424,34", "I,314,34,315,34,316,34,317,34", "M,168,34", "D,205,34,204,34", "I,2,34,3,34,4,34,5,34", "I,172,34,173,34,174,34,175,34", "M,112,34", "M,93,34", "D,1,34,0,34", "D,7,34,6,34", "M,21,34", "I,28,34,29,34,30,34,31,34", "M,318,34", "D,75,34,74,34", "M,177,34", "I,231,34,232,34,233,34,234,34", "M,57,34", "I,444,34,445,34,446,34,447,34", "I,460,34,461,34,462,34,463,34", "M,85,34", "I,396,34,397,34,398,34,399,34", "D,390,34,391,34", "M,217,34", "M,259,34", "D,252,34,253,34", "D,308,34,309,34", "M,296,34", "M,449,34", "I,150,34,151,34,152,34,153,34", "M,45,34", "I,352,34,353,34,354,34,355,34", "M,213,34", "D,357,34,356,34", "M,48,34", "D,147,34,148,34", "I,348,34,349,34,350,34,351,34", "I,207,34,208,34,209,34,210,34", "I,232,64,233,64,234,64,235,64", "M,231,64", "I,458,64,459,64,460,64,461,64", "I,252,64,253,64,254,64,255,64", "I,352,64,353,64,354,64,355,64", "M,351,64", "M,129,64", "M,61,64", "M,133,64", "D,474,64,475,64", "I,412,64,413,64,414,64,415,64", "D,447,64,446,64", "M,204,64", "M,20,64", "I,258,64,259,64,260,64,261,64", "D,315,64,316,64", "D,319,64,318,64", "I,100,64,101,64,102,64,103,64", "D,256,64,257,64", "I,96,64,97,64,98,64,99,64", "M,411,64", "M,408,64", "I,72,64,73,64,74,64,75,64", "I,76,64,77,64,78,64,79,64", "M,81,64", "M,248,64", "I,372,64,373,64,374,64,375,64", "M,425,64", "M,423,64", "M,420,64", "L,329,63,327,64,328,64,329,64", "L,230,64,232,63,231,63,230,63", "S,457,63,458,63,456,64,457,64", "L,280,63,278,64,279,64,280,64", "O,282,63,283,63,282,64,283,64", "O,140,63,141,63,140,64,141,64", "L,350,64,352,63,351,63,350,63", "J,307,64,307,63,306,63,305,63", "Z,461,63,462,63,462,64,463,64", "O,158,63,159,63,158,64,159,64", "O,476,63,477,63,476,64,477,64", "O,302,63,303,63,302,64,303,64", "J,485,64,485,63,484,63,483,63", "J,304,63,304,64,305,64,306,64", "D,240,64,240,63", "J,482,63,482,64,483,64,484,64", "O,428,63,429,63,428,64,429,64", "O,294,63,295,63,294,64,295,64", "J,290,63,290,64,291,64,292,64", "T,451,64,450,64,449,64,450,63", "J,293,64,293,63,292,63,291,63", "D,12,63,12,64", "J,471,63,471,64,472,64,473,64", "D,281,64,281,63", "T,447,63,448,63,449,63,448,64", "O,320,63,321,63,320,64,321,64", "J,324,63,324,64,325,64,326,64", "L,317,64,319,63,318,63,317,63", "L,314,64,316,63,315,63,314,63", "O,426,63,427,63,426,64,427,64", "L,381,63,379,64,380,64,381,64", "O,180,63,181,63,180,64,181,64", "L,378,64,380,63,379,63,378,63", "S,410,63,411,63,409,64,410,64", "J,468,63,468,64,469,64,470,64", "O,376,63,377,63,376,64,377,64", "T,79,63,80,63,81,63,80,64", "T,423,63,424,63,425,63,424,64", "O,480,63,481,63,480,64,481,64", "O,421,63,422,63,421,64,422,64", "L,113,64,112,62,112,63,112,64", "Z,128,64,128,63,129,63,129,62", "L,217,64,216,62,216,63,216,64", "L,12,62,13,64,13,63,13,62", "L,240,62,241,64,241,63,241,62", "L,53,64,52,62,52,63,52,64", "T,205,62,205,63,205,64,204,63", "J,188,64,189,64,189,63,189,62", "J,224,64,225,64,225,63,225,62", "T,21,62,21,63,21,64,20,63", "L,69,64,68,62,68,63,68,64", "J,388,64,389,64,389,63,389,62", "J,120,64,121,64,121,63,121,62", "L,361,64,360,62,360,63,360,64", "L,313,64,312,62,312,63,312,64", "J,28,64,29,64,29,63,29,62", "T,249,62,249,63,249,64,248,63", "I,368,64,368,63,368,62,368,61", "I,369,64,369,63,369,62,369,61", "I,132,64,132,63,132,62,132,61", "I,148,64,148,63,148,62,148,61", "I,60,64,60,63,60,62,60,61", "I,149,64,149,63,149,62,149,61", "D,459,63,460,63", "D,234,63,235,63", "M,456,63", "D,353,63,354,63", "D,278,63,279,63", "M,463,63", "M,233,63", "M,355,63", "I,472,63,473,63,474,63,475,63", "M,451,63", "I,256,63,257,63,258,63,259,63", "I,412,63,413,63,414,63,415,63", "I,100,63,101,63,102,63,103,63", "I,325,63,326,63,327,63,328,63", "M,446,63", "D,260,63,261,63", "M,224,63", "D,469,63,470,63", "I,96,63,97,63,98,63,99,63", "I,75,63,76,63,77,63,78,63", "D,113,63,113,62", "J,253,62,253,63,254,63,255,63", "D,69,62,69,63", "J,72,62,72,63,73,63,74,63", "J,373,62,373,63,374,63,375,63", "J,189,61,188,61,188,62,188,63", "L,409,63,408,61,408,62,408,63", "L,360,61,361,63,361,62,361,61", "J,121,61,120,61,120,62,120,63", "L,312,61,313,63,313,62,313,61", "J,29,61,28,61,28,62,28,63", "T,420,63,420,62,420,61,421,62", "I,217,63,217,62,217,61,217,60", "I,61,63,61,62,61,61,61,60", "I,133,63,133,62,133,61,133,60", "I,53,63,53,62,53,61,53,60", "I,388,63,388,62,388,61,388,60", "I,252,63,252,62,252,61,252,60", "I,372,63,372,62,372,61,372,60", "M,236,62", "M,161,62", "M,409,62", "D,276,62,277,62", "O,138,61,139,61,138,62,139,62", "O,284,61,285,61,284,62,285,62", "O,486,61,487,61,486,62,487,62", "O,330,61,331,61,330,62,331,62", "D,160,61,160,62", "O,104,61,105,61,104,62,105,62", "O,464,61,465,61,464,62,465,62", "D,309,61,309,62", "O,228,61,229,61,228,62,229,62", "D,324,62,324,61", "D,20,62,20,61", "O,180,61,181,61,180,62,181,62", "J,288,62,289,62,289,61,289,60", "Z,204,62,204,61,205,61,205,60", "T,237,60,237,61,237,62,236,61", "J,356,62,357,62,357,61,357,60", "J,225,60,224,60,224,61,224,62", "J,309,60,308,60,308,61,308,62", "L,297,62,296,60,296,61,296,62", "T,73,60,73,61,73,62,72,61", "L,324,60,325,62,325,61,325,60", "J,480,62,481,62,481,61,481,60", "I,452,62,452,61,452,60,452,59", "I,453,62,453,61,453,60,453,59", "I,444,62,444,61,444,60,444,59", "I,445,62,445,61,445,60,445,59", "I,416,62,416,61,416,60,416,59", "I,417,62,417,61,417,60,417,59", "I,300,62,300,61,300,60,300,59", "I,301,62,301,61,301,60,301,59", "I,128,62,128,61,128,60,128,59", "I,349,62,349,61,349,60,349,59", "I,348,62,348,61,348,60,348,59", "I,469,62,469,61,469,60,469,59", "I,468,62,468,61,468,60,468,59", "I,248,62,248,61,248,60,248,59", "M,52,61", "M,225,61", "M,297,61", "M,356,61", "M,21,61", "M,276,61", "D,288,61,288,60", "D,389,60,389,61", "L,160,59,161,61,161,60,161,59", "J,12,61,13,61,13,60,13,59", "J,217,59,216,59,216,60,216,61", "J,240,61,241,61,241,60,241,59", "S,276,60,276,59,277,61,277,60", "L,420,59,421,61,421,60,421,59", "L,372,59,373,61,373,60,373,59", "I,113,61,113,60,113,59,113,58", "I,112,61,112,60,112,59,112,58", "I,68,61,68,60,68,59,68,58", "I,69,61,69,60,69,59,69,58", "I,129,61,129,60,129,59,129,58", "I,409,61,409,60,409,59,409,58", "I,253,61,253,60,253,59,253,58", "I,480,61,480,60,480,59,480,58", "I,249,61,249,60,249,59,249,58", "M,158,60", "M,236,60", "M,360,60", "D,228,60,229,60", "M,420,60", "Z,158,59,159,59,159,60,160,60", "D,489,60,489,59", "O,104,59,105,59,104,60,105,60", "O,464,59,465,59,464,60,465,60", "O,28,59,29,59,28,60,29,60", "D,189,59,189,60", "L,333,60,332,58,332,59,332,60", "J,489,58,488,58,488,59,488,60", "L,369,60,368,58,368,59,368,60", "T,204,60,204,59,204,58,205,59", "J,148,60,149,60,149,59,149,58", "L,137,60,136,58,136,59,136,60", "T,72,60,72,59,72,58,73,59", "J,13,58,12,58,12,59,12,60", "T,52,60,52,59,52,58,53,59", "Z,60,60,60,59,61,59,61,58", "T,356,60,356,59,356,58,357,59", "T,297,58,297,59,297,60,296,59", "S,360,59,360,58,361,60,361,59", "J,20,60,21,60,21,59,21,58", "L,121,60,120,58,120,59,120,60", "J,312,60,313,60,313,59,313,58", "J,189,58,188,58,188,59,188,60", "J,182,58,181,58,181,59,181,60", "I,132,60,132,59,132,58,132,57", "I,408,60,408,59,408,58,408,57", "I,240,60,240,59,240,58,240,57", "I,180,60,180,59,180,58,180,57", "D,236,59,237,59", "M,137,59", "M,148,59", "M,389,59", "M,325,59", "M,224,59", "O,228,58,229,58,228,59,229,59", "D,133,59,133,58", "J,225,59,225,58,224,58,223,58", "D,312,59,312,58", "D,481,59,481,58", "L,121,59,123,58,122,58,121,58", "L,332,57,333,59,333,58,333,57", "L,368,57,369,59,369,58,369,57", "J,308,59,309,59,309,58,309,57", "Z,324,59,324,58,325,58,325,57", "T,277,57,277,58,277,59,276,58", "J,253,57,252,57,252,58,252,59", "I,388,59,388,58,388,57,388,56", "I,288,59,288,58,288,57,288,56", "I,289,59,289,58,289,57,289,56", "I,20,59,20,58,20,57,20,56", "I,423,58,424,58,425,58,426,58", "I,73,58,74,58,75,58,76,58", "D,207,58,208,58", "M,415,58", "D,98,58,99,58", "M,100,58", "I,410,58,411,58,412,58,413,58", "M,139,58", "I,468,58,469,58,470,58,471,58", "M,357,58", "M,348,58", "M,296,58", "M,134,58", "M,60,58", "M,62,58", "M,248,58", "I,184,58,185,58,186,58,187,58", "M,372,58", "I,124,58,125,58,126,58,127,58", "O,474,57,475,57,474,58,475,58", "L,79,57,77,58,78,58,79,58", "J,209,57,209,58,210,58,211,58", "J,427,58,427,57,426,57,425,57", "S,206,57,207,57,205,58,206,58", "O,452,57,453,57,452,58,453,58", "O,472,57,473,57,472,58,473,58", "O,458,57,459,57,458,58,459,58", "L,259,57,257,58,258,58,259,58", "T,413,57,414,57,415,57,414,58", "T,103,58,102,58,101,58,102,57", "O,14,57,15,57,14,58,15,58", "S,138,57,139,57,137,58,138,58", "O,366,57,367,57,366,58,367,58", "D,445,57,445,58", "L,256,58,258,57,257,57,256,57", "L,135,58,137,57,136,57,135,57", "L,422,58,424,57,423,57,422,57", "O,18,57,19,57,18,58,19,58", "O,16,57,17,57,16,58,17,58", "O,462,57,463,57,462,58,463,58", "O,460,57,461,57,460,58,461,58", "L,218,57,216,58,217,58,218,58", "L,67,57,65,58,66,58,67,58", "L,219,58,221,57,220,57,219,57", "S,64,57,65,57,63,58,64,58", "O,254,57,255,57,254,58,255,58", "L,222,57,220,58,221,58,222,58", "L,247,58,249,57,248,57,247,57", "D,246,58,246,57", "D,420,57,420,58", "D,183,58,183,57", "J,236,58,237,58,237,57,237,56", "Z,148,58,148,57,149,57,149,56", "J,300,58,301,58,301,57,301,56", "S,348,57,348,56,349,58,349,57", "J,309,56,308,56,308,57,308,58", "S,360,57,360,56,361,58,361,57", "L,29,58,28,56,28,57,28,58", "S,52,57,52,56,53,58,53,57", "Z,128,58,128,57,129,57,129,56", "L,420,56,421,58,421,57,421,56", "S,372,57,372,56,373,58,373,57", "I,389,58,389,57,389,56,389,55", "I,444,58,444,57,444,56,444,55", "I,241,58,241,57,241,56,241,55", "I,75,57,76,57,77,57,78,57", "D,210,57,211,57", "M,208,57", "I,98,57,99,57,100,57,101,57", "M,103,57", "M,74,57", "I,409,57,410,57,411,57,412,57", "I,468,57,469,57,470,57,471,57", "M,356,57", "M,229,57", "M,29,57", "M,113,57", "M,276,57", "M,66,57", "I,60,57,61,57,62,57,63,57", "M,223,57", "I,120,57,121,57,122,57,123,57", "I,185,57,186,57,187,57,188,57", "M,189,57", "I,124,57,125,57,126,57,127,57", "M,184,57", "D,12,56,12,57", "D,300,56,300,57", "Z,132,56,133,56,133,57,134,57", "D,297,57,297,56", "D,216,56,216,57", "Z,180,56,181,56,181,57,182,57", "J,488,57,489,57,489,56,489,55", "L,69,57,68,55,68,56,68,57", "J,72,57,73,57,73,56,73,55", "L,205,57,204,55,204,56,204,57", "Z,228,57,228,56,229,56,229,55", "L,216,55,217,57,217,56,217,55", "L,225,57,224,55,224,56,224,57", "Z,112,57,112,56,113,56,113,55", "L,481,57,480,55,480,56,480,57", "J,312,57,313,57,313,56,313,55", "I,13,57,13,56,13,55,13,54", "I,236,57,236,56,236,55,236,54", "I,21,57,21,56,21,55,21,54", "I,357,57,357,56,357,55,357,54", "I,296,57,296,56,296,55,296,54", "I,324,57,324,56,324,55,324,54", "D,417,56,416,56", "M,452,56", "M,349,56", "M,368,56", "D,468,56,469,56", "M,69,56", "M,325,56", "M,312,56", "D,60,56,61,56", "M,128,56", "O,456,55,457,55,456,56,457,56", "O,244,55,245,55,244,56,245,56", "D,488,55,488,56", "O,332,55,333,55,332,56,333,56", "O,364,55,365,55,364,56,365,56", "D,205,56,205,55", "D,148,56,148,55", "D,409,56,409,55", "D,361,56,361,55", "L,141,56,140,54,140,55,140,56", "J,212,56,213,56,213,55,213,54", "J,241,54,240,54,240,55,240,56", "S,452,55,452,54,453,56,453,55", "J,73,54,72,54,72,55,72,56", "J,96,56,97,56,97,55,97,54", "T,369,54,369,55,369,56,368,55", "S,28,55,28,54,29,56,29,55", "J,409,54,408,54,408,55,408,56", "L,249,56,248,54,248,55,248,56", "L,480,54,481,56,481,55,481,54", "L,277,56,276,54,276,55,276,56", "L,121,56,120,54,120,55,120,56", "T,373,54,373,55,373,56,372,55", "L,253,56,252,54,252,55,252,56", "I,189,56,189,55,189,54,189,53", "I,188,56,188,55,188,54,188,53", "I,225,56,225,55,225,54,225,53", "I,356,56,356,55,356,54,356,53", "I,445,56,445,55,445,54,445,53", "I,53,56,53,55,53,54,53,53", "M,388,55", "M,133,55", "M,360,55", "M,469,55", "M,61,55", "O,416,54,417,54,416,55,417,55", "D,301,55,301,54", "O,308,54,309,54,308,55,309,55", "J,13,53,12,53,12,54,12,55", "L,349,55,348,53,348,54,348,55", "L,181,55,180,53,180,54,180,55", "J,213,53,212,53,212,54,212,55", "L,236,53,237,55,237,54,237,53", "L,140,53,141,55,141,54,141,53", "J,288,55,289,55,289,54,289,53", "J,21,53,20,53,20,54,20,55", "T,69,53,69,54,69,55,68,54", "J,301,53,300,53,300,54,300,55", "J,97,53,96,53,96,54,96,55", "J,229,53,228,53,228,54,228,55", "L,296,53,297,55,297,54,297,53", "T,312,55,312,54,312,53,313,54", "S,148,54,148,53,149,55,149,54", "L,276,53,277,55,277,54,277,53", "T,132,55,132,54,132,53,133,54", "L,324,53,325,55,325,54,325,53", "L,248,53,249,55,249,54,249,53", "Z,468,55,468,54,469,54,469,53", "L,120,53,121,55,121,54,121,53", "Z,112,55,112,54,113,54,113,53", "Z,60,55,60,54,61,54,61,53", "J,128,55,129,55,129,54,129,53", "I,52,55,52,54,52,53,52,52", "I,421,55,421,54,421,53,421,52", "I,420,55,420,54,420,53,420,52", "I,253,55,253,54,253,53,253,52", "M,204,54", "M,444,54", "M,229,54", "M,372,54", "O,456,53,457,53,456,54,457,54", "O,486,53,487,53,486,54,487,54", "L,363,53,361,54,362,54,363,54", "D,349,54,349,53", "O,284,53,285,53,284,54,285,54", "O,386,53,387,53,386,54,387,54", "D,181,53,181,54", "D,243,53,243,54", "O,330,53,331,53,330,54,331,54", "O,390,53,391,53,390,54,391,54", "D,288,54,288,53", "D,128,54,128,53", "S,241,53,241,52,242,54,242,53", "J,216,54,217,54,217,53,217,52", "T,29,52,29,53,29,54,28,53", "Z,368,54,368,53,369,53,369,52", "S,204,53,204,52,205,54,205,53", "I,453,54,453,53,453,52,453,51", "I,224,54,224,53,224,52,224,51", "I,360,54,360,53,360,52,360,51", "D,417,53,416,53", "M,68,53", "M,357,53", "M,112,53", "M,133,53", "M,409,53", "L,481,53,483,52,482,52,481,52", "D,452,53,452,52", "D,252,52,252,53", "J,241,51,240,51,240,52,240,53", "J,217,51,216,51,216,52,216,53", "J,481,51,480,51,480,52,480,53", "L,73,53,72,51,72,52,72,53", "L,362,53,361,51,361,52,361,53", "J,308,53,309,53,309,52,309,51", "Z,444,53,444,52,445,52,445,51", "L,312,51,313,53,313,52,313,51", "T,149,53,149,52,149,51,150,52", "J,469,51,468,51,468,52,468,53", "Z,60,53,60,52,61,52,61,51", "L,373,53,372,51,372,52,372,53", "Z,408,53,408,52,409,52,409,51", "I,24,52,25,52,26,52,27,52", "I,350,52,351,52,352,52,353,52", "M,211,52", "M,14,52", "M,230,52", "M,414,52", "M,235,52", "D,485,52,484,52", "M,232,52", "I,183,52,184,52,185,52,186,52", "D,19,52,18,52", "D,464,52,465,52", "I,114,52,115,52,116,52,117,52", "I,459,52,460,52,461,52,462,52", "M,424,52", "I,473,52,474,52,475,52,476,52", "M,428,52", "M,144,52", "I,469,52,470,52,471,52,472,52", "D,125,52,124,52", "I,30,52,31,52,32,52,33,52", "D,152,52,153,52", "M,123,52", "M,312,52", "M,368,52", "M,105,52", "M,57,52", "M,256,52", "M,50,52", "D,110,52,109,52", "O,384,51,385,51,384,52,385,52", "L,329,51,327,52,328,52,329,52", "S,210,51,211,51,209,52,210,52", "J,28,52,28,51,27,51,26,51", "O,392,51,393,51,392,52,393,52", "J,80,52,80,51,79,51,78,51", "J,77,51,77,52,78,52,79,52", "J,415,52,415,51,414,51,413,51", "O,300,51,301,51,300,52,301,52", "T,14,51,15,51,16,51,15,52", "S,234,51,235,51,233,52,234,52", "J,139,52,139,51,138,51,137,51", "O,354,51,355,51,354,52,355,52", "T,230,51,231,51,232,51,231,52", "D,81,51,81,52", "J,411,51,411,52,412,52,413,52", "L,122,52,124,51,123,51,122,51", "L,463,52,465,51,464,51,463,51", "T,208,52,207,52,206,52,207,51", "O,68,51,69,51,68,52,69,52", "S,17,51,18,51,16,52,17,52", "L,182,52,184,51,183,51,182,51", "O,290,51,291,51,290,52,291,52", "J,136,51,136,52,137,52,138,52", "J,429,52,429,51,428,51,427,51", "T,427,52,426,52,425,52,426,51", "J,324,51,324,52,325,52,326,52", "Z,259,51,260,51,260,52,261,52", "O,73,51,74,51,73,52,74,52", "J,295,52,295,51,294,51,293,51", "D,225,51,225,52", "J,292,51,292,52,293,52,294,52", "O,75,51,76,51,75,52,76,52", "J,187,52,187,51,186,51,185,51", "J,278,51,278,52,279,52,280,52", "T,144,51,145,51,146,51,145,52", "L,423,52,425,51,424,51,423,51", "D,308,51,308,52", "O,48,51,49,51,48,52,49,52", "T,204,51,205,51,206,51,205,52", "L,148,51,146,52,147,52,148,52", "J,477,52,477,51,476,51,475,51", "J,281,52,281,51,280,51,279,51", "O,282,51,283,51,282,52,283,52", "L,98,52,100,51,99,51,98,51", "O,248,51,249,51,248,52,249,52", "D,458,51,458,52", "T,259,52,258,52,257,52,258,51", "Z,125,51,126,51,126,52,127,52", "L,151,52,153,51,152,51,151,51", "L,101,51,99,52,100,52,101,52", "L,255,52,257,51,256,51,255,51", "S,104,51,105,51,103,52,104,52", "D,102,52,102,51", "S,56,51,57,51,55,52,56,52", "T,50,51,51,51,52,51,51,52", "S,54,51,55,51,53,52,54,52", "D,373,52,373,51", "L,108,52,110,51,109,51,108,51", "J,422,52,422,51,421,51,420,51", "J,254,52,254,51,253,51,252,51", "L,113,51,111,52,112,52,113,52", "J,135,52,135,51,134,51,133,51", "J,132,51,132,52,133,52,134,52", "D,410,52,410,51", "I,482,51,483,51,484,51,485,51", "I,325,51,326,51,327,51,328,51", "I,350,51,351,51,352,51,353,51", "M,412,51", "D,25,51,24,51", "M,233,51", "M,452,51", "D,209,51,208,51", "M,19,51", "I,459,51,460,51,461,51,462,51", "I,114,51,115,51,116,51,117,51", "M,444,51", "I,471,51,472,51,473,51,474,51", "M,147,51", "M,261,51", "D,368,51,369,51", "M,127,51", "I,29,51,30,51,31,51,32,51", "M,33,51", "M,150,51", "M,103,51", "M,470,51", "M,53,51", "M,60,51", "D,111,51,112,51", "M,408,51", "D,225,81,226,81", "D,228,81,229,81", "I,178,81,179,81,180,81,181,81", "M,439,81", "M,146,81", "I,420,81,421,81,422,81,423,81", "M,66,81", "M,339,81", "I,357,81,358,81,359,81,360,81", "D,397,81,396,81", "D,46,81,47,81", "M,44,81", "M,466,81", "M,462,81", "M,262,81", "M,91,81", "M,310,81", "I,150,81,151,81,152,81,153,81", "M,157,81", "M,108,81", "M,342,81", "M,155,81", "D,167,81,166,81", "M,164,81", "M,133,81", "D,387,81,386,81", "M,130,81", "M,416,81", "O,410,80,411,80,410,81,411,81", "O,98,80,99,80,98,81,99,81", "T,176,81,175,81,174,81,175,80", "O,392,80,393,80,392,81,393,81", "T,176,80,177,80,178,80,177,81", "T,111,81,110,81,109,81,110,80", "O,158,80,159,80,158,81,159,81", "L,224,81,226,80,225,80,224,80", "L,227,81,229,80,228,80,227,80", "O,272,80,273,80,272,81,273,81", "D,247,81,247,80", "L,395,81,397,80,396,80,395,80", "J,467,81,467,80,466,80,465,80", "D,394,81,394,80", "Z,47,80,48,80,48,81,49,81", "O,34,80,35,80,34,81,35,81", "J,463,80,463,81,464,81,465,81", "T,44,80,45,80,46,80,45,81", "D,78,81,78,80", "J,361,81,361,80,360,80,359,80", "O,74,80,75,80,74,81,75,81", "J,105,80,105,81,106,81,107,81", "O,170,80,171,80,170,81,171,81", "O,350,80,351,80,350,81,351,81", "T,155,80,156,80,157,80,156,81", "D,214,80,214,81", "J,154,81,154,80,153,80,152,80", "J,354,80,354,81,355,81,356,81", "Z,167,80,168,80,168,81,169,81", "J,239,81,239,80,238,80,237,80", "L,301,80,299,81,300,81,301,81", "J,296,80,296,81,297,81,298,81", "T,164,80,165,80,166,80,165,81", "J,236,80,236,81,237,81,238,81", "S,132,80,133,80,131,81,132,81", "S,129,80,130,80,128,81,129,81", "J,417,80,417,81,418,81,419,81", "L,104,80,102,81,103,81,104,81", "S,415,80,416,80,414,81,415,81", "J,191,81,191,80,190,80,189,80", "J,188,80,188,81,189,81,190,81", "T,67,79,67,80,67,81,66,80", "J,247,79,246,79,246,80,246,81", "L,379,81,378,79,378,80,378,81", "L,403,81,402,79,402,80,402,81", "Z,338,81,338,80,339,80,339,79", "T,90,81,90,80,90,79,91,80", "S,146,80,146,79,147,81,147,80", "L,78,79,79,81,79,80,79,79", "T,438,81,438,80,438,79,439,80", "T,263,79,263,80,263,81,262,80", "S,310,80,310,79,311,81,311,80", "L,214,79,215,81,215,80,215,79", "J,162,81,163,81,163,80,163,79", "L,255,81,254,79,254,80,254,81", "L,139,81,138,79,138,80,138,81", "J,446,81,447,81,447,80,447,79", "T,343,79,343,80,343,81,342,80", "L,459,81,458,79,458,80,458,81", "L,235,81,234,79,234,80,234,81", "L,87,81,86,79,86,80,86,81", "I,450,81,450,80,450,79,450,78", "I,451,81,451,80,451,79,451,78", "I,331,81,331,80,331,79,331,78", "I,330,81,330,80,330,79,330,78", "D,179,80,180,80", "M,174,80", "I,420,80,421,80,422,80,423,80", "M,111,80", "M,49,80", "M,181,80", "I,355,80,356,80,357,80,358,80", "I,106,80,107,80,108,80,109,80", "M,464,80", "I,297,80,298,80,299,80,300,80", "M,162,80", "M,169,80", "M,131,80", "M,128,80", "M,235,80", "D,418,80,419,80", "M,414,80", "M,87,80", "D,403,79,403,80", "D,446,79,446,80", "T,462,80,462,79,462,78,463,79", "L,138,78,139,80,139,79,139,78", "J,150,80,151,80,151,79,151,78", "J,386,80,387,80,387,79,387,78", "J,102,80,103,80,103,79,103,78", "I,379,80,379,79,379,78,379,77", "I,255,80,255,79,255,78,255,77", "I,459,80,459,79,459,78,459,77", "M,262,79", "M,274,79", "M,363,79", "M,127,79", "M,230,79", "M,147,79", "M,399,79", "M,386,79", "M,75,79", "D,391,79,390,79", "O,468,78,469,78,468,79,469,79", "O,408,78,409,78,408,79,409,79", "O,240,78,241,78,240,79,241,79", "O,96,78,97,78,96,79,97,79", "O,134,78,135,78,134,79,135,79", "D,183,79,183,78", "D,43,78,43,79", "D,398,78,398,79", "D,299,78,299,79", "T,191,79,190,79,189,79,190,78", "D,188,79,188,78", "Z,362,79,362,78,363,78,363,77", "T,91,77,91,78,91,79,90,78", "J,50,79,51,79,51,78,51,77", "L,223,79,222,77,222,78,222,79", "L,438,77,439,79,439,78,439,77", "J,43,77,42,77,42,78,42,79", "J,183,77,182,77,182,78,182,79", "S,230,78,230,77,231,79,231,78", "J,350,79,351,79,351,78,351,77", "T,126,79,126,78,126,77,127,78", "J,163,77,162,77,162,78,162,79", "Z,66,79,66,78,67,78,67,77", "T,342,79,342,78,342,77,343,78", "J,151,77,150,77,150,78,150,79", "L,35,79,34,77,34,78,34,79", "J,299,77,298,77,298,78,298,79", "S,234,78,234,77,235,79,235,78", "T,338,79,338,78,338,77,339,78", "J,103,77,102,77,102,78,102,79", "T,74,79,74,78,74,77,75,78", "I,275,79,275,78,275,77,275,76", "I,311,79,311,78,311,77,311,76", "I,415,79,415,78,415,77,415,76", "I,414,79,414,78,414,77,414,76", "I,87,79,87,78,87,77,87,76", "M,438,78", "M,163,78", "M,446,78", "M,189,78", "M,191,78", "O,262,77,263,77,262,78,263,78", "O,246,77,247,77,246,78,247,78", "O,78,77,79,77,78,78,79,78", "D,214,78,214,77", "J,379,76,378,76,378,77,378,78", "L,273,76,274,78,274,77,274,76", "S,446,77,446,76,447,78,447,77", "J,351,76,350,76,350,77,350,78", "T,399,76,399,77,399,78,398,77", "J,146,78,147,78,147,77,147,76", "L,214,76,215,78,215,77,215,76", "J,459,76,458,76,458,77,458,78", "J,390,78,391,78,391,77,391,76", "I,403,78,403,77,403,76,403,75", "I,223,78,223,77,223,76,223,75", "I,50,78,50,77,50,76,50,75", "I,402,78,402,77,402,76,402,75", "I,254,78,254,77,254,76,254,75", "I,310,78,310,77,310,76,310,75", "I,463,78,463,77,463,76,463,75", "I,386,78,386,77,386,76,386,75", "I,35,78,35,77,35,76,35,75", "I,86,78,86,77,86,76,86,75", "M,407,77", "M,362,77", "D,273,77,272,77", "M,451,77", "M,127,77", "M,235,77", "M,390,77", "O,94,76,95,76,94,77,95,77", "D,470,77,470,76", "D,330,77,330,76", "D,75,76,75,77", "T,406,77,406,76,406,75,407,76", "L,470,75,471,77,471,76,471,75", "Z,90,77,90,76,91,76,91,75", "T,231,75,231,76,231,77,230,76", "J,332,75,331,75,331,76,331,77", "Z,450,77,450,76,451,76,451,75", "Z,66,77,66,76,67,76,67,75", "J,344,75,343,75,343,76,343,77", "S,338,76,338,75,339,77,339,76", "J,147,75,146,75,146,76,146,77", "I,243,77,243,76,243,75,243,74", "I,242,77,242,76,242,75,242,74", "I,462,77,462,76,462,75,462,74", "I,387,77,387,76,387,75,387,74", "I,138,77,138,76,138,75,138,74", "I,139,77,139,76,139,75,139,74", "D,362,76,363,76", "D,182,76,183,76", "M,272,76", "M,51,76", "M,439,76", "M,398,76", "M,34,76", "M,151,76", "M,102,76", "L,247,76,249,75,248,75,247,75", "T,102,75,103,75,104,75,103,76", "O,234,75,235,75,234,76,235,76", "L,263,76,262,74,262,75,262,76", "L,43,76,42,74,42,75,42,76", "J,223,74,222,74,222,75,222,76", "T,447,74,447,75,447,76,446,75", "T,79,76,79,75,79,74,80,75", "J,126,76,127,76,127,75,127,74", "T,150,76,150,75,150,74,151,75", "J,343,74,342,74,342,75,342,76", "L,299,76,298,74,298,75,298,76", "I,162,76,162,75,162,74,162,73", "I,163,76,163,75,163,74,163,73", "I,78,76,78,75,78,74,78,73", "I,438,76,438,75,438,74,438,73", "I,246,76,246,75,246,74,246,73", "I,255,76,255,75,255,74,255,73", "I,390,76,390,75,390,74,390,73", "I,74,76,74,75,74,74,74,73", "M,181,75", "D,176,75,177,75", "M,178,75", "M,230,75", "M,92,75", "M,378,75", "M,421,75", "M,330,75", "M,442,75", "I,345,75,346,75,347,75,348,75", "M,459,75", "M,140,75", "M,450,75", "M,416,75", "D,145,75,144,75", "O,360,74,361,74,360,75,361,75", "L,409,74,407,75,408,75,409,75", "S,180,74,181,74,179,75,180,75", "L,109,74,107,75,108,75,109,75", "O,404,74,405,74,404,75,405,75", "Z,332,74,333,74,333,75,334,75", "J,93,75,93,74,92,74,91,74", "D,43,74,43,75", "O,398,74,399,74,398,75,399,75", "L,358,74,356,75,357,75,358,75", "L,351,74,349,75,350,75,351,75", "D,359,75,359,74", "L,106,75,108,74,107,74,106,74", "T,445,75,444,75,443,75,444,74", "T,334,74,335,74,336,74,335,75", "S,337,74,338,74,336,75,337,75", "S,420,74,421,74,419,75,420,75", "S,418,74,419,74,417,75,418,75", "J,439,74,439,75,440,75,441,75", "Z,80,74,81,74,81,75,82,75", "Z,82,74,83,74,83,75,84,75", "T,253,75,252,75,251,75,252,74", "J,250,75,250,74,249,74,248,74", "J,456,74,456,75,457,75,458,75", "J,105,75,105,74,104,74,103,74", "T,140,74,141,74,142,74,141,75", "S,143,74,144,74,142,75,143,75", "T,84,74,85,74,86,74,85,75", "D,87,75,87,74", "L,262,73,263,75,263,74,263,73", "L,383,75,382,73,382,74,382,75", "S,50,74,50,73,51,75,51,74", "Z,66,75,66,74,67,74,67,73", "L,71,75,70,73,70,74,70,75", "T,379,73,379,74,379,75,378,74", "Z,34,75,34,74,35,74,35,73", "J,127,73,126,73,126,74,126,75", "L,215,75,214,73,214,74,214,75", "L,338,73,339,75,339,74,339,73", "T,311,73,311,74,311,75,310,74", "L,415,75,414,73,414,74,414,75", "L,298,73,299,75,299,74,299,73", "I,90,75,90,74,90,73,90,72", "I,391,75,391,74,391,73,391,72", "I,75,75,75,74,75,73,75,72", "I,176,74,177,74,178,74,179,74", "D,408,74,407,74", "M,406,74", "D,357,74,356,74", "I,346,74,347,74,348,74,349,74", "I,440,74,441,74,442,74,443,74", "M,445,74", "M,331,74", "D,450,74,451,74", "D,344,74,345,74", "M,251,74", "D,417,74,416,74", "M,145,74", "M,147,74", "D,471,74,471,73", "O,402,73,403,73,402,74,403,74", "T,459,74,458,74,457,74,458,73", "D,235,74,235,73", "L,382,72,383,74,383,73,383,72", "L,231,74,230,72,230,73,230,74", "J,471,72,470,72,470,73,470,74", "L,70,72,71,74,71,73,71,72", "Z,330,74,330,73,331,73,331,72", "T,463,72,463,73,463,74,462,73", "J,387,72,386,72,386,73,386,74", "L,246,72,247,74,247,73,247,72", "J,253,74,254,74,254,73,254,72", "Z,102,74,102,73,103,73,103,72", "Z,146,74,146,73,147,73,147,72", "I,446,74,446,73,446,72,446,71", "I,350,74,350,73,350,72,350,71", "I,151,74,151,73,151,72,151,71", "I,215,74,215,73,215,72,215,71", "I,234,74,234,73,234,72,234,71", "I,415,74,415,73,415,72,415,71", "M,66,73", "M,447,73", "M,387,73", "M,351,73", "O,454,72,455,72,454,73,455,73", "O,354,72,355,72,354,73,355,73", "O,94,72,95,72,94,73,95,73", "O,242,72,243,72,242,73,243,73", "D,79,73,79,72", "O,410,72,411,72,410,73,411,73", "O,342,72,343,72,342,73,343,73", "L,175,73,174,71,174,72,174,73", "L,90,71,91,73,91,72,91,71", "T,439,71,439,72,439,73,438,72", "J,379,71,378,71,378,72,378,73", "Z,34,73,34,72,35,72,35,71", "L,451,73,450,71,450,72,450,73", "T,459,71,459,72,459,73,458,72", "L,223,73,222,71,222,72,222,73", "I,42,73,42,72,42,71,42,70", "I,231,73,231,72,231,71,231,70", "I,43,73,43,72,43,71,43,70", "I,139,73,139,72,139,71,139,70", "I,51,73,51,72,51,71,51,70", "I,138,73,138,72,138,71,138,70", "I,398,73,398,72,398,71,398,70", "I,399,73,399,72,399,71,399,70", "I,87,73,87,72,87,71,87,70", "I,150,73,150,72,150,71,150,70", "I,86,73,86,72,86,71,86,70", "I,310,73,310,72,310,71,310,70", "D,263,72,262,72", "M,379,72", "M,338,72", "M,451,72", "M,403,72", "M,235,72", "M,146,72", "D,50,71,50,72", "D,163,71,163,72", "J,74,72,74,71,73,71,72,71", "D,126,71,126,72", "D,311,72,311,71", "J,79,70,78,70,78,71,78,72", "L,67,72,66,70,66,71,66,72", "T,255,70,255,71,255,72,254,71", "L,446,70,447,72,447,71,447,70", "L,174,70,175,72,175,71,175,70", "Z,462,72,462,71,463,71,463,70", "T,390,72,390,71,390,70,391,71", "Z,330,72,330,71,331,71,331,70", "L,299,72,298,70,298,71,298,72", "L,350,70,351,72,351,71,351,70", "J,163,70,162,70,162,71,162,72", "T,402,72,402,71,402,70,403,71", "L,126,70,127,72,127,71,127,70", "Z,102,72,102,71,103,71,103,70", "L,222,70,223,72,223,71,223,70", "I,214,72,214,71,214,70,214,69", "I,339,72,339,71,339,70,339,69", "I,414,72,414,71,414,70,414,69", "M,299,71", "D,452,71,453,71", "D,385,71,384,71", "M,69,71", "M,79,71", "D,381,71,380,71", "M,75,71", "O,260,70,261,70,260,71,261,71", "O,134,70,135,70,134,71,135,71", "O,96,70,97,70,96,71,97,71", "O,468,70,469,70,468,71,469,71", "O,264,70,265,70,264,71,265,71", "O,240,70,241,70,240,71,241,71", "O,246,70,247,70,246,71,247,71", "O,354,70,355,70,354,71,355,71", "S,68,70,69,70,67,71,68,71", "D,230,71,230,70", "L,451,71,453,70,452,70,451,70", "J,386,71,386,70,385,70,384,70", "O,410,70,411,70,410,71,411,71", "O,146,70,147,70,146,71,147,71", "D,34,71,34,70", "D,438,71,438,70", "O,342,70,343,70,342,71,343,71", "S,234,70,234,69,235,71,235,70", "Z,458,71,458,70,459,70,459,69", "I,387,71,387,70,387,69,387,68", "I,338,71,338,70,338,69,338,68", "M,254,70", "D,90,70,91,70", "M,391,70", "M,50,70", "M,215,70", "M,439,70", "M,450,70", "I,72,70,73,70,74,70,75,70", "M,311,70", "M,415,70", "L,299,70,301,69,300,69,299,69", "J,379,69,379,70,380,70,381,70", "S,66,69,66,68,67,70,67,69", "T,151,68,151,69,151,70,150,69", "J,463,68,462,68,462,69,462,70", "Z,330,70,330,69,331,69,331,68", "T,35,68,35,69,35,70,34,69", "J,379,68,378,68,378,69,378,70", "J,103,68,102,68,102,69,102,70", "T,403,70,403,69,403,68,404,69", "D,48,69,47,69", "I,82,69,83,69,84,69,85,69", "D,131,69,132,69", "D,362,69,363,69", "I,312,69,313,69,314,69,315,69", "D,397,69,396,69", "D,422,69,423,69", "M,296,69", "M,30,69", "M,409,69", "D,140,69,141,69", "M,218,69", "D,239,69,238,69", "M,176,69", "M,211,69", "M,145,69", "D,178,69,179,69", "M,142,69", "M,183,69", "M,463,69", "M,458,69", "O,90,68,91,68,90,69,91,69", "O,98,68,99,68,98,69,99,69", "O,258,68,259,68,258,69,259,69", "J,49,69,49,68,48,68,47,68", "L,361,69,363,68,362,68,361,68", "J,251,68,251,69,252,69,253,69", "J,133,69,133,68,132,68,131,68", "T,46,69,45,69,44,69,45,68", "L,39,68,37,69,38,69,39,69", "J,467,69,467,68,466,68,465,68", "L,224,69,226,68,225,68,224,68", "J,248,68,248,69,249,69,250,69", "J,128,68,128,69,129,69,130,69", "O,266,68,267,68,266,69,267,69", "T,111,69,110,69,109,69,110,68", "S,144,68,145,68,143,69,144,69", "O,228,68,229,68,228,69,229,69", "T,30,68,31,68,32,68,31,69", "L,210,69,212,68,211,68,210,68", "S,33,68,34,68,32,69,33,69", "L,227,68,225,69,226,69,227,69", "J,464,68,464,69,465,69,466,69", "J,392,68,392,69,393,69,394,69", "J,219,69,219,68,218,68,217,68", "T,107,68,108,68,109,68,108,69", "Z,296,68,297,68,297,69,298,69", "J,440,68,440,69,441,69,442,69", "L,36,69,38,68,37,68,36,68", "O,80,68,81,68,80,69,81,69", "L,346,68,344,69,345,69,346,69", "L,237,69,239,68,238,68,237,68", "T,394,68,395,68,396,68,395,69", "J,419,68,419,69,420,69,421,69", "T,407,68,408,68,409,68,408,69", "L,358,68,356,69,357,69,358,69", "O,359,68,360,68,359,69,360,69", "L,349,68,347,69,348,69,349,69", "Z,416,68,417,68,417,69,418,69", "T,181,68,182,68,183,68,182,69", "J,215,68,215,69,216,69,217,69", "O,306,68,307,68,306,69,307,69", "L,445,68,443,69,444,69,445,69", "S,213,68,214,68,212,69,213,69", "O,162,68,163,68,162,69,163,69", "T,176,68,177,68,178,68,177,69", "J,405,68,405,69,406,69,407,69", "O,450,68,451,68,450,69,451,69", "T,107,69,106,69,105,69,106,68", "Z,179,68,180,68,180,69,181,69", "D,386,69,386,68", "J,308,68,308,69,309,69,310,69", "J,311,69,311,68,310,68,309,68", "O,235,68,236,68,235,69,236,69", "O,74,68,75,68,74,69,75,69", "S,104,68,105,68,103,69,104,69", "D,402,68,402,69", "Z,414,68,415,68,415,69,416,69", "I,420,68,421,68,422,68,423,68", "I,298,68,299,68,300,68,301,68", "M,46,68", "I,82,68,83,68,84,68,85,68", "D,130,68,129,68", "D,250,68,249,68", "M,44,68", "I,312,68,313,68,314,68,315,68", "D,252,68,253,68", "M,393,68", "M,150,68", "I,140,68,141,68,142,68,143,68", "D,344,68,345,68", "I,441,68,442,68,443,68,444,68", "M,67,68", "M,330,68", "M,397,68", "M,418,68", "D,347,68,348,68", "D,356,68,357,68", "M,406,68", "M,216,68", "M,111,68", "M,339,68", "M,234,68", "M,404,68", "D,458,68,459,68", "M,275,98", "M,163,98", "M,306,98", "D,180,98,181,98", "I,198,98,199,98,200,98,201,98", "D,297,98,298,98", "M,296,98", "M,320,98", "T,265,98,264,98,263,98,264,97", "O,194,97,195,97,194,98,195,98", "T,262,98,261,98,260,98,261,97", "O,284,97,285,97,284,98,285,98", "O,288,97,289,97,288,98,289,98", "O,176,97,177,97,176,98,177,98", "O,314,97,315,97,314,98,315,98", "O,286,97,287,97,286,98,287,98", "J,239,97,239,98,240,98,241,98", "D,187,97,187,98", "D,170,97,170,98", "L,207,97,205,98,206,98,207,98", "Z,323,97,324,97,324,98,325,98", "L,204,98,206,97,205,97,204,97", "O,236,97,237,97,236,98,237,98", "T,301,98,300,98,299,98,300,97", "O,202,97,203,97,202,98,203,98", "D,238,97,238,98", "L,179,98,181,97,180,97,179,97", "D,247,97,247,98", "D,178,97,178,98", "T,323,98,322,98,321,98,322,97", "O,334,97,335,97,334,98,335,98", "L,319,98,321,97,320,97,319,97", "D,318,97,318,98", "O,332,97,333,97,332,98,333,98", "J,222,98,223,98,223,97,223,96", "T,162,98,162,97,162,96,163,97", "J,187,96,186,96,186,97,186,98", "S,306,97,306,96,307,98,307,97", "J,254,98,255,98,255,97,255,96", "J,247,96,246,96,246,97,246,98", "I,171,98,171,97,171,96,171,95", "I,274,98,274,97,274,96,274,95", "D,263,97,262,97", "M,260,97", "M,265,97", "D,241,97,240,97", "M,325,97", "M,301,97", "I,198,97,199,97,200,97,201,97", "I,296,97,297,97,298,97,299,97", "J,223,95,222,95,222,96,222,97", "I,275,97,275,96,275,95,275,94", "I,254,97,254,96,254,95,254,94", "M,303,96", "M,174,96", "M,315,96", "M,258,96", "O,182,95,183,95,182,96,183,96", "O,192,95,193,95,192,96,193,96", "O,266,95,267,95,266,96,267,96", "D,234,95,234,96", "L,332,96,334,95,333,95,332,95", "L,335,95,333,96,334,96,335,96", "J,171,94,170,94,170,95,170,96", "Z,302,96,302,95,303,95,303,94", "T,163,94,163,95,163,96,162,95", "T,175,94,175,95,175,96,174,95", "L,234,94,235,96,235,95,235,94", "L,327,96,326,94,326,95,326,96", "L,243,96,242,94,242,95,242,96", "J,294,96,295,96,295,95,295,94", "Z,314,96,314,95,315,95,315,94", "T,259,94,259,95,259,96,258,95", "J,286,96,287,96,287,95,287,94", "L,199,96,198,94,198,95,198,96", "I,307,96,307,95,307,94,307,93", "M,255,95", "M,186,95", "D,247,95,246,95", "D,243,94,243,95", "D,306,95,306,94", "L,326,93,327,95,327,94,327,93", "S,186,94,186,93,187,95,187,94", "L,198,93,199,95,199,94,199,93", "I,294,95,294,94,294,93,294,92", "I,286,95,286,94,286,93,286,92", "M,183,94", "M,314,94", "M,246,94", "D,258,93,258,94", "Z,162,94,162,93,163,93,163,92", "Z,174,94,174,93,175,93,175,92", "Z,302,94,302,93,303,93,303,92", "Z,182,94,182,93,183,93,183,92", "J,222,94,223,94,223,93,223,92", "S,246,93,246,92,247,94,247,93", "L,191,94,190,92,190,93,190,94", "I,255,94,255,93,255,92,255,91", "I,274,94,274,93,274,92,274,91", "M,235,93", "M,275,93", "M,170,93", "Z,313,92,314,92,314,93,315,93", "Z,234,93,234,92,235,92,235,91", "L,243,93,242,91,242,92,242,93", "Z,306,93,306,92,307,92,307,91", "L,253,91,254,93,254,92,254,91", "L,294,91,295,93,295,92,295,91", "T,171,91,171,92,171,93,170,92", "T,259,91,259,92,259,93,258,92", "L,190,91,191,93,191,92,191,91", "T,187,93,187,92,187,91,188,92", "I,222,93,222,92,222,91,222,90", "I,287,93,287,92,287,91,287,90", "D,167,92,166,92", "M,243,92", "D,252,92,253,92", "M,182,92", "M,189,92", "L,205,91,203,92,204,92,205,92", "J,200,91,200,92,201,92,202,92", "J,320,91,320,92,321,92,322,92", "D,302,92,302,91", "J,323,92,323,91,322,91,321,91", "O,192,91,193,91,192,92,193,92", "O,324,91,325,91,324,92,325,92", "J,229,92,229,91,228,91,227,91", "J,226,91,226,92,227,92,228,92", "L,312,92,314,91,313,91,312,91", "Z,223,91,224,91,224,92,225,92", "Z,174,92,174,91,175,91,175,90", "T,247,90,247,91,247,92,246,91", "J,198,92,199,92,199,91,199,90", "I,162,92,162,91,162,90,162,89", "I,315,92,315,91,315,90,315,89", "I,275,92,275,91,275,90,275,89", "I,186,92,186,91,186,90,186,89", "I,201,91,202,91,203,91,204,91", "M,252,91", "M,258,91", "M,225,91", "D,189,91,188,91", "D,163,90,163,91", "L,167,91,166,89,166,90,166,91", "S,242,90,242,89,243,91,243,90", "S,302,90,302,89,303,91,303,90", "L,183,91,182,89,182,90,182,91", "J,235,89,234,89,234,90,234,91", "I,306,91,306,90,306,89,306,88", "I,170,91,170,90,170,89,170,88", "I,286,91,286,90,286,89,286,88", "I,198,91,198,90,198,89,198,88", "M,319,90", "M,235,90", "M,171,90", "M,314,90", "O,250,89,251,89,250,90,251,90", "O,310,89,311,89,310,90,311,90", "D,167,90,167,89", "D,183,89,183,90", "D,187,89,187,90", "J,254,90,255,90,255,89,255,88", "T,318,90,318,89,318,88,319,89", "J,308,88,307,88,307,89,307,90", "J,275,88,274,88,274,89,274,90", "J,294,90,295,90,295,89,295,88", "T,174,90,174,89,174,88,175,89", "S,222,89,222,88,223,90,223,89", "I,194,90,194,89,194,88,194,87", "I,195,90,195,89,195,88,195,87", "I,258,90,258,89,258,88,258,87", "I,259,90,259,89,259,88,259,87", "I,246,90,246,89,246,88,246,87", "M,247,89", "M,199,89", "D,254,88,254,89", "D,171,88,171,89", "T,243,87,243,88,243,89,242,88", "Z,163,89,163,88,164,88,164,87", "Z,314,89,314,88,315,88,315,87", "T,303,87,303,88,303,89,302,88", "J,295,87,294,87,294,88,294,89", "L,286,87,287,89,287,88,287,87", "M,162,88", "M,249,88", "M,175,88", "O,182,87,183,87,182,88,183,88", "S,248,87,249,87,247,88,248,88", "O,266,87,267,87,266,88,267,88", "D,319,88,319,87", "D,165,87,165,88", "J,309,88,309,87,308,87,307,87", "S,169,87,170,87,168,88,169,88", "S,198,87,198,86,199,88,199,87", "J,224,86,223,86,223,87,223,88", "L,187,88,186,86,186,87,186,88", "I,234,88,234,87,234,86,234,85", "I,235,88,235,87,235,86,235,85", "M,318,87", "M,302,87", "D,175,87,174,87", "M,274,87", "M,168,87", "M,187,87", "J,275,87,275,86,274,86,273,86", "L,255,87,254,85,254,86,254,87", "S,246,86,246,85,247,87,247,86", "L,163,87,162,85,162,86,162,87", "Z,242,87,242,86,243,86,243,85", "T,314,87,314,86,314,85,315,86", "T,306,87,306,86,306,85,307,86", "T,171,85,171,86,171,87,170,86", "J,223,85,222,85,222,86,222,87", "D,206,86,207,86", "I,260,86,261,86,262,86,263,86", "M,176,86", "I,297,86,298,86,299,86,300,86", "D,180,86,181,86", "D,193,86,192,86", "M,270,86", "I,199,86,200,86,201,86,202,86", "M,325,86", "M,204,86", "M,179,86", "M,323,86", "I,286,86,287,86,288,86,289,86", "D,225,86,226,86", "M,227,86", "L,205,86,207,85,206,85,205,85", "Z,176,85,177,85,177,86,178,86", "D,255,85,255,86", "O,264,85,265,85,264,86,265,86", "J,301,86,301,85,300,85,299,85", "D,163,86,163,85", "L,296,86,298,85,297,85,296,85", "L,322,85,320,86,321,86,322,86", "L,191,86,193,85,192,85,191,85", "O,326,85,327,85,326,86,327,86", "T,323,85,324,85,325,85,324,86", "Z,270,85,271,85,271,86,272,86", "T,202,85,203,85,204,85,203,86", "T,190,86,189,86,188,86,189,85", "O,278,85,279,85,278,86,279,86", "T,186,85,187,85,188,85,187,86", "L,231,85,229,86,230,86,231,86", "O,276,85,277,85,276,86,277,86", "L,228,86,230,85,229,85,228,85", "O,284,85,285,85,284,86,285,86", "I,260,85,261,85,262,85,263,85", "M,247,85", "M,315,85", "D,321,85,320,85", "I,178,85,179,85,180,85,181,85", "M,242,85", "I,272,85,273,85,274,85,275,85", "M,307,85", "I,198,85,199,85,200,85,201,85", "M,190,85", "I,286,85,287,85,288,85,289,85", "M,170,85", "I,224,85,225,85,226,85,227,85"];
  var COLORS = { I: "#ffffff", O: "#dedede", T: "#8c8c8c", S: "#747474", Z: "#666666", J: "#c2c2c2", L: "#a6a6a6", D: "#555555", M: "#555555" };
  var CELL = 3, BW = 504, BH = 99, FX = 24, FY = 64;
  var cv = document.getElementById("introCv");
  var ctx = cv.getContext("2d");
  var W = cv.width, H = cv.height;

  var pieces = PLAN_RAW.map(function (s) {
    var parts = s.split(",");
    var cells = [];
    for (var i = 1; i < parts.length; i += 2) cells.push([+parts[i], +parts[i + 1]]);
    var ys = cells.map(function (c) { return c[1]; });
    var xs = cells.map(function (c) { return c[0]; });
    return { type: parts[0], color: COLORS[parts[0]], cells: cells,
             minY: Math.min.apply(null, ys), maxY: Math.max.apply(null, ys),
             minX: Math.min.apply(null, xs), maxX: Math.max.apply(null, xs),
             band: Math.floor(Math.min.apply(null, ys) / 17), locked: false };
  });
  var bandTotals = [0, 0, 0, 0, 0, 0], bandLocked = [0, 0, 0, 0, 0, 0];
  pieces.forEach(function (p) { bandTotals[p.band]++; });

  // background layer: strip + well frame + grid
  var bg = document.createElement("canvas"); bg.width = W; bg.height = H;
  (function paintBg() {
    var g = bg.getContext("2d");
    g.fillStyle = "#020302"; g.fillRect(0, 0, W, H);
    g.strokeStyle = "#5a5a5a"; g.lineWidth = 3;
    g.strokeRect(FX - 3, FY - 3, BW * CELL + 6, BH * CELL + 6);
    g.fillStyle = "#0a0a0a"; g.fillRect(FX, FY, BW * CELL, BH * CELL);
    g.strokeStyle = "rgba(200,200,200,.07)"; g.lineWidth = 1;
    for (var x = 1; x < BW; x += 2) { g.beginPath(); g.moveTo(FX + x * CELL + 0.5, FY); g.lineTo(FX + x * CELL + 0.5, FY + BH * CELL); g.stroke(); }
    for (var y = 1; y < BH; y += 2) { g.beginPath(); g.moveTo(FX, FY + y * CELL + 0.5); g.lineTo(FX + BW * CELL, FY + y * CELL + 0.5); g.stroke(); }
    g.fillStyle = "#a8a8a8"; g.font = "600 17px ui-monospace, Menlo, monospace";
    g.fillText("NEXT", FX + 2, 40);
    g.strokeStyle = "#5a5a5a"; g.lineWidth = 2; g.strokeRect(FX + 66, 12, 96, 38);
    g.fillStyle = "#0a0a0a"; g.fillRect(FX + 67, 13, 94, 36);
  })();

  var staticCv = document.createElement("canvas"); staticCv.width = W; staticCv.height = H;
  var sctx = staticCv.getContext("2d");
  function paintCell(g, bx, by, color, bright) {
    var px = FX + bx * CELL, py = FY + by * CELL;
    g.fillStyle = color;
    g.beginPath(); g.roundRect(px + 0.4, py + 0.4, CELL - 0.8, CELL - 0.8, 0.8); g.fill();
    g.fillStyle = "rgba(255,255,255," + (bright ? 0.5 : 0.28) + ")";
    g.fillRect(px + 0.6, py + 0.5, CELL - 1.2, 0.9);
  }

  var state = "idle", spawnIdx = 0, falling = [], flashes = [], sweeps = [];
  var spawnBudget = 0, score = 0, lockedCount = 0, rafId = null, lastT = 0, startedAt = 0;

  function spawnNext() {
    var p = pieces[spawnIdx++];
    var h = p.maxY - p.minY + 1;
    falling.push({ p: p, top: -h - Math.random() * 8, speed: 760 + Math.random() * 260 });
  }
  function lockPiece(f, now) {
    f.p.locked = true; lockedCount++; score += 10;
    f.p.cells.forEach(function (c) { paintCell(sctx, c[0], c[1], f.p.color, false); });
    flashes.push({ cells: f.p.cells, t0: now });
    bandLocked[f.p.band]++;
    if (bandLocked[f.p.band] === bandTotals[f.p.band])
      sweeps.push({ band: f.p.band, t0: now });
    if (lockedCount === pieces.length) {
      state = "done";
      document.getElementById("introCaret").classList.remove("waiting");
      setTimeout(function () { if (state === "done" && rafId) { cancelAnimationFrame(rafId); rafId = null; draw(performance.now(), true); } }, 650);
    }
  }
  function frame(now) {
    rafId = requestAnimationFrame(frame);
    var dt = Math.min(0.05, (now - lastT) / 1000 || 0.016); lastT = now;
    if (state === "building") {
      var elapsed = (now - startedAt) / 1000;
      var rate = 150 + Math.min(190, elapsed * 22); // pieces per second, ramps up
      spawnBudget += dt * rate;
      while (spawnBudget >= 1 && spawnIdx < pieces.length && falling.length < 34) { spawnBudget -= 1; spawnNext(); }
      falling.forEach(function (f) {
        f.top += f.speed * dt;
        if (f.top >= f.p.minY) lockPiece(f, now);
      });
      falling = falling.filter(function (f) { return !f.p.locked; });
    }
    draw(now, false);
  }
  function draw(now, finalFrame) {
    ctx.drawImage(bg, 0, 0);
    // falling pieces first: the locked stack paints over them, so a piece
    // falling to a lower line slides behind the lines already built
    falling.forEach(function (f) {
      var dy = f.top - f.p.minY;
      f.p.cells.forEach(function (c) { if (c[1] + dy >= -1) paintCell(ctx, c[0], c[1] + dy, f.p.color, true); });
    });
    ctx.drawImage(staticCv, 0, 0);
    flashes = flashes.filter(function (f) { return now - f.t0 < 130; });
    if (!finalFrame) flashes.forEach(function (f) {
      ctx.globalAlpha = 0.5 * (1 - (now - f.t0) / 130);
      ctx.fillStyle = "#ffffff";
      f.cells.forEach(function (c) { ctx.fillRect(FX + c[0] * CELL, FY + c[1] * CELL, CELL, CELL); });
      ctx.globalAlpha = 1;
    });
    sweeps = sweeps.filter(function (s) { return now - s.t0 < 400; });
    sweeps.forEach(function (s) {
      var a = 0.13 * (1 - (now - s.t0) / 400);
      ctx.fillStyle = "rgba(255,255,255," + a.toFixed(3) + ")";
      ctx.fillRect(FX, FY + s.band * 17 * CELL - 3, BW * CELL, 14 * CELL + 6);
    });
    // strip: NEXT preview + score
    ctx.fillStyle = "#a8a8a8"; ctx.font = "600 17px ui-monospace, Menlo, monospace";
    ctx.textAlign = "right";
    ctx.fillText("SCORE " + String(score).padStart(6, "0"), W - FX - 2, 40);
    ctx.textAlign = "left";
    if (spawnIdx < pieces.length) {
      var np = pieces[spawnIdx], ncell = 7;
      var nw = (np.maxX - np.minX + 1) * ncell, nh = (np.maxY - np.minY + 1) * ncell;
      var ox = FX + 66 + (96 - nw) / 2, oy = 12 + (38 - nh) / 2;
      np.cells.forEach(function (c) {
        var px = ox + (c[0] - np.minX) * ncell, py = oy + (c[1] - np.minY) * ncell;
        ctx.fillStyle = np.color; ctx.fillRect(px + 0.5, py + 0.5, ncell - 1, ncell - 1);
        ctx.fillStyle = "rgba(255,255,255,.3)"; ctx.fillRect(px + 1, py + 1, ncell - 2, 1.4);
      });
    }
  }
  window.startIntroBuild = function () {
    if (state !== "idle") return;
    state = "building"; startedAt = performance.now(); lastT = startedAt;
    rafId = requestAnimationFrame(frame);
  };
  window.finishIntroBuild = function () {
    if (state === "done") return;
    pieces.forEach(function (p) { if (!p.locked) { p.locked = true; p.cells.forEach(function (c) { paintCell(sctx, c[0], c[1], p.color, false); }); } });
    falling = []; flashes = []; state = "done";
    document.getElementById("introCaret").classList.remove("waiting");
    draw(performance.now(), true);
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  };
  window.introBuildDone = function () { return state === "done"; };
  window.__tetrisPlan = { pieces: pieces.length, cells: pieces.reduce(function (n, p) { return n + p.cells.length; }, 0), bandTotals: bandTotals };
})();

// ---------- v41: streaming intro — one photograph, the description streams in ----------
var STREAM_TEXT = [
  "My documentary is about how phones changed from 1876 to today.",
  "I divided it into nine chapters, starting with early telephones and ending with smartphones.",
  "It follows how phones became easier to carry and gained features like texting, games, cameras, and apps.",
  "I also wanted to show what these changes meant for the people using them.",
  "Calling family in another country used to be expensive.",
  "Now we can send photos or make a video call from our phones.",
  "This makes keeping in touch easier, but we also check our phones during meals and sometimes feel we have to reply to every message."
];
var streamIdx = 0, streamTimer = null, streamDoneFlag = false;
var montTimer = null, montIdx = 0;
function montShow(n) {
  var box = document.getElementById("mont"); if (!box) return;
  var imgs = box.children;
  for (var k = 0; k < imgs.length; k++) imgs[k].classList.toggle("on", k === n);
  if (imgs[n]) imgs[n].classList.toggle("alt", n % 2 === 1);
  montIdx = n;
}
function montStart() {
  if (montTimer) { clearInterval(montTimer); montTimer = null; }
  montShow(0);
  var box = document.getElementById("mont"); if (!box) return;
  var total = box.children.length;
  montTimer = setInterval(function () {
    if (montIdx < total - 1) montShow(montIdx + 1);
    else { clearInterval(montTimer); montTimer = null; }
  }, 1600);
}
function montStop() {
  if (montTimer) { clearInterval(montTimer); montTimer = null; }
  var box = document.getElementById("mont"); if (!box) return;
  montShow(box.children.length - 1);
}
function streamShow(i) {
  var box = document.getElementById("streamText");
  var el = document.createElement("p");
  el.textContent = STREAM_TEXT[i];
  if (i === 3) el.className = "st-gap";
  box.appendChild(el);
  requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.add("on"); }); });
}
function streamFinish() {
  if (streamTimer) { clearInterval(streamTimer); streamTimer = null; }
  montStop();
  while (streamIdx < STREAM_TEXT.length) streamShow(streamIdx++);
  streamDoneFlag = true;
  document.getElementById("introCaret").classList.remove("waiting");
}
window.startIntroBuild = function () {
  if (streamTimer || streamDoneFlag) return;
  document.getElementById("streamText").innerHTML = "";
  streamIdx = 0;
  montStart();
  var step = function () {
    if (streamIdx >= STREAM_TEXT.length) { streamFinish(); return; }
    streamShow(streamIdx++);
    if (streamIdx >= STREAM_TEXT.length) streamFinish();
  };
  setTimeout(step, 500);
  streamTimer = setInterval(step, 1950);
};
window.finishIntroBuild = function () { if (!streamDoneFlag) streamFinish(); };
window.introBuildDone = function () { return streamDoneFlag; };
