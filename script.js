/* ============================================================
   CineDex — script.js
   JavaScript: Movie Data, Search, UI Interactions
   ============================================================ */

/* ── 1. Movie / Show Data ─────────────────────────────────── */
const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    year: 2024, rating: 8.6,
    genre: ["Sci-Fi", "Adventure"],
    runtime: "166 min",
    director: "Denis Villeneuve",
    description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    type: "movie", trending: true, topRated: false,
    budget: "$190M", boxoffice: "$711M",
    language: "English", country: "USA",
    releaseDate: "March 1, 2024",
    writers: ["Jon Spaihts", "Denis Villeneuve"],
    cast: [
      { name: "Timothée Chalamet", char: "Paul Atreides", photo: "https://image.tmdb.org/t/p/w185/BE2sdjpgsa2rNTFa66f7upkaOP.jpg" },
      { name: "Zendaya", char: "Chani", photo: "https://image.tmdb.org/t/p/w185/ggs9xnHmpSAFCHEBx3wZvMEo1TK.jpg" },
      { name: "Rebecca Ferguson", char: "Lady Jessica", photo: "https://image.tmdb.org/t/p/w185/lJloTOheuQSirSLXNA3JHsrMNfB.jpg" },
      { name: "Austin Butler", char: "Feyd-Rautha", photo: "https://image.tmdb.org/t/p/w185/0lhjI0FBNkn1rQ04yOTmJTeCuGm.jpg" }
    ],
    trailer: "https://www.youtube.com/embed/Way9Dexny3w",
    gallery: [
      "https://image.tmdb.org/t/p/w500/zm7MQGD3sFn2q7pWYS7Y3fMFSBl.jpg",
      "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      "https://image.tmdb.org/t/p/w500/4E8U3UATX0YGUJcKgUV3FQiQ0IQ.jpg"
    ]
  },
  {
    id: 2,
    title: "Oppenheimer",
    year: 2023, rating: 8.9,
    genre: ["Biography", "Drama"],
    runtime: "180 min",
    director: "Christopher Nolan",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    type: "movie", trending: true, topRated: true,
    budget: "$100M", boxoffice: "$952M",
    language: "English", country: "USA",
    releaseDate: "July 21, 2023",
    writers: ["Christopher Nolan"],
    cast: [
      { name: "Cillian Murphy", char: "J. Robert Oppenheimer", photo: "https://image.tmdb.org/t/p/w185/dm6V24NjjvjMiCtbMkc8Y2WPm2a.jpg" },
      { name: "Emily Blunt", char: "Katherine Oppenheimer", photo: "https://image.tmdb.org/t/p/w185/oqGLGJmEpROBsA59QdEaQGAJRd3.jpg" },
      { name: "Matt Damon", char: "Leslie Groves", photo: "https://image.tmdb.org/t/p/w185/ycM57gHGWqFiMHbvRLnTuWcSa7M.jpg" },
      { name: "Robert Downey Jr.", char: "Lewis Strauss", photo: "https://image.tmdb.org/t/p/w185/yTss4FMbBHHInBBCaT8O9AxibvC.jpg" }
    ],
    trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
    gallery: [
      "https://image.tmdb.org/t/p/w500/fnbR5LRGSsKt6mBbm3RBPaSi0aV.jpg",
      "https://image.tmdb.org/t/p/w500/nMKdUUepR0i5zn0y1T4CejMViWo.jpg"
    ]
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    year: 1994, rating: 9.3,
    genre: ["Drama"],
    runtime: "142 min",
    director: "Frank Darabont",
    description: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    type: "movie", trending: false, topRated: true,
    budget: "$25M", boxoffice: "$58.3M",
    language: "English", country: "USA",
    releaseDate: "September 23, 1994",
    writers: ["Frank Darabont", "Stephen King"],
    cast: [
      { name: "Tim Robbins", char: "Andy Dufresne", photo: "https://image.tmdb.org/t/p/w185/y0hCBQQW7bM3GcTEUMJe1hQD55u.jpg" },
      { name: "Morgan Freeman", char: "Ellis Boyd", photo: "https://image.tmdb.org/t/p/w185/oIciMBZOJNFUg1iqMWBzGSJOarZ.jpg" }
    ],
    trailer: "https://www.youtube.com/embed/PLl99DlL6b4",
    gallery: []
  },
  {
    id: 4,
    title: "Poor Things",
    year: 2023, rating: 8.0,
    genre: ["Comedy", "Drama"],
    runtime: "141 min",
    director: "Yorgos Lanthimos",
    description: "The incredible tale of Bella Baxter, brought back to life and eager to learn the wonders of the world.",
    poster: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXNbM8lGs1jrHHF.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    type: "movie", trending: true, topRated: false,
    budget: "$35M", boxoffice: "$117M",
    language: "English", country: "Ireland/UK",
    releaseDate: "December 8, 2023",
    writers: ["Tony McNamara"],
    cast: [
      { name: "Emma Stone", char: "Bella Baxter", photo: "https://image.tmdb.org/t/p/w185/p5uMLiV7O0yXVpD4C1eLzDwLBHj.jpg" },
      { name: "Mark Ruffalo", char: "Duncan Wedderburn", photo: "https://image.tmdb.org/t/p/w185/0sOTRMfCJIUeIGiCpHOoKSqEW5E.jpg" }
    ],
    trailer: "https://www.youtube.com/embed/RlbR5N6veqw",
    gallery: []
  },
  {
    id: 5,
    title: "Inception",
    year: 2010, rating: 8.8,
    genre: ["Sci-Fi", "Thriller"],
    runtime: "148 min",
    director: "Christopher Nolan",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a target's mind.",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    type: "movie", trending: false, topRated: true,
    budget: "$160M", boxoffice: "$836M",
    language: "English", country: "USA",
    releaseDate: "July 16, 2010",
    writers: ["Christopher Nolan"],
    cast: [
      { name: "Leonardo DiCaprio", char: "Dom Cobb", photo: "https://image.tmdb.org/t/p/w185/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg" },
      { name: "Joseph Gordon-Levitt", char: "Arthur", photo: "https://image.tmdb.org/t/p/w185/4U9G4YwTlIEbAymBaseltS0uLdm.jpg" }
    ],
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    gallery: []
  },
  {
    id: 6,
    title: "Interstellar",
    year: 2014, rating: 8.7,
    genre: ["Sci-Fi", "Drama"],
    runtime: "169 min",
    director: "Christopher Nolan",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/pbrkL804wGda2qi2hDmFBR4LQMB.jpg",
    type: "movie", trending: false, topRated: true,
    budget: "$165M", boxoffice: "$773M",
    language: "English", country: "USA",
    releaseDate: "November 7, 2014",
    writers: ["Christopher Nolan", "Jonathan Nolan"],
    cast: [
      { name: "Matthew McConaughey", char: "Cooper", photo: "https://image.tmdb.org/t/p/w185/wJiGedOCZhwMx9DezY8uwbNxmAY.jpg" },
      { name: "Anne Hathaway", char: "Brand", photo: "https://image.tmdb.org/t/p/w185/tLelKoPNiyAlxeHgDMgpNVycBsS.jpg" }
    ],
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    gallery: []
  },
  {
    id: 7,
    title: "Killers of the Flower Moon",
    year: 2023, rating: 7.7,
    genre: ["Crime", "Drama"],
    runtime: "206 min",
    director: "Martin Scorsese",
    description: "Members of the Osage tribe are murdered under mysterious circumstances in the 1920s, leading to the nascent FBI to investigate.",
    poster: "https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YLjFVofu5XRUM.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
    type: "movie", trending: true, topRated: false,
    budget: "$200M", boxoffice: "$157M",
    language: "English", country: "USA",
    releaseDate: "October 20, 2023",
    writers: ["Eric Roth"],
    cast: [
      { name: "Leonardo DiCaprio", char: "Ernest Burkhart", photo: "https://image.tmdb.org/t/p/w185/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg" },
      { name: "Robert De Niro", char: "William Hale", photo: "https://image.tmdb.org/t/p/w185/cT8htcckIuyI1Bquf4TFjv6BKHD.jpg" }
    ],
    trailer: "https://www.youtube.com/embed/EP34Yoxs3FQ",
    gallery: []
  },
  {
    id: 8,
    title: "The Dark Knight",
    year: 2008, rating: 9.0,
    genre: ["Action", "Crime"],
    runtime: "152 min",
    director: "Christopher Nolan",
    description: "When the Joker wreaks havoc on Gotham City, Batman must face one of the greatest psychological tests of his ability to fight injustice.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
    type: "movie", trending: false, topRated: true,
    budget: "$185M", boxoffice: "$1B",
    language: "English", country: "USA/UK",
    releaseDate: "July 18, 2008",
    writers: ["Jonathan Nolan", "Christopher Nolan"],
    cast: [
      { name: "Christian Bale", char: "Bruce Wayne", photo: "https://image.tmdb.org/t/p/w185/qCpZn2e3dimwbryLnqxZuI88PTi.jpg" },
      { name: "Heath Ledger", char: "The Joker", photo: "https://image.tmdb.org/t/p/w185/5Y9HnYYa9jF4NunY9lSgJGjSe8E.jpg" }
    ],
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    gallery: []
  }
];

const tvShows = [
  {
    id: 101,
    title: "Shogun",
    year: 2024, rating: 8.9,
    genre: ["Drama", "History"],
    runtime: "60 min/ep",
    description: "Set in feudal Japan, an English navigator rises to become a samurai lord.",
    poster: "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg4bCbRAjOEG.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/lnMFqPLTAUjRJkxFi1TkXgfixaL.jpg",
    type: "tv", trending: true, topRated: false
  },
  {
    id: 102,
    title: "The Bear",
    year: 2022, rating: 8.7,
    genre: ["Drama", "Comedy"],
    runtime: "30 min/ep",
    description: "A young chef from the fine-dining world returns home to run his family's beef sandwich shop.",
    poster: "https://image.tmdb.org/t/p/w500/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/pIkRyD18kl4FhoCNMGWLgkIL0DI.jpg",
    type: "tv", trending: true, topRated: false
  },
  {
    id: 103,
    title: "Fallout",
    year: 2024, rating: 8.5,
    genre: ["Sci-Fi", "Action"],
    runtime: "60 min/ep",
    description: "A woman emerges from her underground vault into a post-apocalyptic world.",
    poster: "https://image.tmdb.org/t/p/w500/AnsSKR52F0pOIELsKfbON1sYzLD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
    type: "tv", trending: true, topRated: false
  },
  {
    id: 104,
    title: "Severance",
    year: 2022, rating: 8.7,
    genre: ["Drama", "Thriller"],
    runtime: "50 min/ep",
    description: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives.",
    poster: "https://image.tmdb.org/t/p/w500/rqt2kFLnCCbD7VBRuEA2cTZ38J3.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4UxRdBSgqAqnmz70AHpBjRVDwDh.jpg",
    type: "tv", trending: false, topRated: true
  }
];

const celebrities = [
  {
    id: 201,
    name: "Cillian Murphy", profession: "Actor",
    photo: "https://image.tmdb.org/t/p/w185/dm6V24NjjvjMiCtbMkc8Y2WPm2a.jpg",
    films: "Oppenheimer, Peaky Blinders, Batman Begins"
  },
  {
    id: 202,
    name: "Emma Stone", profession: "Actress",
    photo: "https://image.tmdb.org/t/p/w185/p5uMLiV7O0yXVpD4C1eLzDwLBHj.jpg",
    films: "Poor Things, La La Land, The Favourite"
  },
  {
    id: 203,
    name: "Timothée Chalamet", profession: "Actor",
    photo: "https://image.tmdb.org/t/p/w185/BE2sdjpgsa2rNTFa66f7upkaOP.jpg",
    films: "Dune, Call Me By Your Name, Wonka"
  },
  {
    id: 204,
    name: "Zendaya", profession: "Actress",
    photo: "https://image.tmdb.org/t/p/w185/ggs9xnHmpSAFCHEBx3wZvMEo1TK.jpg",
    films: "Dune, Euphoria, Spider-Man"
  },
  {
    id: 205,
    name: "Denis Villeneuve", profession: "Director",
    photo: "https://image.tmdb.org/t/p/w185/4GFPMe7DRRvdBzU9RaMK28UlMz9.jpg",
    films: "Dune, Arrival, Blade Runner 2049"
  },
  {
    id: 206,
    name: "Christopher Nolan", profession: "Director",
    photo: "https://image.tmdb.org/t/p/w185/xuAIuYSmsUzKlUMigyf2KwbySeJ.jpg",
    films: "Oppenheimer, Inception, The Dark Knight"
  }
];

const upcoming = [
  {
    id: 301, title: "Deadpool & Wolverine",
    releaseDate: "July 26, 2024",
    daysLeft: 0, genre: ["Action", "Comedy"],
    poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    trailer: "#"
  },
  {
    id: 302, title: "Alien: Romulus",
    releaseDate: "August 16, 2024",
    daysLeft: 0, genre: ["Sci-Fi", "Horror"],
    poster: "https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
    trailer: "#"
  },
  {
    id: 303, title: "Gladiator II",
    releaseDate: "November 22, 2024",
    daysLeft: 0, genre: ["Action", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    trailer: "#"
  },
  {
    id: 304, title: "Wicked",
    releaseDate: "November 27, 2024",
    daysLeft: 0, genre: ["Musical", "Fantasy"],
    poster: "https://image.tmdb.org/t/p/w500/c1ZrSFMTCdDqtQX3gA3nvkVFaGd.jpg",
    trailer: "#"
  }
];

/* Hero movies (subset shown in hero rotator) */
const heroMovies = [movies[0], movies[1], movies[4], movies[7]];

/* ── 2. Utility Helpers ───────────────────────────────────── */
function starIcon(filled = true) {
  return filled ? '<i class="bi bi-star-fill"></i>' : '<i class="bi bi-star"></i>';
}

function genrePills(genres) {
  return genres.map(g => `<span class="genre-pill">${g}</span>`).join('');
}

function sanitize(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function showToast(message, icon = 'bi-check-circle-fill') {
  const t = document.getElementById('toastNotification');
  if (!t) return;
  t.innerHTML = `<i class="bi ${icon}"></i> ${sanitize(message)}`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

/* ── 3. Page Loader ───────────────────────────────────────── */
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 400);
  }
});

/* ── 4. Hero Rotator ──────────────────────────────────────── */
let heroIndex = 0;
let heroTimer = null;

function initHero() {
  const bg       = document.getElementById('heroBg');
  const title    = document.getElementById('heroTitle');
  const meta     = document.getElementById('heroMeta');
  const genres   = document.getElementById('heroGenres');
  const desc     = document.getElementById('heroDesc');
  const thumbs   = document.getElementById('heroThumbs');
  const watchBtn = document.getElementById('heroWatchBtn');
  const detailBtn= document.getElementById('heroDetailBtn');

  if (!bg) return;

  /* Build thumbnails */
  thumbs.innerHTML = heroMovies.map((m, i) => `
    <div class="hero-thumb ${i === 0 ? 'active' : ''}" data-idx="${i}" onclick="setHero(${i})">
      <img src="${m.poster}" alt="${sanitize(m.title)}" loading="lazy">
    </div>
  `).join('');

  function renderHero(idx) {
    const m = heroMovies[idx];
    bg.style.backgroundImage      = `url(${m.backdrop})`;
    title.textContent             = m.title;
    meta.innerHTML = `
      <span class="hero-rating">${starIcon()} ${m.rating}</span>
      <span class="hero-meta-tag"><i class="bi bi-calendar3"></i> ${m.year}</span>
      <span class="hero-meta-dot"></span>
      <span class="hero-meta-tag"><i class="bi bi-clock"></i> ${m.runtime}</span>
      <span class="hero-meta-dot"></span>
      <span class="hero-meta-tag">${m.director}</span>
    `;
    genres.innerHTML              = genrePills(m.genre);
    desc.textContent              = m.description;
    watchBtn.onclick              = () => { window.location.href = `movie.html?id=${m.id}`; };
    detailBtn.onclick             = () => { window.location.href = `movie.html?id=${m.id}`; };

    document.querySelectorAll('.hero-thumb').forEach((el, i) => {
      el.classList.toggle('active', i === idx);
    });
  }

  renderHero(0);
  heroTimer = setInterval(() => {
    heroIndex = (heroIndex + 1) % heroMovies.length;
    renderHero(heroIndex);
  }, 6000);
}

window.setHero = function(idx) {
  clearInterval(heroTimer);
  heroIndex = idx;
  const bg = document.getElementById('heroBg');
  if (!bg) return;

  /* Lightweight re-render by calling initHero render path inline */
  const m = heroMovies[idx];
  document.getElementById('heroBg').style.backgroundImage    = `url(${m.backdrop})`;
  document.getElementById('heroTitle').textContent            = m.title;
  document.getElementById('heroMeta').innerHTML = `
    <span class="hero-rating">${starIcon()} ${m.rating}</span>
    <span class="hero-meta-tag"><i class="bi bi-calendar3"></i> ${m.year}</span>
    <span class="hero-meta-dot"></span>
    <span class="hero-meta-tag"><i class="bi bi-clock"></i> ${m.runtime}</span>
    <span class="hero-meta-dot"></span>
    <span class="hero-meta-tag">${m.director}</span>
  `;
  document.getElementById('heroGenres').innerHTML = genrePills(m.genre);
  document.getElementById('heroDesc').textContent  = m.description;
  document.getElementById('heroWatchBtn').onclick  = () => { window.location.href = `movie.html?id=${m.id}`; };
  document.getElementById('heroDetailBtn').onclick = () => { window.location.href = `movie.html?id=${m.id}`; };

  document.querySelectorAll('.hero-thumb').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });

  heroTimer = setInterval(() => {
    heroIndex = (heroIndex + 1) % heroMovies.length;
    window.setHero(heroIndex);
  }, 6000);
};

/* ── 5. Render Trending Movies ────────────────────────────── */
/* ── 5b. Watchlist Storage ────────────────────────────────── */
const WATCHLIST_KEY = 'cdWatchlist';

function getWatchlist() {
  try { return JSON.parse(localStorage.getItem(WATCHLIST_KEY) || '[]'); }
  catch { return []; }
}
function isInWatchlist(id) {
  return getWatchlist().includes(id);
}
function toggleWatchlist(id) {
  let list = getWatchlist();
  const inList = list.includes(id);
  list = inList ? list.filter(x => x !== id) : [...list, id];
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(list));
  updateWatchlistCount();
  return !inList; // true if just added
}
function updateWatchlistCount() {
  const count = getWatchlist().length;
  document.querySelectorAll('[data-watchlist-count]').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}
function bookmarkBtnHTML(id) {
  const active = isInWatchlist(id);
  return `<button class="card-bookmark-btn ${active ? 'active' : ''}" data-bookmark-id="${id}"
            onclick="event.stopPropagation(); handleBookmarkClick(this, ${id})"
            aria-label="Toggle watchlist">
            <i class="bi ${active ? 'bi-bookmark-check-fill' : 'bi-bookmark-plus'}"></i>
          </button>`;
}
function handleBookmarkClick(btn, id) {
  const added = toggleWatchlist(id);
  btn.classList.toggle('active', added);
  btn.querySelector('i').className = added ? 'bi bi-bookmark-check-fill' : 'bi bi-bookmark-plus';
  showToast(added ? 'Added to Watchlist!' : 'Removed from Watchlist', added ? 'bi-bookmark-check-fill' : 'bi-bookmark-x');
}

function renderTrending() {
  const container = document.getElementById('trendingGrid');
  if (!container) return;

  const trending = movies.filter(m => m.trending);

  container.innerHTML = trending.map(m => `
    <div class="col-6 col-sm-4 col-lg-3">
      <div class="movie-card" onclick="window.location.href='movie.html?id=${m.id}'" role="button" tabindex="0" aria-label="${sanitize(m.title)}">
        <div class="movie-card-poster">
          <img src="${m.poster}" alt="${sanitize(m.title)}" loading="lazy">
          <div class="movie-card-rating">${starIcon()} ${m.rating}</div>
          ${bookmarkBtnHTML(m.id)}
          <div class="movie-card-overlay">
            <button class="movie-card-overlay-btn" onclick="event.stopPropagation(); window.location.href='movie.html?id=${m.id}'">
              <i class="bi bi-play-fill"></i> View Details
            </button>
          </div>
        </div>
        <div class="movie-card-body">
          <div class="movie-card-title">${sanitize(m.title)}</div>
          <div class="movie-card-sub">
            <span class="movie-card-year">${m.year}</span>
            <span class="movie-card-genre">${m.genre[0]}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── 6. Render TV Shows ───────────────────────────────────── */
function renderTVShows() {
  const container = document.getElementById('tvGrid');
  if (!container) return;

  container.innerHTML = tvShows.filter(s => s.trending).map(s => `
    <div class="col-6 col-sm-4 col-lg-3">
      <div class="movie-card" role="button" tabindex="0" aria-label="${sanitize(s.title)}"
           onclick="window.location.href='movie.html?id=${s.id}'">
        <div class="movie-card-poster">
          <img src="${s.poster}" alt="${sanitize(s.title)}" loading="lazy"
               onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'">
          <div class="movie-card-rating">${starIcon()} ${s.rating}</div>
          ${bookmarkBtnHTML(s.id)}
          <div class="movie-card-overlay">
            <button class="movie-card-overlay-btn" onclick="event.stopPropagation(); window.location.href='movie.html?id=${s.id}'">
              <i class="bi bi-play-fill"></i> View Details
            </button>
          </div>
        </div>
        <div class="movie-card-body">
          <div class="movie-card-title">${sanitize(s.title)}</div>
          <div class="movie-card-sub">
            <span class="movie-card-year">${s.year}</span>
            <span class="movie-card-genre">${s.genre[0]}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── 7. Render Top Rated (Horizontal Scroll) ──────────────── */
function renderTopRated() {
  const strip = document.getElementById('topRatedStrip');
  if (!strip) return;

  const top = movies.filter(m => m.topRated);

  strip.innerHTML = top.map(m => `
    <div class="h-movie-card" onclick="window.location.href='movie.html?id=${m.id}'" role="button" tabindex="0">
      <img class="h-movie-poster" src="${m.poster}" alt="${sanitize(m.title)}" loading="lazy">
      <div class="h-movie-info">
        <div class="h-movie-rating">${starIcon()} ${m.rating}</div>
        <div class="h-movie-title">${sanitize(m.title)}</div>
        <div class="h-movie-meta">${m.runtime} · ${m.genre[0]}</div>
      </div>
    </div>
  `).join('');
}

/* ── 8. Render Upcoming ───────────────────────────────────── */
function renderUpcoming() {
  const container = document.getElementById('upcomingGrid');
  if (!container) return;

  container.innerHTML = upcoming.map(u => `
    <div class="col-6 col-md-3">
      <div class="upcoming-card">
        <div class="upcoming-poster">
          <img src="${u.poster}" alt="${sanitize(u.title)}" loading="lazy">
          <div class="upcoming-poster-overlay"></div>
          <div class="upcoming-badge">COMING SOON</div>
          <div class="upcoming-play-btn"><i class="bi bi-play-fill"></i></div>
        </div>
        <div class="upcoming-body">
          <div class="upcoming-title">${sanitize(u.title)}</div>
          <div class="upcoming-date"><i class="bi bi-calendar-event"></i> ${u.releaseDate}</div>
          <div class="upcoming-genre">${u.genre.join(' / ')}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── 9. Render Celebrities ────────────────────────────────── */
function renderCelebrities() {
  const container = document.getElementById('celebGrid');
  if (!container) return;

  container.innerHTML = celebrities.map(c => `
    <div class="col-6 col-sm-4 col-md-2">
      <div class="celeb-card">
        <div class="celeb-photo">
          <img src="${c.photo}" alt="${sanitize(c.name)}" loading="lazy">
        </div>
        <div class="celeb-body">
          <div class="celeb-name">${sanitize(c.name)}</div>
          <div class="celeb-role">${sanitize(c.profession)}</div>
          <div class="celeb-films">${sanitize(c.films)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── 10. Search System ────────────────────────────────────── */
function initSearch() {
  const input    = document.getElementById('searchInput');
  const dropdown = document.getElementById('searchDropdown');
  if (!input || !dropdown) return;

  const allContent = [...movies, ...tvShows];

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    if (query.length < 2) { dropdown.classList.remove('show'); return; }

    const results = allContent.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.genre.some(g => g.toLowerCase().includes(query))
    ).slice(0, 6);

    if (results.length === 0) {
      dropdown.innerHTML = `<div class="search-result-item"><div class="search-result-info"><strong style="color:var(--text-muted)">No results found</strong></div></div>`;
    } else {
      dropdown.innerHTML = results.map(item => `
        <div class="search-result-item" onclick="window.location.href='movie.html?id=${item.id}'">
          <img src="${item.poster}" alt="${sanitize(item.title)}" loading="lazy">
          <div class="search-result-info">
            <strong>${sanitize(item.title)}</strong>
            <span>${item.year} · ${item.genre[0]} · ⭐ ${item.rating}</span>
          </div>
        </div>
      `).join('');
    }

    dropdown.classList.add('show');
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { dropdown.classList.remove('show'); input.blur(); }
  });
}

/* ── 11. Scroll Strip Arrows ──────────────────────────────── */
function initScrollArrows() {
  document.querySelectorAll('.scroll-strip-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
      const strip = arrow.closest('.scroll-strip-wrapper').querySelector('.scroll-strip');
      const dir   = arrow.classList.contains('left') ? -1 : 1;
      strip.scrollBy({ left: dir * 320, behavior: 'smooth' });
    });
  });
}

/* ── 12. Scroll to Top Button ─────────────────────────────── */
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── 13. Mobile Nav Drawer ────────────────────────────────── */
function initMobileNav() {
  const hamburger = document.getElementById('navHamburger');
  const drawer    = document.getElementById('mobileDrawer');
  if (!hamburger || !drawer) return;

  hamburger.addEventListener('click', () => {
    drawer.classList.toggle('open');
    hamburger.innerHTML = drawer.classList.contains('open')
      ? '<i class="bi bi-x-lg"></i>'
      : '<i class="bi bi-list"></i>';
  });
}

/* ── 13b. Categories Dropdown (click-to-open, mobile-friendly) ── */
function toggleCategoriesDropdown(e) {
  e.stopPropagation();
  const dropdown = document.getElementById('categoriesDropdown');
  if (!dropdown) return;
  dropdown.classList.toggle('open');
}
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('categoriesDropdown');
  if (dropdown && !dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});

/* ── 13c. Sign In Modal ───────────────────────────────────── */
function initSignIn() {
  document.querySelectorAll('.btn-signin').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalEl = document.getElementById('signInModal');
      if (!modalEl) return;
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    });
  });
}

/* ── 14. Watchlist Button ─────────────────────────────────── */
function initWatchlist() {
  document.querySelectorAll('[data-watchlist]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = 'viewall.html?section=watchlist';
    });
  });
  updateWatchlistCount();
}

/* ── 15. Movie Detail Page ────────────────────────────────── */
function initDetailPage() {
  const container = document.getElementById('movieDetailContainer');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('id'));
  const movie  = [...movies, ...tvShows].find(m => m.id === id);

  if (!movie) {
    container.innerHTML = `
      <div class="text-center py-5">
        <h2 class="text-accent" style="font-family:var(--font-display);font-size:3rem;">404</h2>
        <p class="text-muted-alt">Movie not found.</p>
        <a href="index.html" class="btn-primary-cta d-inline-flex mt-3">← Back to Home</a>
      </div>`;
    return;
  }

  /* Set page title */
  document.title = `${movie.title} — CineDex`;

  /* Hero */
  const heroEl = document.getElementById('detailHeroBg');
  if (heroEl) heroEl.style.backgroundImage = `url(${movie.backdrop || movie.poster})`;

  /* Poster + basic info */
  container.innerHTML = buildDetailHTML(movie);

  /* Wire up Add to Watchlist button */
  const wlBtn = document.getElementById('detailWatchlistBtn');
  if (wlBtn) {
    const setState = () => {
      const active = isInWatchlist(movie.id);
      wlBtn.classList.toggle('active', active);
      wlBtn.innerHTML = active
        ? '<i class="bi bi-bookmark-check-fill"></i> In Watchlist'
        : '<i class="bi bi-bookmark-plus"></i> Add to Watchlist';
    };
    setState();
    wlBtn.addEventListener('click', () => {
      toggleWatchlist(movie.id);
      setState();
      showToast(isInWatchlist(movie.id) ? 'Added to Watchlist!' : 'Removed from Watchlist',
                 isInWatchlist(movie.id) ? 'bi-bookmark-check-fill' : 'bi-bookmark-x');
    });
  }

  /* Render similar movies */
  const simGrid = document.getElementById('similarGrid');
  if (simGrid) {
    const similar = movies.filter(m => m.id !== movie.id && m.genre.some(g => movie.genre.includes(g))).slice(0, 4);
    simGrid.innerHTML = similar.map(m => `
      <div class="col-6 col-md-3">
        <div class="movie-card" onclick="window.location.href='movie.html?id=${m.id}'" role="button">
          <div class="movie-card-poster">
            <img src="${m.poster}" alt="${sanitize(m.title)}" loading="lazy">
            <div class="movie-card-rating">${starIcon()} ${m.rating}</div>
          </div>
          <div class="movie-card-body">
            <div class="movie-card-title">${sanitize(m.title)}</div>
            <div class="movie-card-sub">
              <span class="movie-card-year">${m.year}</span>
              <span class="movie-card-genre">${m.genre[0]}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function buildDetailHTML(m) {
  const castHTML = (m.cast || []).map(c => `
    <div class="cast-item">
      <div class="cast-photo">
        <img src="${c.photo}" alt="${sanitize(c.name)}" loading="lazy" onerror="this.src='https://via.placeholder.com/80x80?text=?'">
      </div>
      <div class="cast-actor">${sanitize(c.name)}</div>
      <div class="cast-char">${sanitize(c.char)}</div>
    </div>
  `).join('');

  const galleryHTML = (m.gallery || []).length > 0
    ? `<div class="gallery-grid">
        ${m.gallery.map(src => `
          <div class="gallery-item">
            <img src="${src}" alt="Gallery image" loading="lazy">
          </div>`).join('')}
       </div>`
    : '<p class="text-muted-alt" style="font-size:13px">No gallery images available.</p>';

  const trailerHTML = m.trailer
    ? `<div class="trailer-wrapper"><iframe src="${m.trailer}" allowfullscreen loading="lazy" title="Official Trailer"></iframe></div>`
    : '<p class="text-muted-alt" style="font-size:13px">No trailer available.</p>';

  return `
    <!-- Storyline -->
    <div class="detail-storyline">${sanitize(m.description)}</div>

    <!-- Meta grid -->
    <div class="detail-section-title">Details</div>
    <div class="detail-meta-grid">
      ${m.director     ? `<div class="detail-meta-item"><div class="detail-meta-label">Director</div><div class="detail-meta-value">${sanitize(m.director)}</div></div>` : ''}
      ${m.writers      ? `<div class="detail-meta-item"><div class="detail-meta-label">Writers</div><div class="detail-meta-value">${m.writers.map(sanitize).join(', ')}</div></div>` : ''}
      ${m.runtime      ? `<div class="detail-meta-item"><div class="detail-meta-label">Runtime</div><div class="detail-meta-value">${sanitize(m.runtime)}</div></div>` : ''}
      ${m.releaseDate  ? `<div class="detail-meta-item"><div class="detail-meta-label">Release Date</div><div class="detail-meta-value">${sanitize(m.releaseDate)}</div></div>` : ''}
      ${m.language     ? `<div class="detail-meta-item"><div class="detail-meta-label">Language</div><div class="detail-meta-value">${sanitize(m.language)}</div></div>` : ''}
      ${m.country      ? `<div class="detail-meta-item"><div class="detail-meta-label">Country</div><div class="detail-meta-value">${sanitize(m.country)}</div></div>` : ''}
      ${m.budget       ? `<div class="detail-meta-item"><div class="detail-meta-label">Budget</div><div class="detail-meta-value">${sanitize(m.budget)}</div></div>` : ''}
      ${m.boxoffice    ? `<div class="detail-meta-item"><div class="detail-meta-label">Box Office</div><div class="detail-meta-value">${sanitize(m.boxoffice)}</div></div>` : ''}
    </div>

    <!-- Cast -->
    ${(m.cast || []).length > 0 ? `
    <div class="detail-section-title">Cast</div>
    <div class="cast-row mb-5">${castHTML}</div>
    ` : ''}

    <!-- Trailer -->
    <div class="detail-section-title">Official Trailer</div>
    ${trailerHTML}

    <!-- Gallery -->
    <div class="detail-section-title">Image Gallery</div>
    ${galleryHTML}
  `;
}

/* ── 16. Init ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  renderTrending();
  renderTVShows();
  renderTopRated();
  renderUpcoming();
  renderCelebrities();
  initSearch();
  initScrollArrows();
  initScrollTop();
  initMobileNav();
  initWatchlist();
  initSignIn();
  initDetailPage();
});

/* ── 17. Expose data globally for movie.html hydration ────── */
window._cdMovies = movies;
window._cdTV     = tvShows;