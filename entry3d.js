// ---------- entry: Matrix rain + a real 3D flip phone ----------
// v33: a refined retro-brown clamshell (Three.js) — rounded bevelled
// shells with a clearcoat finish, knuckled brass hinge, real 3D keys,
// camera module, earpiece, side buttons. It floats and slowly turns
// like a treasure item over a gold glow, in front of Matrix-style
// green code rain. Click: it stops facing front, the lid flips open
// (front to back), and the camera pushes into the screen.
function initEntry3D(onDone) {
  var entryEl = document.getElementById("entry");
  var wrap = document.getElementById("glWrap");
  var finished = false;
  function finish() {
    if (finished) return;
    finished = true;
    if (window.__stopRain) window.__stopRain();
    onDone();
  }
  // ---------- Matrix rain (2D canvas behind the phone) ----------
  var rain = document.getElementById("rainCv");
  var rctx = rain.getContext("2d");
  var RW = 0, RH = 0, cols = [], rainRun = true;
  var CHARS = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789";
  function rainSize() {
    RW = rain.width = entryEl.clientWidth;
    RH = rain.height = entryEl.clientHeight;
    var n = Math.ceil(RW / 18);
    cols = [];
    for (var i = 0; i < n; i++) cols.push({ y: Math.random() * (RH / 18 + 20) - 20, s: 6 + Math.random() * 9, a: Math.random() });
    rctx.fillStyle = "#010301"; rctx.fillRect(0, 0, RW, RH);
  }
  rainSize();
  var lastRain = performance.now();
  function rainFrame(now) {
    if (!rainRun) return;
    requestAnimationFrame(rainFrame);
    var dt = Math.min(0.05, (now - lastRain) / 1000); lastRain = now;
    rctx.fillStyle = "rgba(1,3,1,0.055)"; rctx.fillRect(0, 0, RW, RH);
    rctx.font = "16px monospace";
    for (var i = 0; i < cols.length; i++) {
      var c = cols[i];
      c.a += c.s * dt;
      while (c.a >= 1) {
        c.a -= 1; c.y += 1;
        var x = i * 18 + 2;
        rctx.fillStyle = "#d6ffdd";
        rctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, c.y * 18);
        if (c.y > 0) {
          rctx.fillStyle = "#23d856";
          rctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, (c.y - 1) * 18);
        }
        if (c.y * 18 > RH + 40 && Math.random() < 0.05) { c.y = Math.random() * -24; c.s = 6 + Math.random() * 9; }
      }
      if (Math.random() < 0.02 && c.y > 4) {
        var my = c.y - 2 - Math.floor(Math.random() * Math.min(8, c.y - 2));
        if (my > 0) { rctx.fillStyle = "rgba(35,216,86,.75)"; rctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * 18 + 2, my * 18); }
      }
    }
  }
  requestAnimationFrame(rainFrame);
  window.__stopRain = function () { rainRun = false; };

  // ---------- fallback if WebGL/Three is unavailable ----------
  if (!window.THREE) {
    wrap.addEventListener("pointerdown", function () { setTimeout(finish, 150); });
    return;
  }

  // ---------- the 3D scene ----------
  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch (e) {
    wrap.addEventListener("pointerdown", function () { setTimeout(finish, 150); });
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  if ("outputColorSpace" in renderer && THREE.SRGBColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace;
  else if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.06;
  wrap.appendChild(renderer.domElement);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0.3, 7.6);

  // studio reflections: a tiny softbox scene baked into an environment
  // map, so the brass, glass and clearcoat pick up real highlights
  (function () {
    var es = new THREE.Scene();
    function soft(w, h, color, i, x, y, z) {
      var m = new THREE.Mesh(new THREE.PlaneGeometry(w, h),
        new THREE.MeshBasicMaterial());
      m.material.color.setHex(color).multiplyScalar(i);
      m.position.set(x, y, z); m.lookAt(0, 0, 0); es.add(m);
    }
    soft(7, 3, 0xffffff, 7, 0, 6, 2);      // top softbox
    soft(4, 5, 0xffe0b0, 4, -6, 1, 3);     // warm left
    soft(4, 5, 0x9fffb0, 2.2, 6, 0, -3);   // green right (matrix tint)
    soft(8, 2, 0xffffff, 3, 0, -5, 4);     // low front strip
    var pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromScene(es, 0.06).texture;
  })();

  scene.add(new THREE.AmbientLight(0xfff2e0, 0.55));
  var key = new THREE.DirectionalLight(0xffe6c4, 1.2); key.position.set(3.5, 4.5, 5); scene.add(key);
  var fill = new THREE.DirectionalLight(0xfff4e0, 0.35); fill.position.set(0, 1, 8); scene.add(fill);
  var rim = new THREE.DirectionalLight(0x39ff6a, 0.55); rim.position.set(-4, 2, -4.5); scene.add(rim);
  var glowLight = new THREE.PointLight(0xffc873, 0.8, 14); glowLight.position.set(0, -2.2, 2.4); scene.add(glowLight);

  function makeTex(w, h, draw) {
    var c = document.createElement("canvas"); c.width = w; c.height = h;
    draw(c.getContext("2d"), w, h);
    var t = new THREE.CanvasTexture(c);
    if ("colorSpace" in t && THREE.SRGBColorSpace) t.colorSpace = THREE.SRGBColorSpace;
    else if (THREE.sRGBEncoding) t.encoding = THREE.sRGBEncoding;
    t.anisotropy = 4;
    return t;
  }
  var lcdTex = makeTex(512, 328, function (g) {
    g.fillStyle = "#0a1f0d"; g.fillRect(0, 0, 512, 328);
    g.strokeStyle = "#3f7a44"; g.lineWidth = 6; g.strokeRect(10, 10, 492, 308);
    g.fillStyle = "#57ff7a";
    for (var bi = 0; bi < 4; bi++) g.fillRect(34 + bi * 13, 66 - bi * 12, 8, 14 + bi * 12);
    g.strokeStyle = "#57ff7a"; g.lineWidth = 4; g.strokeRect(428, 40, 48, 24);
    g.fillRect(478, 47, 6, 10);
    g.fillRect(434, 46, 24, 12);
    g.font = "700 150px ui-monospace, monospace"; g.textAlign = "center";
    g.fillText("1973", 256, 232);
  });
  var brandTex = makeTex(512, 64, function (g) {
    g.clearRect(0, 0, 512, 64);
    g.fillStyle = "#d8c9a3"; g.font = "600 38px ui-monospace, monospace"; g.textAlign = "center";
    g.fillText("F L I P  ·  1 9 9 6", 256, 44);
  });
  var screenTex = makeTex(512, 768, function (g) {
    var grad = g.createLinearGradient(0, 0, 0, 768);
    grad.addColorStop(0, "#0e2c13"); grad.addColorStop(1, "#061708");
    g.fillStyle = grad; g.fillRect(0, 0, 512, 768);
    g.strokeStyle = "#1e5c2a"; g.lineWidth = 6; g.strokeRect(14, 14, 484, 740);
    g.textAlign = "center";
    g.fillStyle = "#7dff9a"; g.font = "600 26px ui-monospace, monospace";
    g.fillText("SUBJECT: THE PHONE", 256, 92);
    g.fillStyle = "#d2ffd9"; g.font = "700 62px Arial, sans-serif";
    g.fillText("HOW PHONES", 256, 252);
    g.fillText("CHANGED", 256, 330);
    g.fillStyle = "#9fe8ab"; g.font = "27px Arial, sans-serif";
    var lines = ["My documentary is about how", "phones changed from 1876 to", "today. I divided it into nine", "chapters, starting with early", "telephones and ending with", "smartphones."];
    lines.forEach(function (s, i) { g.fillText(s, 256, 452 + i * 44); });
  });
  var labelsTex = makeTex(512, 904, function (g) {
    g.clearRect(0, 0, 512, 904);
    g.fillStyle = "#e8dcc0"; g.font = "700 44px Arial, sans-serif"; g.textAlign = "center";
    var labels = ["1","2","3","4","5","6","7","8","9","*","0","#"];
    var xs = [87, 256, 425], ys = [352, 480, 607, 735];
    labels.forEach(function (s, i) { g.fillText(s, xs[i % 3], ys[Math.floor(i / 3)]); });
    g.fillStyle = "#b9a986"; g.font = "600 26px Arial, sans-serif";
    g.fillText("OK", 256, 196);
    g.fillText("CALL", 87, 262);
    g.fillText("END", 425, 262);
  });
  var stitchTex = makeTex(512, 904, function (g) {
    g.clearRect(0, 0, 512, 904);
    g.strokeStyle = "rgba(201,166,120,0.85)"; g.lineWidth = 4;
    g.setLineDash([13, 10]);
    g.strokeRect(26, 26, 460, 852);
  });
  var streakTex = makeTex(256, 384, function (g) {
    g.clearRect(0, 0, 256, 384);
    var grad = g.createLinearGradient(0, 0, 256, 384);
    grad.addColorStop(0.28, "rgba(255,255,255,0)");
    grad.addColorStop(0.5, "rgba(255,255,255,0.13)");
    grad.addColorStop(0.72, "rgba(255,255,255,0)");
    g.fillStyle = grad; g.fillRect(0, 0, 256, 384);
  });
  var glowTex = makeTex(256, 256, function (g) {
    var grad = g.createRadialGradient(128, 128, 8, 128, 128, 128);
    grad.addColorStop(0, "rgba(255,196,100,0.55)");
    grad.addColorStop(0.55, "rgba(255,170,70,0.18)");
    grad.addColorStop(1, "rgba(255,170,70,0)");
    g.fillStyle = grad; g.fillRect(0, 0, 256, 256);
  });
  var shadowTex = makeTex(256, 256, function (g) {
    var grad = g.createRadialGradient(128, 128, 8, 128, 128, 128);
    grad.addColorStop(0, "rgba(0,0,0,0.52)");
    grad.addColorStop(0.6, "rgba(0,0,0,0.28)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = grad; g.fillRect(0, 0, 256, 256);
  });

  // materials (leather grain baked into a noise texture)
  var grainTex = makeTex(256, 256, function (g) {
    g.fillStyle = "#808080"; g.fillRect(0, 0, 256, 256);
    for (var i = 0; i < 5200; i++) {
      var v = 96 + Math.floor(Math.random() * 64);
      g.fillStyle = "rgb(" + v + "," + v + "," + v + ")";
      g.fillRect(Math.random() * 256, Math.random() * 256, 1 + Math.random() * 2, 1 + Math.random() * 2);
    }
    for (var j = 0; j < 60; j++) {
      var v2 = 104 + Math.floor(Math.random() * 40);
      g.strokeStyle = "rgba(" + v2 + "," + v2 + "," + v2 + ",0.5)";
      g.beginPath();
      var x = Math.random() * 256, y = Math.random() * 256;
      g.moveTo(x, y);
      g.quadraticCurveTo(x + 14 - Math.random() * 28, y + 14 - Math.random() * 28, x + 30 - Math.random() * 60, y + 30 - Math.random() * 60);
      g.stroke();
    }
  });
  grainTex.wrapS = grainTex.wrapT = THREE.RepeatWrapping;
  grainTex.repeat.set(2, 3);
  var bodyMat = new THREE.MeshPhysicalMaterial({ color: 0x6e4a2f, roughness: 0.48, metalness: 0.12, clearcoat: 0.5, clearcoatRoughness: 0.4, bumpMap: grainTex, bumpScale: 0.6, envMapIntensity: 0.55 });
  var panelMat = new THREE.MeshStandardMaterial({ color: 0x2a1a10, roughness: 0.7, metalness: 0.1, envMapIntensity: 0.35 });
  var bezelMat = new THREE.MeshStandardMaterial({ color: 0x17110b, roughness: 0.45, metalness: 0.3, envMapIntensity: 0.6 });
  var seamMat = new THREE.MeshStandardMaterial({ color: 0x1a120a, roughness: 0.8, metalness: 0 });
  var darkMat = new THREE.MeshStandardMaterial({ color: 0x3c2716, roughness: 0.6, metalness: 0.2, envMapIntensity: 0.4 });
  var keyMat = new THREE.MeshStandardMaterial({ color: 0x43301d, roughness: 0.5, metalness: 0.2, envMapIntensity: 0.45 });
  var brassMat = new THREE.MeshStandardMaterial({ color: 0xc9a227, roughness: 0.26, metalness: 1.0, envMapIntensity: 1.25 });
  var glassMat = new THREE.MeshPhysicalMaterial({ color: 0x0a0f14, roughness: 0.06, metalness: 0.1, clearcoat: 1, envMapIntensity: 1.6 });

  // rounded, bevelled slab centred on its position
  function roundedSlab(w, h, r, depth, bevel, mat) {
    var s = new THREE.Shape();
    var x = -w / 2, y = -h / 2;
    s.moveTo(x + r, y);
    s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
    s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
    s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
    var geo = new THREE.ExtrudeGeometry(s, { depth: depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel * 0.9, bevelSegments: 3, curveSegments: 20 });
    geo.translate(0, 0, -depth / 2);
    return new THREE.Mesh(geo, mat);
  }
  function box(w, h, d, mat, x, y, z, parent) {
    var m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z); parent.add(m); return m;
  }
  function zCyl(r, len, mat, x, y, z, parent) {
    var m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 20), mat);
    m.rotation.x = Math.PI / 2; m.position.set(x, y, z); parent.add(m); return m;
  }

  var phone = new THREE.Group();
  scene.add(phone);
  var W2 = 1.24; // phone width

  // ----- base (bottom half) -----
  var base = roundedSlab(W2, 2.1, 0.13, 0.26, 0.04, bodyMat);
  base.position.set(0, -1.05, 0);
  phone.add(base);
  var basePanel = roundedSlab(1.12, 1.98, 0.09, 0.012, 0.004, panelMat);
  basePanel.position.set(0, -1.05, 0.176);
  phone.add(basePanel);
  var baseSeam = roundedSlab(1.26, 2.12, 0.14, 0.012, 0.004, seamMat);
  baseSeam.position.set(0, -1.05, 0);
  phone.add(baseSeam);
  var keyTray = roundedSlab(1.04, 1.06, 0.07, 0.012, 0.004, seamMat);
  keyTray.position.set(0, -1.2, 0.182);
  phone.add(keyTray);
  box(1.12, 0.018, 0.01, brassMat, 0, -0.66, 0.19, phone);
  // navi ring + centre button
  var navi = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.026, 12, 32), brassMat);
  navi.position.set(0, -0.42, 0.19); phone.add(navi);
  zCyl(0.075, 0.03, darkMat, 0, -0.42, 0.19, phone);
  [[0, -0.28], [0, -0.56], [-0.14, -0.42], [0.14, -0.42]].forEach(function (pt) {
    zCyl(0.013, 0.012, darkMat, pt[0], pt[1], 0.192, phone);
  });
  // 3D keys + a numbers-only label sheet just above them
  var keyRows = [-0.78, -1.06, -1.34, -1.62], keyCols = [-0.37, 0, 0.37];
  keyRows.forEach(function (ky) {
    keyCols.forEach(function (kx) {
      var k = roundedSlab(0.3, 0.17, 0.05, 0.014, 0.008, keyMat);
      k.position.set(kx, ky, 0.196); phone.add(k);
    });
  });
  var labels = new THREE.Mesh(new THREE.PlaneGeometry(1.12, 1.98),
    new THREE.MeshBasicMaterial({ map: labelsTex, transparent: true }));
  labels.position.set(0, -1.05, 0.218);
  phone.add(labels);
  // mic holes
  for (var mi = 0; mi < 5; mi++) zCyl(0.013, 0.012, darkMat, -0.12 + mi * 0.06, -1.9, 0.188, phone);
  // base sides + bottom port + back panel and emblem
  box(0.035, 0.3, 0.09, darkMat, -0.635, -0.6, 0, phone);
  box(0.035, 0.16, 0.09, brassMat, 0.635, -0.6, 0, phone);
  box(0.26, 0.04, 0.1, darkMat, 0, -2.11, 0, phone);
  var backPanel = roundedSlab(1.05, 1.8, 0.09, 0.01, 0.004, panelMat);
  backPanel.position.set(0, -1.05, -0.176);
  phone.add(backPanel);
  var battCover = roundedSlab(0.9, 1.5, 0.07, 0.01, 0.004, panelMat);
  battCover.position.set(0, -1.05, -0.184);
  phone.add(battCover);
  zCyl(0.13, 0.018, brassMat, 0, -1.05, -0.19, phone);

  // ----- hinge: knuckled segments -----
  function hingeSeg(r, len, mat, x) {
    var m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 20), mat);
    m.rotation.z = Math.PI / 2; m.position.set(x, 0, 0.02); phone.add(m);
  }
  hingeSeg(0.15, 0.44, darkMat, 0);
  hingeSeg(0.15, 0.3, brassMat, -0.44);
  hingeSeg(0.15, 0.3, brassMat, 0.44);
  hingeSeg(0.155, 0.05, darkMat, -0.65);
  hingeSeg(0.155, 0.05, darkMat, 0.65);
  [-0.68, 0.68].forEach(function (hx) {
    var ring = new THREE.Mesh(new THREE.TorusGeometry(0.155, 0.012, 10, 28), brassMat);
    ring.rotation.y = Math.PI / 2;
    ring.position.set(hx, 0, 0.02);
    phone.add(ring);
  });

  // ----- lid (built in its CLOSED pose; opening rotates the pivot) -----
  var lidPivot = new THREE.Group();
  phone.add(lidPivot);
  var lid = roundedSlab(W2, 2.1, 0.13, 0.18, 0.04, bodyMat);
  lid.position.set(0, -1.05, 0.30);
  lidPivot.add(lid);
  var lidSeam = roundedSlab(1.26, 2.12, 0.14, 0.012, 0.004, seamMat);
  lidSeam.position.set(0, -1.05, 0.30);
  lidPivot.add(lidSeam);
  // outer face: camera module + lens, LCD, brand, brass inlay frame, screws
  var camMod = roundedSlab(0.36, 0.36, 0.08, 0.03, 0.008, bezelMat);
  camMod.position.set(0, -0.42, 0.445); lidPivot.add(camMod);
  zCyl(0.088, 0.03, glassMat, 0, -0.42, 0.478, lidPivot);
  zCyl(0.048, 0.012, new THREE.MeshStandardMaterial({ color: 0x28418c, roughness: 0.2, metalness: 0.4 }), 0, -0.42, 0.49, lidPivot);
  var lcdRim = roundedSlab(0.92, 0.63, 0.07, 0.02, 0.006, bezelMat);
  lcdRim.position.set(0, -1.18, 0.437); lidPivot.add(lcdRim);
  var lcd = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.51),
    new THREE.MeshStandardMaterial({ map: lcdTex, emissive: 0x66ff88, emissiveMap: lcdTex, emissiveIntensity: 0.35, roughness: 0.35 }));
  lcd.position.set(0, -1.18, 0.449); lidPivot.add(lcd);
  var led = new THREE.Mesh(new THREE.SphereGeometry(0.022, 10, 8),
    new THREE.MeshStandardMaterial({ color: 0x113311, emissive: 0x39ff6a, emissiveIntensity: 2.2 }));
  led.position.set(-0.28, -0.42, 0.472); lidPivot.add(led);
  var stitch = new THREE.Mesh(new THREE.PlaneGeometry(1.14, 2.0),
    new THREE.MeshBasicMaterial({ map: stitchTex, transparent: true }));
  stitch.position.set(0, -1.05, 0.4345); lidPivot.add(stitch);
  var brand = new THREE.Mesh(new THREE.PlaneGeometry(0.92, 0.115),
    new THREE.MeshBasicMaterial({ map: brandTex, transparent: true }));
  brand.position.set(0, -1.64, 0.434); lidPivot.add(brand);
  box(1.14, 0.02, 0.008, brassMat, 0, -0.08, 0.432, lidPivot);
  box(1.14, 0.02, 0.008, brassMat, 0, -2.02, 0.432, lidPivot);
  box(0.02, 1.94, 0.008, brassMat, -0.585, -1.05, 0.432, lidPivot);
  box(0.02, 1.94, 0.008, brassMat, 0.585, -1.05, 0.432, lidPivot);
  [[-0.5, -0.16], [0.5, -0.16], [-0.5, -1.94], [0.5, -1.94]].forEach(function (p) {
    zCyl(0.02, 0.012, darkMat, p[0], p[1], 0.434, lidPivot);
  });
  // inner face: earpiece holes, screen bezel + screen
  var earFrame = roundedSlab(0.46, 0.09, 0.03, 0.012, 0.004, bezelMat);
  earFrame.position.set(0, -1.99, 0.162); lidPivot.add(earFrame);
  for (var ei = 0; ei < 5; ei++) zCyl(0.014, 0.012, darkMat, -0.12 + ei * 0.06, -1.99, 0.158, lidPivot);
  var bezel = roundedSlab(1.1, 1.68, 0.07, 0.02, 0.006, bezelMat);
  bezel.position.set(0, -1.02, 0.155); lidPivot.add(bezel);
  var screen = new THREE.Mesh(new THREE.PlaneGeometry(0.96, 1.52),
    new THREE.MeshBasicMaterial({ map: screenTex }));
  screen.position.set(0, -1.02, 0.134);
  screen.rotation.x = Math.PI;
  lidPivot.add(screen);
  var streak = new THREE.Mesh(new THREE.PlaneGeometry(0.96, 1.52),
    new THREE.MeshBasicMaterial({ map: streakTex, transparent: true, depthWrite: false }));
  streak.position.set(0, -1.02, 0.13);
  streak.rotation.x = Math.PI;
  lidPivot.add(streak);
  // antenna with brass collar and tip
  var antCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.1, 14), brassMat);
  antCollar.position.set(0.44, 0.05, 0.1); lidPivot.add(antCollar);
  var antShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.044, 0.44, 12), darkMat);
  antShaft.position.set(0.44, 0.3, 0.1); lidPivot.add(antShaft);
  var antTip = new THREE.Mesh(new THREE.SphereGeometry(0.052, 14, 12), brassMat);
  antTip.position.set(0.44, 0.54, 0.1); lidPivot.add(antTip);
  var antRing = new THREE.Mesh(new THREE.TorusGeometry(0.042, 0.008, 8, 20), brassMat);
  antRing.rotation.x = Math.PI / 2;
  antRing.position.set(0.44, 0.44, 0.1); lidPivot.add(antRing);

  // ----- pedestal: gold glow + soft contact shadow -----
  var glow = new THREE.Mesh(new THREE.CircleGeometry(2.4, 40),
    new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = -2.85; glow.renderOrder = 1;
  scene.add(glow);
  var shadow = new THREE.Mesh(new THREE.CircleGeometry(1.6, 40),
    new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = -2.83; shadow.renderOrder = 2;
  scene.add(shadow);

  // ----- drifting gold sparkles around the phone -----
  var sparkN = 70, sparkPos = new Float32Array(sparkN * 3), sparkSpd = [];
  for (var si = 0; si < sparkN; si++) {
    sparkPos[si * 3] = (Math.random() - 0.5) * 6.5;
    sparkPos[si * 3 + 1] = Math.random() * 5 - 2.6;
    sparkPos[si * 3 + 2] = (Math.random() - 0.5) * 3.5;
    sparkSpd.push(0.08 + Math.random() * 0.22);
  }
  var sparkGeo = new THREE.BufferGeometry();
  sparkGeo.setAttribute("position", new THREE.BufferAttribute(sparkPos, 3));
  var sparks = new THREE.Points(sparkGeo, new THREE.PointsMaterial({
    map: glowTex, color: 0xffd9a0, size: 0.14, transparent: true, opacity: 0.75,
    blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
  }));
  scene.add(sparks);

  phone.position.y = 0.7;

  function sizeAll() {
    var w = wrap.clientWidth || window.innerWidth, h = wrap.clientHeight || window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    rainSize();
  }
  sizeAll();
  window.addEventListener("resize", sizeAll);

  // ---------- interaction: spin -> align -> open -> zoom in ----------
  var state = "spin";
  var tState = 0, rotFrom = 0, rotTo = 0, alignDur = 0.5;
  var camFrom = new THREE.Vector3(), camTo = new THREE.Vector3(0, 1.58, 2.2);
  var lookFrom = new THREE.Vector3(0, -0.1, 0), lookTo = new THREE.Vector3(0, 1.58, 0.05);
  var lookCur = lookFrom.clone();
  var closeCb = null;
  var fadeEl = document.getElementById("entryFade");
  function easeIO(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

  wrap.addEventListener("pointerdown", function () {
    if (state !== "spin") return;
    state = "align"; tState = 0;
    rotFrom = phone.rotation.y;
    rotTo = Math.round(rotFrom / (Math.PI * 2)) * Math.PI * 2;
    alignDur = 0.35 + Math.abs(rotTo - rotFrom) / Math.PI * 0.35;
  });

  // ---------- the ending: the same phone, closing ----------
  window.entryClosePhone = function (cb) {
    finished = false;                    // a later click may open it again
    closeCb = cb || null;
    rainRun = true; lastRain = performance.now();
    requestAnimationFrame(rainFrame);
    phone.rotation.y = 0;
    phone.position.y = 0.7;
    lidPivot.rotation.x = -2.932;        // start fully open, as the film leaves it
    camera.position.set(0, 0.3, 7.6);
    lookCur.copy(lookFrom);
    if (fadeEl) fadeEl.style.opacity = "1";
    state = "reveal"; tState = 0;
    if (!running) { running = true; clock.getDelta(); animate(); }
  };

  var clock = new THREE.Clock();
  var running = true;
  function animate() {
    if (!running) return;
    requestAnimationFrame(animate);
    var dt = Math.min(0.05, clock.getDelta());
    var t = clock.elapsedTime;
    var bob = Math.sin(t * 0.9);
    // sparkles drift upward in every state
    var arr = sparkGeo.attributes.position.array;
    for (var i = 0; i < sparkN; i++) {
      arr[i * 3 + 1] += sparkSpd[i] * dt;
      if (arr[i * 3 + 1] > 2.6) arr[i * 3 + 1] = -2.6;
    }
    sparkGeo.attributes.position.needsUpdate = true;
    if (state === "spin") {
      phone.rotation.y += dt * 0.45;
      phone.position.y = 0.7 + bob * 0.13;
      glow.material.opacity = 0.85 + bob * 0.15;
      shadow.material.opacity = 0.8 - bob * 0.14;
      var ss = 1 - bob * 0.05; shadow.scale.set(ss, ss, 1);
    } else if (state === "align") {
      tState += dt;
      var k = Math.min(1, tState / alignDur);
      phone.rotation.y = rotFrom + (rotTo - rotFrom) * easeIO(k);
      phone.position.y = 0.7 + bob * 0.13 * (1 - k);
      if (k >= 1) { state = "open"; tState = 0; }
    } else if (state === "open") {
      tState += dt;
      var k2 = Math.min(1, tState / 1.15);
      lidPivot.rotation.x = -2.932 * easeIO(k2);
      if (k2 >= 1) {
        state = "zoom"; tState = 0;
        camFrom.copy(camera.position);
      }
    } else if (state === "reveal") {
      tState += dt;
      var kr = Math.min(1, tState / 0.65);
      if (fadeEl) fadeEl.style.opacity = String(1 - kr);
      phone.position.y = 0.7 + bob * 0.05;
      if (kr >= 1) { state = "holdopen"; tState = 0; }
    } else if (state === "holdopen") {
      tState += dt;
      phone.position.y = 0.7 + bob * 0.05;
      if (tState >= 0.7) { state = "close"; tState = 0; }
    } else if (state === "close") {
      tState += dt;
      var kc = Math.min(1, tState / 1.35);
      lidPivot.rotation.x = -2.932 * (1 - easeIO(kc));
      phone.position.y = 0.7 + bob * 0.05 * (1 - kc);
      if (kc >= 1) {
        lidPivot.rotation.x = 0;
        state = "spin";
        if (closeCb) { var ccb = closeCb; closeCb = null; ccb(); }
      }
    } else if (state === "zoom") {
      tState += dt;
      var k3 = Math.min(1, tState / 1.05);
      var e = easeIO(k3);
      camera.position.lerpVectors(camFrom, camTo, e);
      lookCur.lerpVectors(lookFrom, lookTo, e);
      if (fadeEl) fadeEl.style.opacity = String(Math.max(0, (k3 - 0.55) / 0.45));
      if (k3 >= 1) { running = false; finish(); return; }
    }
    camera.lookAt(lookCur);
    renderer.render(scene, camera);
  }
  animate();
}
