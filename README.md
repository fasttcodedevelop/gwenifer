# Untuk Gwen — Panduan Edit

Semua yang perlu kamu ganti ada di 3 file: `script.js` (isi/konten & foto), `style.css` (warna/tampilan), `index.html` (teks statis).
Taruh semua foto/lagu kamu di folder **`assets/`** (sejajar dengan `index.html`).

---

## 1. Foto puzzle (Scene 2)
File: `script.js`, paling atas.
```js
const PUZZLE_PHOTO_URL = 'assets/puzzle.jpg';
```
Ganti path-nya ke foto kamu, misal `assets/kalian-berdua.jpg`. Foto otomatis di-crop rapi (cover) berapa pun rasionya. Kalau file belum ada, puzzle jatuh ke gradient polos — jadi tidak akan error.

## 2. Bunga di loading screen
File: `script.js`, tepat di bawah `PUZZLE_PHOTO_URL`.
```js
const LOADING_FLOWER_URL = 'assets/bunga1.png';
```
Ganti ke foto/gambar bunga kamu sendiri. Ini yang muncul berputar pelan di layar loading, dikelilingi partikel sparkle kecil (partikelnya generik, warnanya ikut palet pink kamu, tidak perlu diganti).

## 3. Bunga (heart formation + efek transisi antar scene)
File: `script.js`, di bawah `LOADING_FLOWER_URL`.
```js
const FLOWER_PHOTOS = [
  'assets/bunga1.png',
  'assets/bunga2.png',
  'assets/bunga3.png',
  'assets/bunga4.png',
];
```
Sekarang isinya 4 ilustrasi bunga simpel yang sudah aku buatkan (lokal, tidak ambil dari internet lagi) sebagai placeholder. Ganti isi array ini dengan **foto bunga aslimu** kapan saja — boleh JPG/PNG/WEBP, boleh 1 foto atau lebih (dipilih acak tiap muncul). Ukuran ideal: persegi, di bawah ±300KB per file supaya transisinya tetap ringan.

## 4. Petal untuk efek "meledak" (puzzle berhasil)
File: `script.js`, di bawah `FLOWER_PHOTOS`.
```js
const PARTICLE_PETAL_PHOTOS = [
  'assets/particle-petal-1.png',
  'assets/particle-petal-2.png',
];
```
Ini kelopak memanjang (bentuk lancip) yang beterbangan meledak keluar pas puzzle berhasil disusun, seperti efek "hore". Aku sudah buatkan 2 versi placeholder dengan gradasi warna pink/maroon sendiri — ganti dengan potongan foto kelopak bungamu (PNG latar transparan hasilnya paling bagus).

## 5. Foto di kartu orbit (Foto 1 / Foto 2 / Foto 3)
File: `script.js`, cari `modalData`.
```js
foto1: { title:'Foto 1', photo:true, photoUrl:'assets/foto1.jpg', body:'Tulis cerita di sini.' },
foto2: { title:'Foto 2', photo:true, photoUrl:'assets/foto2.jpg', body:'...' },
foto3: { title:'Foto 3', photo:true, photoUrl:'assets/foto3.jpg', body:'...' },
```
Isi `photoUrl` dengan path foto kamu, dan `body` dengan caption/ceritanya. Kosongkan `photoUrl` (`''`) kalau mau balik ke kotak placeholder.

## 6. Lagu
File: `script.js`, masih di `modalData`.
```js
musik: {
  title: 'Lagu untuk Gwen',
  audio: true,
  audioUrl: 'assets/lagu.mp3',
  body: 'Lagu ini yang selalu Dika inget kalau lagi mikirin kamu.'
},
```
Taruh file lagu kamu sebagai `assets/lagu.mp3`. Item "Musik" di orbit menampilkan card berisi audio player. Tombol speaker di pojok kanan bawah scene orbit juga memutar lagu yang sama sebagai musik latar (baru bunyi setelah Gwen pencet sendiri — browser memang selalu blokir autoplay bersuara).

## 7. Isi surat
File: `script.js`, bagian `modalData.surat`.
```js
surat: {
  title: 'Untuk Gwen',
  card: true,
  body: `Tulis suratmu di sini...`
},
```
Card surat punya bingkai + segel hati sendiri (dibuat dari CSS, bukan aset dari mana-mana), tinggal ganti teksnya saja.

## 8. Teks lain-lain (judul, nama, instruksi)
File: `index.html` — cari teks seperti `untuk Gwen`, `dari Dika`, `Susun potongannya untuk membuka`, `Dunia kecil kita`, dll, langsung edit di situ.

## 9. Warna
File: `style.css`, paling atas di `:root`:
```css
--maroon-deep:#6e2338;
--maroon-mid:#a13952;
--pink-soft:#f3c6d3;
--pink-warm:#e88fa7;
--cream:#fdf1ec;
--gold:#d9b98a;
```
Ganti kode hex-nya kalau mau nuansa pink/putihnya beda, semua elemen ikut berubah otomatis karena pakai variabel ini.

## 10. Item di orbit (nambah/kurang kartu kenangan)
File: `script.js`, cari `const defs = [...]` di dalam `buildOrbit()`. Tiap baris = satu item yang muter di orbit. Tambah baris baru dengan `key` baru, lalu tambahkan juga entrinya di `modalData` supaya pas diklik ada isinya.

## 11. Atur jumlah & ukuran bunga transisi (kalau kegedean/kebanyakan/lag)
File: `script.js`, di dalam fungsi `switchScene`:
```js
let cell = 230;              // jarak antar bunga — makin KECIL, makin BANYAK & rapat bunganya
...
while(cols*rows > 90){       // batas maksimal jumlah bunga — naikkan biar boleh lebih banyak
  cell += 20;
  ...
}
...
const size = cell * randRange(2.1,2.7); // ukuran bunga relatif ke jarak grid
```
- Mau bunga **lebih besar/menutup penuh**: naikkan angka di `randRange(2.1,2.7)`, misal `randRange(2.6,3.2)`.
- Mau bunga **lebih kecil**: turunkan angka itu (jangan di bawah ±1.4, nanti mulai ada celah).
- Mau **lebih banyak/rapat**: turunkan `cell` (misal ke `150`) dan naikkan batas `90` (misal ke `160`).
- Kalau di HP terasa berat/lag: naikkan `cell` lagi atau turunkan batas `90` supaya jumlah elemennya lebih sedikit.

## 12. Kecepatan transisi & animasi (kalau kecepetan/terlalu lambat)
Semua durasi animasi pakai satuan **milidetik** (1000ms = 1 detik). Beberapa yang paling sering ingin diubah:

**Transisi antar scene (curtain bunga masuk/keluar)** — di `switchScene`:
```js
const delay = randRange(0,420);
const dur = randRange(1650,2100);   // durasi tiap bunga meluncur masuk/keluar
...
const holdDuration = 420;           // jeda hening di antara "masuk penuh" dan "mulai keluar"
```
Naikkan angka-angka ini kalau masih berasa cepat, turunkan kalau ingin lebih cepat.

**Heart formation (bunga mengumpul jadi hati)** — di `startHeartFormation`:
```js
f.style.transition = 'opacity .7s ease, transform 1300ms ...';  // durasi bunga muncul dari acak
...
}, 1900);   // jeda sebelum bunga mulai terbang ke bentuk hati
f.style.transition = 'left 2.6s ..., top 2.6s ...';              // kecepatan terbang ke bentuk hati
...
}, 4200);   // kapan teks "untuk Gwen" muncul
}, 7300);   // kapan pindah ke scene orbit
```

**Efek "hore" petal-burst (puzzle selesai)** — di `petalBurst` dan pemanggilnya:
```js
petalBurst(rect.left + rect.width/2, rect.top + rect.height/2, { count:40 });
setTimeout(()=> switchScene('scene-heart', startHeartFormation), 1700); // jeda sebelum pindah scene
```
Naikkan `1700` kalau burst-nya kepotong sebelum selesai keliatan, turunkan kalau ingin lebih cepat pindah.

---

### Catatan
- Semua ilustrasi bunga & elemen visual di project ini dibuat dari nol (kode/CSS/SVG/gambar asli), bukan aset yang diambil dari situs lain — jadi aman untuk dipakai/diedit sebebasnya.
- Kalau nama file foto/lagu kamu beda, tinggal samakan path-nya di `script.js` (case-sensitive di beberapa hosting, jadi usahakan nama file huruf kecil semua tanpa spasi).

