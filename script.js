/* ============================================================
   ICONS — Lucide (ISC license, open-source), embedded as inline SVG
   ============================================================ */
const ICONS = {
  mail: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>`,
  image: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  music: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  x: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  volume2: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>`,
  volumeX: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>`,
  heart: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>`,
  quiz: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
  sparkles: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>`,
};


/* ===== EDIT-ME: photo used for the 4-piece puzzle. Drop your file into
   the "assets" folder and point this at it, e.g. 'assets/puzzle.jpg'.
   If the file is missing, the puzzle just falls back to a plain gradient. */
const PUZZLE_PHOTO_URL = 'assets/puzzle.jpg';

/* ===== EDIT-ME: photo shown spinning on the loading screen.
   Drop your file into "assets" and point this at it, e.g. 'assets/loading-bunga.jpg'. */
const LOADING_FLOWER_URL = 'assets/bunga2.webp';

/* ===== EDIT-ME: elongated petal images used for the "confetti burst"
   particle effects (puzzle solved, etc). Point these at your own petal
   cutout photos any time — transparent-background PNG works best. */
const PARTICLE_PETAL_PHOTOS = [
  'assets/contoh partikel bunga.webp',
  'assets/petal-blush-broad-01.webp',
  'assets/petal-wine-oval-01.webp',
  'assets/petal-ruby-broad-01.webp',
  'assets/petal-peach-broad-01.webp',
];

/* Bunga lokal — tidak lagi menarik dari internet. Ganti file-file ini
   di folder assets/ dengan foto bunga kamu sendiri kapan saja (lihat README). */
const FLOWER_PHOTOS = [
  'assets/bunga1.webp',
  'assets/bunga2.webp',
  'assets/bunga3.webp',
  'assets/bunga4.webp',
  'assets/bunga5.webp',
];

/* EDIT-ME: soal kuis receh buat item "Kuis" di orbit. Tambah/kurang/ubah
   soal sesukanya — options bebas berapa aja, correct diisi index (mulai 0)
   dari jawaban yang bener. */
const QUIZ_QUESTIONS = [
  {
    question:'Makanan favorit Gwen apa?',
    options:['Nasi padang','Nasi goreng','Mie gacoan','Seblak','kwetiaw mama'],
    correct:4,
  },
  {
    question:'Hobi Gwen sekarang apa?',
    options:['Main roblox','Baca novel','Tidur','Live joget tiktok:v'],
    correct:2,
  },
  {
    question:'Warna favorit Gwen apa?',
    options:['Pink','Kuning','Biru','Abu-abu', 'Ungu '],
    correct:0,
  },
  {
    question:'apa yang Gwen suka?',
    options:['makan','Bermain dengan teman','aku? (pembuat web)','Laut', 'Tidur'],
    correct:2,
  },
  {
    question:'kalo dunia kiamat siapa yang Gwen selamatin duluan?',
    options:['aku Yahahaha(pembuat web)','Boneka favoritnya','Temannya','Gelas kesayangannya', 'Kucing tetangga'],
    correct:0,
  },
];

function randRange(a,b){ return a + Math.random()*(b-a); }
function randomPhoto(){ return FLOWER_PHOTOS[Math.floor(Math.random()*FLOWER_PHOTOS.length)]; }

/* Shared easing helpers so every hand-rolled animation in this file feels
   consistent instead of each one inventing its own curve. */
function easeOutCubic(t){ return 1 - Math.pow(1-t, 3); }
function easeOutQuint(t){ return 1 - Math.pow(1-t, 5); }
function clamp01(t){ return t<0?0:(t>1?1:t); }

/* "Hore!" petal-burst confetti — spawns a ring of elongated petal images
   from a center point, flings them outward with rotation + a little gravity
   fall, then fades and cleans them up. Reused anywhere we want a celebratory
   pop (currently: solving the puzzle). */
function petalBurst(centerX, centerY, opts){
  const o = Object.assign({ count:34, spread:1, container:document.body }, opts||{});
  const layer = document.createElement('div');
  layer.style.position = 'fixed';
  layer.style.left = '0'; layer.style.top = '0';
  layer.style.width = '100%'; layer.style.height = '100%';
  layer.style.pointerEvents = 'none';
  layer.style.zIndex = '70';
  o.container.appendChild(layer);

  for(let i=0;i<o.count;i++){
    const img = PARTICLE_PETAL_PHOTOS[Math.floor(Math.random()*PARTICLE_PETAL_PHOTOS.length)];
    const size = randRange(22, 42);
    const el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.left = centerX+'px';
    el.style.top = centerY+'px';
    el.style.width = size+'px';
    el.style.height = size*1.7+'px';
    el.style.marginLeft = (-size/2)+'px';
    el.style.marginTop = (-size*0.85)+'px';
    el.style.backgroundImage = `url('${img}')`;
    el.style.backgroundSize = 'contain';
    el.style.backgroundRepeat = 'no-repeat';
    el.style.willChange = 'transform, opacity';

    const angle = randRange(0, Math.PI*2);
    const dist = randRange(110, 260) * o.spread;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - randRange(20,60); // slight upward kick, like a little "hooray" pop
    const fallExtra = randRange(70,160); // gravity pulling it back down after the pop
    const rot0 = randRange(-30,30);
    const rot1 = rot0 + (Math.random()<0.5?-1:1)*randRange(180,420);
    const dur = randRange(1600,2200); // slowed way down — was 900-1400, felt like a flash
    const delay = randRange(0,320);

    el.style.transform = `translate(0px,0px) rotate(${rot0}deg) scale(.3)`;
    el.style.opacity = '0';
    layer.appendChild(el);

    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{
        el.style.transition = `transform ${dur}ms cubic-bezier(.16,.84,.24,1) ${delay}ms, opacity ${dur}ms ease ${delay}ms`;
        el.style.opacity = '1';
        el.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot0}deg) scale(1)`;
        // second leg: fall + fade, kicks in after the initial pop settles
        setTimeout(()=>{
          el.style.transition = `transform ${dur*0.9}ms cubic-bezier(.4,0,.7,1), opacity ${dur*0.9}ms ease`;
          el.style.transform = `translate(${dx}px, ${dy+fallExtra}px) rotate(${rot1}deg) scale(.85)`;
          el.style.opacity = '0';
        }, delay + dur*0.6);
      });
    });
  }

  setTimeout(()=> layer.remove(), 4200);
}

/* a single circular "flower token" built from a real photo */
function makeFlowerPhotoEl(size, className){
  const el = document.createElement('div');
  el.className = className;
  el.style.width = size+'px';
  el.style.height = size+'px';
  el.style.backgroundImage = `url('${randomPhoto()}')`;
  return el;
}

/* ============================================================
   SCENE SWITCHING — an organic curtain of individual flowers.
   Every flower tile animates its OWN transform with a slightly randomized
   delay, duration and rotation, so the group flows in like fabric/petals
   rather than sliding as one rigid block, while still all traveling in the
   same overall direction.
   ============================================================ */
let transitioning = false;
let wipeCounter = 0;

function switchScene(id, cb, forceType){
  if(transitioning) return;
  transitioning = true;
  const overlay = document.getElementById('flower-transition');
  overlay.innerHTML = '';

  const type = forceType || (wipeCounter % 2 === 0 ? 'diagonal' : 'vertical');
  wipeCounter++;

  const W = window.innerWidth, H = window.innerHeight;
  // Bigger spacing = far fewer DOM elements (this was the actual lag cause —
  // ~190 overlapping masked+blurred elements on a big screen). Each flower is
  // still drawn much larger than this spacing so the overlap still fully
  // covers the screen with zero gaps, just with a third of the element count.
  // The while-loop below also caps the total tile count so a huge/ultrawide
  // monitor can't silently spawn hundreds of elements and lag.
  let cell = 120;
  let cols = Math.ceil(W/cell) + 2;
  let rows = Math.ceil(H/cell) + 2;
  while(cols*rows > 190){
    cell += 20;
    cols = Math.ceil(W/cell) + 2;
    rows = Math.ceil(H/cell) + 2;
  }

  // use a generous multiplier (not just viewport size) so that even tiles
  // sitting at the far corners of the oversized grid fully clear the screen
  const startVec = type === 'diagonal' ? { x:-W*1.7, y: H*1.7 } : { x:0, y: H*1.7 };
  const outVec   = type === 'diagonal' ? { x: W*1.7, y:-H*1.7 } : { x:0, y:-H*1.7 };

  const tiles = [];
  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      const size = cell * randRange(1.9,2.1); // still much bigger than spacing -> full coverage, no gaps
      const f = makeFlowerPhotoEl(size, 'transition-flower');
      f.style.left = (c*cell - cell*0.5 + randRange(-22,22)) + 'px';
      f.style.top  = (r*cell - cell*0.5 + randRange(-22,22)) + 'px';

      const delay = randRange(0,420);
      const dur = randRange(1650,2100);
      const rot0 = randRange(-16,16);
      // spin continuously through the whole flight (multiple full turns,
      // not just settling from rot0 to 0) — this is what reads as a
      // smooth, lively "twirl" rather than a flat slide
      const spin0 = rot0 + (Math.random()<0.5 ? -1:1) * randRange(340,520);
      f.style.transition = `transform ${dur}ms cubic-bezier(.33,1,.68,1) ${delay}ms`;
      f.style.transform = `translate(${startVec.x}px, ${startVec.y}px) rotate(${rot0}deg) scale(.85)`;

      overlay.appendChild(f);
      tiles.push({ el:f, delay, dur, spin0 });
    }
  }

  // next frame: release every tile toward its resting position — the
  // per-tile delay/duration differences create the organic cascade
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      tiles.forEach(t=>{ t.el.style.transform = `translate(0,0) rotate(${t.spin0}deg) scale(1)`; });
    });
  });

  const maxIn = Math.max(...tiles.map(t=> t.delay + t.dur)) + 80;

  setTimeout(()=>{
    document.querySelectorAll('.scene').forEach(s=>s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(cb) cb();
  }, maxIn);

  const holdDuration = 420;
  setTimeout(()=>{
    tiles.forEach(t=>{
      const spin1 = t.spin0 + (Math.random()<0.5 ? -1:1) * randRange(340,520);
      t.el.style.transform = `translate(${outVec.x}px, ${outVec.y}px) rotate(${spin1}deg) scale(.85)`;
    });
  }, maxIn + holdDuration);

  const maxOut = Math.max(...tiles.map(t=> t.delay + t.dur)) + 80;
  setTimeout(()=>{
    overlay.innerHTML = '';
    transitioning = false;
  }, maxIn + holdDuration + maxOut);
}

/* ============================================================
   SCENE 1: LOADING
   ============================================================ */
(function loadingScene(){
  const flowerEl = document.getElementById('load-flower');
  flowerEl.style.backgroundImage = `url('${LOADING_FLOWER_URL}')`;

  // sparkle particles drifting outward around the flower, staggered and
  // endlessly looping (each respawns via CSS animation `infinite`)
  const particleLayer = document.getElementById('load-particles');
  const pCount = 20;
  for(let i=0;i<pCount;i++){
    const p = document.createElement('div');
    p.className = 'load-particle';
    const angle = randRange(0, Math.PI*2);
    const dist = randRange(90, 190);
    const size = randRange(10, 22);
    p.style.width = size+'px';
    p.style.height = size+'px';
    p.style.left = (130 + Math.cos(angle)*20) + 'px';
    p.style.top = (130 + Math.sin(angle)*20) + 'px';
    p.style.setProperty('--px', (Math.cos(angle)*dist).toFixed(1)+'px');
    p.style.setProperty('--py', (Math.sin(angle)*dist).toFixed(1)+'px');
    p.style.animationDuration = randRange(1800,3000)+'ms';
    p.style.animationDelay = randRange(0,2500)+'ms';
    particleLayer.appendChild(p);
  }

  const bar = document.getElementById('load-bar');
  const pct = document.getElementById('load-pct');

  // drive the fill with a real easing curve on rAF instead of chunky
  // setInterval jumps — this alone is most of what reads as "smooth"
  const duration = 1900;
  const start = performance.now();
  function tick(now){
    const t = clamp01((now-start)/duration);
    const eased = easeOutCubic(t);
    const p = eased*100;
    bar.style.width = p+'%';
    pct.textContent = Math.floor(p)+'%';
    if(t<1){
      requestAnimationFrame(tick);
    } else {
      setTimeout(()=> switchScene('scene-puzzle', buildPuzzle), 400);
    }
  }
  requestAnimationFrame(tick);
})();

/* ============================================================
   SCENE 2: PUZZLE (4 pieces, tap two to swap)

   Slicing math: we load the photo first to read its real width/height,
   scale it (preserving aspect ratio) so it fully covers the square grid
   — exactly like CSS "object-fit: cover" would — centering the crop,
   then give each piece the SAME background-image at the SAME big size,
   just shifted by an exact pixel offset for its row/column. Using real
   pixel offsets (instead of percentages) is what keeps every piece
   showing the right slice instead of everything collapsing to the
   top-left corner.
   ============================================================ */
function buildPuzzle(){
  const grid = document.getElementById('puzzle-grid');
  const wrap = document.querySelector('.puzzle-wrap');
  document.getElementById('puzzle-preview-thumb').src = PUZZLE_PHOTO_URL;

const preview = document.getElementById('puzzle-preview-img');
if(preview){
    preview.src = PUZZLE_PHOTO_URL;
}
  grid.innerHTML = '';
  grid.style.position = 'relative';
  wrap.classList.remove('solved');

  const gridSize = grid.clientWidth; // grid is always square (see CSS)
  const pieceSize = gridSize / 2;

  const positions = [ {col:0,row:0}, {col:1,row:0}, {col:0,row:1}, {col:1,row:1} ];

  // slotOf[pieceId] = which slot that piece currently sits in.
  let slotOf = [0,1,2,3];
  do{
    for(let i=slotOf.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [slotOf[i],slotOf[j]] = [slotOf[j],slotOf[i]];
    }
  } while(slotOf.every((v,i)=>v===i));

  let selectedPiece = null;
  let coverW = gridSize, coverH = gridSize, offsetX = 0, offsetY = 0;
  let imageOk = false;

  // pieces are created ONCE and stay put in the DOM — only their transform
  // (position) changes on swap, so the browser can animate a real slide
  // instead of us destroying/recreating nodes every click.
  const pieceEls = [];

  function placeAt(el, slot, animate){
    const pos = positions[slot];
    el.style.transition = animate
      ? 'transform 420ms cubic-bezier(.2,.9,.25,1.1), outline-color .2s ease'
      : 'none';
    el.style.transform = `translate(${pos.col*pieceSize}px, ${pos.row*pieceSize}px)`;
  }

  function applyPieceStyle(piece, pieceId){
    if(imageOk){
      const pos = positions[pieceId]; // background slice is fixed to the piece's own identity
      piece.style.backgroundImage = `url('${PUZZLE_PHOTO_URL}')`;
      piece.style.backgroundSize = `${coverW}px ${coverH}px`;
      piece.style.backgroundPosition =
        `${offsetX - pos.col*pieceSize}px ${offsetY - pos.row*pieceSize}px`;
    }
  }

  function build(){
    grid.innerHTML = '';
    pieceEls.length = 0;
    for(let pieceId=0; pieceId<4; pieceId++){
      const piece = document.createElement('div');
      piece.className = 'puzzle-piece';
      piece.style.position = 'absolute';
      piece.style.top = 0; piece.style.left = 0;
      piece.style.width = pieceSize+'px';
      piece.style.height = pieceSize+'px';
      applyPieceStyle(piece, pieceId);
      placeAt(piece, slotOf[pieceId], false);
      piece.addEventListener('click', ()=> onPieceClick(pieceId));
      grid.appendChild(piece);
      pieceEls.push(piece);
    }
  }

  function onPieceClick(pieceId){
    if(wrap.classList.contains('solved')) return;
    if(selectedPiece===null){
      selectedPiece = pieceId;
      pieceEls[pieceId].classList.add('selected');
      return;
    }
    if(selectedPiece===pieceId){
      pieceEls[pieceId].classList.remove('selected');
      selectedPiece = null;
      return;
    }
    const a = selectedPiece, b = pieceId;
    pieceEls[a].classList.remove('selected');
    [slotOf[a], slotOf[b]] = [slotOf[b], slotOf[a]];
    placeAt(pieceEls[a], slotOf[a], true);
    placeAt(pieceEls[b], slotOf[b], true);
    selectedPiece = null;

    if(slotOf.every((v,i)=>v===i)){
      setTimeout(()=>{
        wrap.classList.add('solved');
        pieceEls.forEach((el,i)=>{
          el.style.transition += ', transform 380ms cubic-bezier(.34,1.56,.64,1) ' + (i*60) + 'ms';
          el.style.transform += ' scale(0.94)';
          setTimeout(()=>{ el.style.transform = el.style.transform.replace(' scale(0.94)',' scale(1)'); }, 40);
        });
        // pause here so Gwen actually gets to see the completed photo
        // before it explodes into petals — this was missing before, the
        // burst used to fire the instant the pieces snapped into place.
        setTimeout(()=>{
          const rect = grid.getBoundingClientRect();
          petalBurst(rect.left + rect.width/2, rect.top + rect.height/2, { count:40 });
          // give the (now much slower) burst room to fully play out before the curtain wipes in
          setTimeout(()=> switchScene('scene-heart', startHeartFormation), 3000);
        }, 1100);
      }, 420);
    }
  }

  build(); // draw immediately with fallback gradient while the photo loads

  const img = new Image();
  img.onload = ()=>{
    const ratio = img.naturalWidth / img.naturalHeight;
    if(ratio >= 1){ // landscape or square: height fills the grid, width overflows
      coverH = gridSize;
      coverW = gridSize * ratio;
    } else { // portrait: width fills the grid, height overflows
      coverW = gridSize;
      coverH = gridSize / ratio;
    }
    offsetX = (gridSize - coverW) / 2; // negative when coverW > gridSize -> centers the crop
    offsetY = (gridSize - coverH) / 2;
    imageOk = true;
    pieceEls.forEach((el, pieceId)=> applyPieceStyle(el, pieceId));
  };
  img.onerror = ()=>{ imageOk = false; };
  img.src = PUZZLE_PHOTO_URL;
}
document.getElementById('puzzle-skip').addEventListener('click', ()=>{
  switchScene('scene-heart', startHeartFormation);
});

/* ============================================================
   SCENE 3: HEART FORMATION (real flower photos, one by one)
   ============================================================ */
function heartPoint(t, scale, cx, cy){
  const x = 16*Math.pow(Math.sin(t),3);
  const y = 13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t);
  return { x: cx + x*scale, y: cy - y*scale };
}

let heartStarted = false;
function startHeartFormation(){
  if(heartStarted) return;
  heartStarted = true;
  const field = document.getElementById('heart-field');
  field.innerHTML='';
  const W = window.innerWidth, H = window.innerHeight;
  const cx = W/2, cy = H/2 - 20;
  const scale = Math.min(W,H)/32;
  // pusat visual bentuk hati beda dari cy, karena lekukan atas cuma ~12*scale
// sedangkan ujung bawah ~17*scale — jadi titik tengah asli ada di cy + 2.5*scale
const caption = document.getElementById('heart-caption');
caption.style.left = cx + 'px';
caption.style.top = (cy + scale * 2.5) + 'px';
  const count = 40;
  const flowers = [];

  for(let i=0;i<count;i++){
    const size = randRange(58,92); // bigger, overlapping is fine — no need to space them out
    const f = makeFlowerPhotoEl(size, 'flower-photo');
    f.style.left = randRange(0,W)+'px';
    f.style.top = randRange(0,H)+'px';
    f.style.opacity = '0';
    f.style.transform = 'scale(.4)';
    field.appendChild(f);
    flowers.push(f);
  }
  requestAnimationFrame(()=>{
    flowers.forEach((f,i)=>{
      setTimeout(()=>{
        f.style.transition = 'opacity .9s ease, transform 1500ms cubic-bezier(.2,.9,.25,1.1)';
        f.style.opacity = '1'; f.style.transform = 'scale(1)';
      }, i*45);
    });
  });

  setTimeout(()=>{
    flowers.forEach((f,i)=>{
      const t = (i/count)*Math.PI*2;
      const pt = heartPoint(t, scale, cx, cy);
      const size = parseFloat(f.style.width);
      f.style.transition = 'left 2.6s cubic-bezier(.16,.9,.2,1), top 2.6s cubic-bezier(.16,.9,.2,1)';
      f.style.left = (pt.x - size/2)+'px';
      f.style.top = (pt.y - size/2)+'px';
    });
  }, 1900);

  // once the shape has settled, give every flower a slow, slightly
  // different bob/sway so the heart reads as alive rather than a frozen
  // photo collage — each flower gets its own phase + period so they never
  // sync up into one rigid pulse.
  setTimeout(()=>{
    flowers.forEach((f)=>{
      const dur = randRange(3200, 5200);
      const delay = randRange(0, 2000);
      const dx = randRange(3, 7).toFixed(1);
      const dy = randRange(4, 9).toFixed(1);
      f.style.animation = `gentle-float ${dur}ms ease-in-out ${delay}ms infinite`;
      f.style.setProperty('--fx', dx+'px');
      f.style.setProperty('--fy', dy+'px');
    });
  }, 4700);

  setTimeout(()=>{
    document.getElementById('heart-caption').classList.add('show');
  }, 4200);

  setTimeout(()=>{
    const btn=document.createElement('button');
    btn.id='enter-orbit-btn';
    btn.textContent='Masuk ke Gwenniverse';
    document.body.appendChild(btn);

    requestAnimationFrame(()=>{
      btn.classList.add('show');
    });

    btn.onclick=()=>{
      // ask for tilt/motion permission right on this real user tap — iOS Safari
      // only grants this from a genuine gesture, and silently does nothing
      // (no parallax, no error) everywhere else that doesn't need/support it
      if(typeof DeviceOrientationEvent !== 'undefined' &&
         typeof DeviceOrientationEvent.requestPermission === 'function'){
        DeviceOrientationEvent.requestPermission().then(state=>{
          if(state === 'granted') enableTiltParallax();
        }).catch(()=>{});
      } else if(window.DeviceOrientationEvent){
        enableTiltParallax();
      }

      // 1) caption fades out first
      document.getElementById('heart-caption').classList.remove('show');
      document.getElementById('heart-caption').classList.add('fade-out');

      // 2) shortly after, the button itself fades/blurs out (press feedback
      //    is handled purely by the CSS :active state above, no extra JS needed)
      setTimeout(()=>{
        btn.classList.remove('show');
        btn.classList.add('hide');
      }, 250);

      // 3) BGM starts fading in while the button is still leaving
      setTimeout(()=>{
        if(muted){
          muted=false;
          soundToggle.innerHTML=ICONS.volume2;
          fadeInAudio(bgAudio,0.18);
        }
      }, 350);

      // 4) once everything has visually cleared, hand off to the flower
      //    curtain transition into the orbit scene
      setTimeout(()=>{
        btn.remove();
        switchScene('scene-orbit', buildOrbit);
      }, 1050);
    };
  },10000);
}

/* ============================================================
   SCENE 4: ORBIT (tilted 3D depth + continuous rotation + comets)
   ============================================================ */
let orbitBuilt = false;
let orbitAngle = 0;
let orbitItemsData = [];

function buildOrbit(){
  buildStars();
  startComets();

  document.getElementById('heart-core').innerHTML = `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="heartGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#fff5f2"/>
          <stop offset="60%" stop-color="#f3c6d3"/>
          <stop offset="100%" stop-color="#a13952"/>
        </radialGradient>
      </defs>
      <path d="M50 88 C10 62 4 34 22 20 C36 9 50 18 50 32 C50 18 64 9 78 20 C96 34 90 62 50 88 Z" fill="url(#heartGlow)"/>
    </svg>`;

  if(orbitBuilt){ return; }
  orbitBuilt = true;

  const itemsLayer = document.getElementById('orbit-items');
  const defs = [
  { photo:true, photoUrl:'assets/gw (1).jpg', key:'foto1' },
  { photo:true, photoUrl:'assets/gw (2).jpg', key:'foto2' },
  { photo:true, photoUrl:'assets/gw (3).jpg', key:'foto3' },
  { photo:true, photoUrl:'assets/gw (4).jpg', key:'foto4' },
  { photo:true, photoUrl:'assets/gw (5).jpg', key:'foto5' },

  { icon:'music', label:'Musik', key:'musik' },
  { icon:'quiz', label:'Kuis', key:'kuis' }
];

  const n = defs.length;
  const now0 = performance.now();
  defs.forEach((d, i)=>{
    const el = document.createElement('div');
    el.className = 'orbit-item' + (d.disabled ? ' disabled' : '');
    if(d.photo){
    el.innerHTML = `
        <img class="orbit-photo" src="${d.photoUrl}">
    `;
}else{
    el.innerHTML = `
        <div class="item-icon">${ICONS[d.icon]}</div>
        <div class="item-label">${d.label}</div>
    `;
}
    if(!d.disabled){
      el.addEventListener('click', ()=> openModal(d.key));
    }
    const data = { el, baseAngle: (i/n)*Math.PI*2, hovered:false, spawnAt: now0 + i*110 };
    el.addEventListener('mouseenter', ()=>{ data.hovered = true; el.classList.add('hover-pop'); });
    el.addEventListener('mouseleave', ()=>{ data.hovered = false; el.classList.remove('hover-pop'); });
    itemsLayer.appendChild(el);
    orbitItemsData.push(data);
  });

  requestAnimationFrame(animateOrbit);
}

let orbitLastTime = null;
function animateOrbit(ts){
  if(orbitLastTime===null) orbitLastTime = ts;
  const dt = ts - orbitLastTime;
  orbitLastTime = ts;
  // normalize to a 60fps baseline so the orbit spins at the same real-world
  // speed on a 60Hz, 90Hz or 120Hz display instead of speeding up with
  // frame rate.
  orbitAngle += 0.0009 * (dt/16.6667);
  const wrap = document.querySelector('.orbit-wrap');
  // match the CSS ring exactly: .orbit-ring is 88% wide / 46% tall of orbit-wrap,
  // i.e. its radii are 44% of width and 23% of height — so items ride the line.
  const ringRX = wrap.clientWidth * 0.44;
  const ringRY = wrap.clientHeight * 0.23;

  orbitItemsData.forEach(item=>{
    const angle = item.baseAngle + orbitAngle;
    const depth = (Math.sin(angle) + 1) / 2; // 0 = far behind heart, 1 = nearest viewer
    const x = Math.cos(angle) * ringRX;
    const y = Math.sin(angle) * ringRY;

    // ease each item in from nothing over its first 550ms so the whole ring
    // doesn't just pop into existence the instant the scene appears.
    const spawnT = clamp01((ts - item.spawnAt)/550);
    const spawnScale = easeOutCubic(spawnT);

    let scale, blurPx, opacity, z;
    if(item.hovered){
      // pop fully regardless of current depth/blur
      scale = 1.35;
      blurPx = 0;
      opacity = 1;
      z = 999;
    } else {
      scale = (0.42 + Math.pow(depth, 1.4) * 0.95) * spawnScale;
      blurPx = (1 - depth) * 4.6;
      opacity = (0.5 + depth * 0.5) * spawnScale;
      z = Math.round(depth * 100);
    }

    item.el.style.transform = `translate(-50%,-50%) translate(${x}px, ${y}px) scale(${scale})`;
    item.el.style.filter = `blur(${blurPx}px)`;
    item.el.style.opacity = opacity;
    item.el.style.zIndex = z;
    item.el.classList.toggle('near', depth > 0.82);
  });

  requestAnimationFrame(animateOrbit);
}

let letterBuilt = false;
function buildLetterScene(){
  const d = modalData.surat;
  const content = document.getElementById('letter-content');
  content.innerHTML = `
    <div class="letter-frame">
      <div class="letter-seal">${ICONS.heart}</div>
      <h1 class="display">${d.title}</h1>
      <p>${d.body}</p>
      <button class="ghost-btn" id="letter-back">Kembali ke semesta kecil Gwen</button>
    </div>
  `;
  document.getElementById('letter-back').addEventListener('click', ()=>{
    switchScene('scene-orbit', buildOrbit);
  });
  if(!letterBuilt){
    letterBuilt = true;
    buildStars('letter-stars');
  }
}

document.getElementById('letter-toggle').innerHTML = ICONS.mail;
document.getElementById('letter-toggle').addEventListener('click', ()=>{
  switchScene('scene-letter', buildLetterScene);
});

/* EDIT-ME: pesan singkat yang muncul random pas Gwen klik hati di tengah orbit */
const HEART_MESSAGES = [
  'I Love You',
  'Semesta lucu kaya kamu',
  'Kamu tuh rumah paling nyaman buat aku',
  'Semoga kamu selalu bahagia ya',
  'Ini dari aku, buat kamu, selalu',
];

/* EDIT-ME: pesan singkat yang muncul kalau Gwen berhasil "nangkep" shooting star */
const STAR_MESSAGES = [
  'Kamu nangkep bintang jatuh!',
  'Semoga harapan kamu terkabul',
  'Bintangnya titip pesan: "aku" sayang kamu HAHAHA',
];

function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function showFloatingMessage(x, y, text){
  const bubble = document.createElement('div');
  bubble.className = 'floating-message';
  bubble.textContent = text;
  bubble.style.left = x+'px';
  bubble.style.top = y+'px';
  document.body.appendChild(bubble);
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=> bubble.classList.add('show'));
  });
  setTimeout(()=>{
    bubble.classList.remove('show');
    setTimeout(()=> bubble.remove(), 550);
  }, 2200);
}

let heartClickCooldown = false;
document.getElementById('heart-core').addEventListener('click', ()=>{
  if(heartClickCooldown) return;
  heartClickCooldown = true;
  const rect = document.getElementById('heart-core').getBoundingClientRect();
  const cx = rect.left + rect.width/2, cy = rect.top + rect.height/2;
  petalBurst(cx, cy, { count:20, spread:.55 });
  showFloatingMessage(cx, cy, pickRandom(HEART_MESSAGES));
  setTimeout(()=>{ heartClickCooldown = false; }, 2200);
});

/* ============================================================
   PARALLAX — subtle depth-of-field feel in the orbit scene.
   Desktop: mouse position. Mobile: device tilt (permission requested
   from the real tap on "Masuk ke Gwenniverse", see above). Both feed
   the same applyParallax(nx, ny) so there's one code path either way.
   ============================================================ */
const isDesktopPointer = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
let parallaxRAF = null;
let parallaxTargetX = 0, parallaxTargetY = 0;

function applyParallax(nx, ny){
  parallaxTargetX = Math.max(-1, Math.min(1, nx));
  parallaxTargetY = Math.max(-1, Math.min(1, ny));
  if(parallaxRAF) return;
  parallaxRAF = requestAnimationFrame(renderParallax);
}

function renderParallax(){
  parallaxRAF = null;
  const stars = document.getElementById('orbit-stars');
  if(stars) stars.style.transform = `translate(${parallaxTargetX*8}px, ${parallaxTargetY*8}px)`;
  document.querySelectorAll('#scene-orbit .planet').forEach(p=>{
    const depth = parseFloat(p.dataset.depth) || 0.15;
    p.style.transform = `translate(${parallaxTargetX*depth*60}px, ${parallaxTargetY*depth*60}px)`;
  });
}

if(isDesktopPointer){
  document.getElementById('scene-orbit').addEventListener('mousemove', (e)=>{
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = (e.clientY / window.innerHeight) * 2 - 1;
    applyParallax(nx, ny);
  });
}

let tiltEnabled = false;
function enableTiltParallax(){
  if(tiltEnabled) return;
  tiltEnabled = true;
  window.addEventListener('deviceorientation', (e)=>{
    if(e.beta === null || e.gamma === null) return;
    // gamma: left-right tilt (-90..90), beta: front-back tilt (-180..180)
    const nx = Math.max(-1, Math.min(1, e.gamma / 30));
    const ny = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
    applyParallax(nx, ny);
  });
}

/* ============================================================
   CUSTOM SPARKLE CURSOR — desktop only (a fine mouse pointer). Skipped
   entirely on touch devices so it never gets in the way on a phone.
   Throttled so it can't spam the DOM even on a fast mouse.
   ============================================================ */
if(isDesktopPointer){
  let lastSparkleAt = 0;
  document.addEventListener('mousemove', (e)=>{
    const now = performance.now();
    if(now - lastSparkleAt < 60) return; // throttle: ~16 sparkles/sec max
    lastSparkleAt = now;
    const dot = document.createElement('div');
    dot.className = 'cursor-sparkle';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    document.body.appendChild(dot);
    setTimeout(()=> dot.remove(), 650);
  });
}

function buildStars(containerId){
  const container = document.getElementById(containerId || 'orbit-stars');
  if(container.childElementCount>0) return;
  for(let i=0;i<70;i++){
    const s = document.createElement('div');
    s.className='star';
    const size = randRange(1,2.6);
    s.style.width=size+'px'; s.style.height=size+'px';
    s.style.left=randRange(0,100)+'%';
    s.style.top=randRange(0,100)+'%';
    s.style.animationDelay = randRange(0,3)+'s';
    container.appendChild(s);
  }
}

/* Comets: a wrapper is rotated to the true travel angle, the glowing core then
   only ever animates translateX within that rotated frame, so the trailing
   tail (drawn to the core's left) always points backward along the real
   direction of travel — this is what fixes the old "tail always sideways" bug. */
let cometsStarted = false;
function startComets(){
  if(cometsStarted) return;
  cometsStarted = true;
  const layer = document.getElementById('comet-layer');

  function spawnComet(){
    const startX = randRange(0, window.innerWidth*0.7);
    const startY = randRange(-40, window.innerHeight*0.35);
    const dx = randRange(260, 480);
    const dy = randRange(160, 360) * (Math.random() < 0.5 ? 1 : -1);
    const dist = Math.sqrt(dx*dx + dy*dy);
    const angleDeg = Math.atan2(dy, dx) * 180 / Math.PI;
    const dur = randRange(3.5, 5.5);

    const wrapEl = document.createElement('div');
    wrapEl.className = 'comet-wrap';
    wrapEl.style.left = startX+'px';
    wrapEl.style.top = startY+'px';
    wrapEl.style.transform = `rotate(${angleDeg}deg)`;

    const core = document.createElement('div');
    core.className = 'comet-core';
    core.style.setProperty('--comet-dist', dist+'px');
    core.style.animationDuration = dur+'s';

    const hit = document.createElement('div');
    hit.className = 'comet-hit';
    core.appendChild(hit);

    let caught = false;
    hit.addEventListener('click', (e)=>{
      e.stopPropagation();
      if(caught) return;
      caught = true;
      const rect = hit.getBoundingClientRect();
      showFloatingMessage(rect.left+rect.width/2, rect.top+rect.height/2, pickRandom(STAR_MESSAGES));
      wrapEl.remove();
    });

    wrapEl.appendChild(core);
    layer.appendChild(wrapEl);
    setTimeout(()=> wrapEl.remove(), dur*1000 + 100);
    scheduleNext();
  }
  function scheduleNext(){
    setTimeout(spawnComet, randRange(2500, 5500));
  }
  scheduleNext();
}

/* ============================================================
   MODAL
   ============================================================ */
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
document.getElementById('modal-close').innerHTML = ICONS.x;

const modalData = {
  surat: {
    title: 'Untuk Gwen',
    card: true,
    body: `<p>Surat yang ditulis dari sudut pandang "aku", mungkin terdengar aneh, nyatanya Gwen itu nenangin dan anak yang sangat manis, cantik, dan sangat lucuu.</p>
<p>Mungkin beberapa kali dia tidak di mood yang baik tapi yakinlah dia itu penyayang. Gwen kurang bisa mengekspresikannya tapi cara dia mencoba mengekspresikan sayang dia itu sangat lucu dan nenangin hati.</p>
<p>Dari "aku" semoga Gwen ditempatkan di tempat yang baik, mau itu di lingkungan teman, keluarga, bahkan hubungan yang lebih serius, semoga selalu dirayakan walau sekecil apapun.</p>
<p>Gwen harus jadi pribadi yang baik dan lebih bahagia, Gwen layak dapetin itu. Pesan dari "aku": terus jadi orang yang baik, ga semua yang kita mau itu bakal terjadi tapi berusaha yang terbaik biar dapat yang kita mau.</p>
<p>Jangan takut untuk menangis, sosok "aku" mungkin bakal selalu ada disaat kamu nangis. Makasih ya sudah mau menemani "aku", mungkin ini sedikit effort buat nunjukin kalo "aku" juga sayang Gwen.</p>
<p style="margin-top:24px;font-style:italic;">— "aku"</p>`
  },
  // EDIT-ME: isi photoUrl dengan path foto kamu sendiri, misalnya 'assets/foto1.jpg'.
  // Kalau photoUrl dikosongkan/dihapus, otomatis balik ke kotak ikon placeholder.
  foto1:{
    title:"",
    photo:true,
    photoUrl:"assets/gw (1).jpg",
    body:"Foto ini cakep banget,dan kamu juga suka foto ini..."
  },

  foto2:{
    title:"",
    photo:true,
    photoUrl:"assets/gw (2).jpg",
    body:"Foto ini kata kamu lucuu karna pipi kamu gemeesss, ya aku juga liatnya gemasss"
  },

  foto3:{
    title:"",
    photo:true,
    photoUrl:"assets/gw (3).jpg",
    body:"Kalo foto ini aku yang suka hehehe, so hot btw..."
  },

  foto4:{
    title:"",
    photo:true,
    photoUrl:"assets/gw (4).jpg",
    body:"FOTO INII AKU SUKA RAMBUTT KAMUUU CANTIKK BANGETTT AKSKDKSDA"
  },

  foto5:{
    title:"",
    photo:true,
    photoUrl:"assets/gw (5).jpg",
    body:"Difoto ini jugaa kamuu cantikkk buangettttt"
  },
  // EDIT-ME: isi audioUrl dengan path lagu kamu, misalnya 'assets/lagu.mp3'.
  musik:{
    title:"Song",
    spotify:`<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6PqWdGIYq5xdLaa4zCZfRp?utm_source=generator&si=413b796de0ee4469" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    playlistTitle:"Our Playlist",
    playlist:`<iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/playlist/05FU54F9ZXb4ykrmcmgxVY?utm_source=generator&si=048267fc586f4dac"
        width="100%"
        height="352"
        frameborder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
    </iframe>`,
    body:"Lagu lagu yang selalu ngingetin aku sama kamu "
},
  kuis:{
    title:"Kuis Receh",
    quiz:true,
  },
};

function renderQuizStep(index, score){
  if(index >= QUIZ_QUESTIONS.length){
    modalContent.innerHTML = `
      <h2 class="display">Selesai! 🎉</h2>
      <p>Kamu benar ${score} dari ${QUIZ_QUESTIONS.length} soal!</p>
      <button class="ghost-btn" id="quiz-restart">Ulangi kuis</button>
    `;
    document.getElementById('quiz-restart').addEventListener('click', ()=> renderQuizStep(0, 0));
    return;
  }
  const q = QUIZ_QUESTIONS[index];
  modalContent.innerHTML = `
    <h2 class="display">Kuis Receh 💗</h2>
    <p class="quiz-progress">Soal ${index+1} dari ${QUIZ_QUESTIONS.length}</p>
    <p class="quiz-question">${q.question}</p>
    <div class="quiz-options">
      ${q.options.map((opt,i)=>`<button class="quiz-option" data-i="${i}">${opt}</button>`).join('')}
    </div>
  `;
  const optionEls = modalContent.querySelectorAll('.quiz-option');
  optionEls.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const chosen = parseInt(btn.dataset.i, 10);
      const isCorrect = chosen === q.correct;
      optionEls.forEach(b=>{ b.disabled = true; });
      btn.classList.add(isCorrect ? 'correct' : 'wrong');
      if(!isCorrect){
        optionEls[q.correct].classList.add('correct');
      }
      const feedback = document.createElement('p');
      feedback.className = 'quiz-feedback';
      feedback.textContent = isCorrect ? 'Yeay bener! 🎉' : 'Hehe salah, tapi gapapa~';
      modalContent.appendChild(feedback);

      const nextBtn = document.createElement('button');
      nextBtn.className = 'ghost-btn';
      nextBtn.textContent = index+1 < QUIZ_QUESTIONS.length ? 'Lanjut' : 'Lihat hasil';
      nextBtn.addEventListener('click', ()=> renderQuizStep(index+1, score + (isCorrect?1:0)));
      modalContent.appendChild(nextBtn);
    }, { once:true });
  });
}

function openModal(key){
  const d = modalData[key];
  if(!d) return;
  if(d.quiz){
    document.getElementById('modal-box').classList.remove('modal-letter');
    renderQuizStep(0, 0);
    modalOverlay.classList.add('show');
    return;
  }
  if(d.spotify){
    if(!bgAudio.paused){
      bgPausedForSpotify = true;
      fadeOutAudio(bgAudio);
    }
}
  document.getElementById('modal-box').classList.toggle('modal-letter', !!d.card);
  let html = `<h2 class="display">${d.title}</h2>`;
  if(d.card){
    html = `<div class="letter-seal"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg></div>` + html;
  }
  if(d.photo){
    html += d.photoUrl
  ? `
<div class="modal-photo-frame">
    <div class="modal-photo-blur" style="background-image:url('${d.photoUrl}')"></div>

    <img
        class="modal-photo"
        src="${d.photoUrl}"
        alt="${d.title}">
</div>
`
  : `<div class="modal-photo-placeholder">${ICONS.image}</div>`;
  }
  if(d.spotify){
    html += `
        <div class="spotify-player">
            ${d.spotify}
        </div>
    `;
    if(d.playlist){
      html += `
        <h3 class="spotify-subheading">${d.playlistTitle || 'Our Playlist'}</h3>
        <div class="spotify-player">
            ${d.playlist}
        </div>
      `;
    }
}else if(d.audio){
    html += `
        <audio controls class="modal-audio">
            <source src="${d.audio}">
        </audio>
    `;
}
  const bodyHtml = d.body && d.body.trim().startsWith('<') ? d.body : `<p>${d.body}</p>`;
  html += bodyHtml;
  modalContent.innerHTML = html;
  modalOverlay.classList.add('show');
}
let bgPausedForSpotify = false;
function closeModal(){

    modalOverlay.classList.remove("show");

    if(!muted && bgPausedForSpotify){
        fadeInAudio(bgAudio, 0.18);
    }
    bgPausedForSpotify = false;

}

document.getElementById("modal-close")
.addEventListener("click", closeModal);

modalOverlay.addEventListener("click",(e)=>{
    if(e.target===modalOverlay){
        closeModal();
    }
});

/* ============================================================
   SOUND TOGGLE — plays/pauses assets/lagu.mp3 as background music.
   Browsers block autoplay-with-sound, so playback only starts once the
   person taps this button (a real user gesture) — that's expected, not a bug.
   ============================================================ */
const soundToggle = document.getElementById('sound-toggle');
let muted = true;
soundToggle.innerHTML = ICONS.volumeX;
const bgAudio = new Audio('assets/Nadin Amizah - Semua Aku Dirayakan.mp3');
bgAudio.loop = true;
soundToggle.addEventListener('click', ()=>{
  muted = !muted;
  soundToggle.innerHTML = muted ? ICONS.volumeX : ICONS.volume2;
  if(muted){
    bgAudio.pause();
  } else {
    bgAudio.play().catch(()=>{ /* file belum ada / belum diganti, abaikan */ });
  }
});

function fadeOutAudio(audio, callback){
    clearInterval(audio._fadeInterval);

    audio._fadeInterval = setInterval(() => {
        if(audio.volume > 0.02){
            audio.volume = Math.max(0, audio.volume - 0.02);
        }else{
            clearInterval(audio._fadeInterval);
            audio.pause();
            if(callback) callback();
        }
    }, 40);
}

function fadeInAudio(audio, targetVolume = 0.2){
    clearInterval(audio._fadeInterval);

    audio.volume = 0;

    audio.play().catch(()=>{});

    audio._fadeInterval = setInterval(() => {
        if(audio.volume < targetVolume){
            audio.volume = Math.min(targetVolume, audio.volume + 0.02);
        }else{
            audio.volume = targetVolume;
            clearInterval(audio._fadeInterval);
        }
    }, 40);
}