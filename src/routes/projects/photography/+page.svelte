<script>
  import { reveal } from '$lib/actions/reveal.js';

  // ── ADD YOUR PHOTOS ───────────────────────────────────────────────────────
  // Fill in locations as you go — leave '' if unknown
  // Photos live in /static/images/photography/1.jpg … 70.jpg
  // ─────────────────────────────────────────────────────────────────────────
  const locations = Array.from({ length: 121 }, () => '');
locations[0]  = 'Santa Barbara, USA';  // 1.jpg
locations[1]  = 'Tucheng, Taiwan';     // 2.jpg
locations[2]  = 'Cebu, Philippines';     // 3.jpg
locations[3]  = 'Taipei, Taiwan';  // 4.jpg
locations[4]  = 'Taipei, Taiwan';  // 5.jpg
locations[5]  = 'Hualien, Taiwan';  // 6.jpg
locations[6]  = 'Tuncheng, Taiwan';  // 7.jpg
locations[7]  = 'Cebu, Philippines';  // 8.jpg
locations[8]  = 'Northern Coast, Taiwan';  // 9.jpg
locations[9]  = 'Tucheng, Taiwan';  // 10.jpg
locations[10] = 'Cebu, Philippines';  // 11.jpg
locations[11] = 'Los Angeles, USA';  // 12.jpg
locations[12] = 'Taitung, Taiwan';  // 13.jpg
locations[13] = 'Los Angeles, USA';  // 14.jpg
locations[14] = 'Los Angeles, USA';  // 15.jpg
locations[15] = 'Los Angeles, USA';  // 16.jpg
locations[16] = 'Los Angeles, USA';  // 17.jpg
locations[17] = 'Los Angeles, USA';  // 18.jpg
locations[18] = 'Los Angeles, USA';  // 19.jpg
locations[19] = 'Los Angeles, USA';  // 20.jpg
locations[20] = 'Los Angeles, USA';  // 21.jpg
locations[21] = 'Los Angeles, USA';  // 22.jpg
locations[22] = 'Los Angeles, USA';  // 23.jpg
locations[23] = 'Los Angeles, USA';  // 24.jpg
locations[24] = 'Los Angeles, USA';  // 25.jpg
locations[25] = 'Los Angeles, USA';  // 26.jpg
locations[26] = 'Los Angeles, USA';  // 27.jpg
locations[27] = 'Los Angeles, USA';  // 28.jpg
locations[28] = 'Los Angeles, USA';  // 29.jpg
locations[29] = 'Los Angeles, USA';  // 30.jpg
locations[30] = 'Los Angeles, USA';  // 31.jpg
locations[31] = 'Los Angeles, USA';  // 32.jpg
locations[32] = 'Los Angeles, USA';  // 33.jpg
locations[33] = 'Los Angeles, USA';  // 34.jpg
locations[34] = 'Tamsui, Taiwan';  // 35.jpg
locations[35] = 'Hualien, Taiwan';  // 36.jpg
locations[36] = 'Taipei, Taiwan';  // 37.jpg
locations[37] = 'Taipei, Taiwan';  // 38.jpg
locations[38] = 'Taipei, Taiwan';  // 39.jpg
locations[39] = 'Taipei, Taiwan';  // 40.jpg
locations[40] = 'Taipei, Taiwan';  // 41.jpg
locations[41] = 'Taipei, Taiwan';  // 42.jpg
locations[42] = 'Taipei, Taiwan';  // 43.jpg
locations[43] = 'Taipei, Taiwan';  // 44.jpg
locations[44] = 'Taipei, Taiwan';  // 45.jpg
locations[45] = 'Taipei, Taiwan';  // 46.jpg
locations[46] = 'Taipei, Taiwan';  // 47.jpg
locations[47] = 'Chicago, USA';  // 48.jpg
locations[48] = 'Sanzhi, Taiwan';  // 49.jpg
locations[49] = 'Taichung, Taiwan';  // 50.jpg
locations[50] = 'Taichung, Taiwan';  // 51.jpg
locations[51] = 'Taichung, Taiwan';  // 52.jpg
locations[52] = 'Taichung, Taiwan';  // 53.jpg
locations[53] = 'Northern Coast, Taiwan';  // 54.jpg
locations[54] = 'Chicago, USA';  // 55.jpg
locations[55] = 'Northern Coast, Taiwan';  // 56.jpg
locations[56] = 'Northern Coast, Taiwan';  // 57.jpg
locations[57] = 'Yangmingshan, Taiwan';  // 58.jpg
locations[58] = 'Yangmingshan, Taiwan';  // 59.jpg
locations[59] = 'Tamsui, Taiwan';  // 60.jpg
locations[60] = 'New Taipei City, Taiwan';  // 61.jpg
locations[61] = 'New Taipei City, Taiwan';  // 62.jpg
locations[62] = 'Kinmen, Taiwan';  // 63.jpg
locations[63] = 'Kinmen, Taiwan';  // 64.jpg
locations[64] = 'Kinmen, Taiwan';  // 65.jpg
locations[65] = 'Kinmen, Taiwan';  // 66.jpg
locations[66] = 'Kinmen, Taiwan';  // 67.jpg
locations[67] = 'Kinmen, Taiwan';  // 68.jpg
locations[68] = 'Kinmen, Taiwan';  // 69.jpg
locations[69] = 'Kinmen, Taiwan';  // 70.jpg
locations[70] = 'Kinmen, Taiwan';  // 71.jpg
locations[71] = 'Monument Valley, USA';  // 72.jpg
locations[72] = 'The Arches National Park, USA';  // 73.jpg
locations[73] = 'The Arches National Park, USA';  // 74.jpg
locations[74] = 'The Arches National Park, USA';  // 75.jpg
locations[75] = 'USA';  // 76.jpg
locations[76] = 'USA';  // 77.jpg
locations[77] = 'Colorado River, USA';  // 78.jpg
locations[78] = 'Las Vegas, USA';  // 79.jpg
locations[79] = 'Las Vegas, USA';  // 80.jpg
locations[80] = 'Area 51, USA';  // 81.jpg
locations[81] = 'Death Valley, USA';  // 82.jpg
locations[82] = 'Death Valley, USA';  // 83.jpg
locations[83] = 'Death Valley, USA';  // 84.jpg
locations[84] = 'Death Valley, USA';  // 85.jpg
locations[85] = 'Death Valley, USA';  // 86.jpg
locations[86] = 'Death Valley, USA';  // 87.jpg
locations[87] = 'Death Valley, USA';  // 88.jpg
locations[88] = 'Yosemite National Park, USA';  // 89.jpg
locations[89] = 'Yosemite National Park, USA';  // 90.jpg
locations[90] = 'Kamikōchi , Japan';  // 91.jpg
locations[91] = 'Kurobe Damu, Japan';  // 92.jpg
locations[92] = 'Kenroku-en, Japan';  // 93.jpg
locations[93] = 'Kenroku-en, Japan';  // 94.jpg
locations[94] = 'Kenroku-en, Japan';  // 95.jpg
locations[95] = 'Nagoya, Japan';  // 96.jpg
locations[96] = 'Nagoya, Japan';  // 97.jpg
locations[97] = 'Nagoya, Japan';  // 98.jpg
locations[98] = 'Arashiyama, Japan';  // 99.jpg
locations[99] = 'Otagi Nenbutsu-ji, Japan';  // 100.jpg
locations[100] = 'Otagi Nenbutsu-ji, Japan';  // 101.jpg
locations[101] = 'Otagi Nenbutsu-ji, Japan';  // 102.jpg
locations[102] = 'Osaka, Japan';  // 103.jpg
locations[103] = 'Osaka, Japan';  // 104.jpg
locations[104] = 'Wat Rong Khun, Thailand';  // 105.jpg
locations[105] = 'Millenium Park, USA';  // 106.jpg
locations[106] = 'Marina City, USA';  // 107.jpg
locations[107] = 'Chicago, USA';  // 108.jpg
locations[108] = 'River City, USA';  // 109.jpg
locations[109] = 'Chicago, USA';  // 110.jpg
locations[110] = 'Chicago, USA';  // 111.jpg
locations[111] = 'Chicago, USA';  // 112.jpg
locations[112] = 'Chicago, USA';  // 113.jpg
locations[113] = 'Chicago, USA';  // 114.jpg
locations[114] = 'Chicago, USA';  // 115.jpg
locations[115] = 'Hualien, Taiwan';  // 116.jpg
locations[116] = 'Hualien, Taiwan';  // 117.jpg
locations[117] = 'Santa Barbara, USA';  // 118.jpg
locations[118] = 'Iceland';  // 119.jpg
locations[119] = 'Iceland';  // 120.jpg
locations[120] = 'Taipei, Taiwan';  // 121.jpg



// add as you remember them
  // Base photo array
  const base = Array.from({ length: 121 }, (_, i) => ({
    src: `/images/photography/${i + 1}.jpg`,
    alt: `Texture ${i + 1}`,
    location: locations[i] ?? '',
  }));

  // ── Fisher-Yates shuffle ──────────────────────────────────────────────────
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── State ─────────────────────────────────────────────────────────────────
  // 'context'  = masonry, loose spacing, locations visible
  // 'surface'  = masonry, tight spacing, locations hidden
  let view    = 'context';          // ← default view
  let photos  = shuffle(base);      // start with a random arrangement
  let lightbox = null;              // null = closed, photo object = open

  function doShuffle() {
    photos = shuffle(photos);
  }

  // Lightbox keyboard close
  function onKey(e) {
    if (e.key === 'Escape') lightbox = null;
  }

  // Navigate lightbox prev / next
  function prev() {
    const i = photos.indexOf(lightbox);
    lightbox = photos[(i - 1 + photos.length) % photos.length];
  }
  function next() {
    const i = photos.indexOf(lightbox);
    lightbox = photos[(i + 1) % photos.length];
  }
</script>

<svelte:head>
  <title>Photography — RJC</title>
</svelte:head>

<svelte:window on:keydown={onKey} />

<!-- ═══════════════════════════════════
     PAGE
════════════════════════════════════ -->
<div class="container photo-page">

  <!-- Header -->
  <header class="photo-header fade-up" use:reveal>
    <p class="label">Photography</p>
    <h1 class="display">Textures of Time</h1>
    <p class="photo-header__sub">
      A personal black-and-white archive of surfaces gathered across geographies and time.
      Sea, windows, mountains, walls, fabric, skin: textures marked by moments passing and what remains.
      Shot on film and digital, the world rendered as a continuous material field, beyond borders, beyond categories.
      <!-- ── Edit this description ── -->
    </p>
  </header>

  <!-- Controls -->
  <div class="controls fade-up" use:reveal style="transition-delay: 80ms">

    <!-- Context / Surface toggle -->
    <div class="view-toggle">
      <button
        class="toggle-btn label"
        class:active={view === 'context'}
        on:click={() => view = 'context'}
      >Context</button>
      <button
        class="toggle-btn label"
        class:active={view === 'surface'}
        on:click={() => view = 'surface'}
      >Surface</button>
    </div>

    <!-- Shuffle — stays in current view -->
    <button class="shuffle-btn label" on:click={doShuffle}>
      Shuffle
    </button>

  </div>

  <!-- ═══════════════════════════════
       MASONRY GRID
       CSS columns — photos keep natural aspect ratio
  ════════════════════════════════ -->
  <div
    class="masonry"
    class:context={view === 'context'}
    class:surface={view === 'surface'}
  >
    {#each photos as photo (photo.src)}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="photo-item"
        on:click={() => lightbox = photo}
        role="button"
        tabindex="0"
        on:keydown={e => e.key === 'Enter' && (lightbox = photo)}
      >
        <div class="photo-item__frame">
          <img
            src={photo.src}
            alt={photo.alt}
            class="photo-item__img"
            loading="lazy"
          />
          <div class="photo-item__grain" aria-hidden="true"></div>
        </div>

        <!-- Location fades out in surface mode -->
        {#if photo.location}
          <p class="photo-item__location label">{photo.location}</p>
        {/if}
      </div>
    {/each}
  </div>

</div>

<!-- ═══════════════════════════════════
     LIGHTBOX
════════════════════════════════════ -->
{#if lightbox}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="lb-overlay" on:click={() => lightbox = null} role="dialog" aria-modal="true">

    <button class="lb-close label" on:click={() => lightbox = null}>✕</button>

    <!-- Prev / Next -->
    <button class="lb-nav lb-nav--prev" on:click|stopPropagation={prev}>←</button>
    <button class="lb-nav lb-nav--next" on:click|stopPropagation={next}>→</button>

    <!-- Image -->
    <div class="lb-inner" on:click|stopPropagation>
      <img
        src={lightbox.src}
        alt={lightbox.alt}
        class="lb-img"
      />
      {#if lightbox.location}
        <p class="lb-location label">{lightbox.location}</p>
      {/if}
    </div>

  </div>
{/if}

<style>
  /* ── Page ── */
  .photo-page {
    padding-top: var(--space-lg);
    padding-bottom: var(--space-xl);
  }

  /* ── Header ── */
  .photo-header {
    margin-bottom: var(--space-md);
    max-width: 560px;
  }

  .photo-header .label { margin-bottom: 1rem; }

  .photo-header__sub {
    margin-top: 1.25rem;
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.75;
  }

  /* ── Controls row ── */
  .controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: var(--space-md);
    flex-wrap: wrap;
  }

  .view-toggle {
    display: flex;
    gap: 0.4rem;
  }

  .toggle-btn {
    padding: 0.35rem 0.9rem;
    border: 1px solid var(--border-strong);
    background: none;
    cursor: pointer;
    color: var(--text-secondary);
    border-radius: 1px;
    transition: all var(--duration-fast) ease;
    font-family: var(--font-body);
  }

  .toggle-btn:hover {
    border-color: var(--text-primary);
    color: var(--text-primary);
  }

  .toggle-btn.active {
    background: var(--text-primary);
    color: var(--bg);
    border-color: var(--text-primary);
  }

  /* Shuffle button — slightly different style to feel like an action not a state */
  .shuffle-btn {

    padding: 0.35rem 0.9rem;
    border: 1px dashed var(--border-strong);  /* ── dashed = action, not state ── */
    border-color: var(--accent-light);
    background: none;
    cursor: pointer;
    color: var(--accent);
    border-radius: 1px;
    transition: all var(--duration-fast) ease;
    font-family: var(--font-body);
  }

  .shuffle-btn:hover {
    border-color: var(--text-primary);
    color: var(--text-primary);
    border-style: solid;
  }

  /* ══════════════════════════════════
     MASONRY — CSS columns
     Photos keep their natural ratio,
     packed into columns like a contact sheet
  ══════════════════════════════════ */
  .masonry {
    transition: column-gap 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                column-count 0.45s ease;
  }

  /* CONTEXT — breathing room, locations visible */
  .masonry.context {
    columns: 3 220px;   /* ── 3 cols min 220px wide — adjust to taste ── */
    column-gap: 1.5rem;
  }

  /* SURFACE — tighter pack, locations hidden */
  .masonry.surface {
    columns: 4 160px;   /* ── 4 cols in surface mode — adjust ── */
    column-gap: 0px;    /* ── near-flush gap ── */
  }

  /* ── Photo item ── */
  .photo-item {
    break-inside: avoid;
    cursor: zoom-in;
    display: block;
  }

  /* spacing between photos vertically */
  .masonry.context .photo-item  { margin-bottom: 1.5rem; }
  .masonry.surface .photo-item  { margin-bottom: 0px; }  /* ── near-flush vertical ── */

  /* ── Frame ── */
  .photo-item__frame {
    position: relative;
    overflow: hidden;
    background: var(--surface);
    display: block;
  }

  .photo-item__img {
    width: 100%;
    height: auto;           /* ── natural aspect ratio ── */
    display: block;
    filter: grayscale(100%);
    /* ── remove grayscale(100%) for color ── */
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                filter 0.4s ease;
  }

  /* Hover — only zoom in context mode */
  .masonry.context .photo-item:hover .photo-item__img {
    transform: scale(1.03);
    filter: grayscale(50%);
  }

  /* Surface mode — no hover zoom, keep flat */
  .masonry.surface .photo-item:hover .photo-item__img {
    transform: none;
    filter: grayscale(100%);
  }

  /* Film grain */
  .photo-item__grain {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.055;
    /* ── 0 = off, 0.12 = heavy grain ── */
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px;
  }

  /* ── Location label ── */
  .photo-item__location {
    color: var(--text-secondary);
    letter-spacing: 0.06em;
    padding-top: 0.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 2rem;
    opacity: 1;
    transition: opacity 0.3s ease, max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Surface — labels vanish */
  .masonry.surface .photo-item__location {
    opacity: 0;
    max-height: 0;
    padding: 0;
    pointer-events: none;
  }

  /* ══════════════════════════════════
     LIGHTBOX
  ══════════════════════════════════ */
  .lb-overlay {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(10, 10, 10, 0.94);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: zoom-out;
    animation: lb-fade 150ms ease;
  }

  @keyframes lb-fade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .lb-close {
    position: absolute;
    top: 1.25rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: rgba(255,255,255,0.4);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    cursor: pointer;
    font-family: var(--font-body);
    transition: color 150ms ease;
  }

  .lb-close:hover { color: #fff; }

  /* Prev / Next arrows */
  .lb-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: rgba(255,255,255,0.35);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 1rem;
    transition: color 150ms ease;
    z-index: 1;
  }

  .lb-nav:hover { color: #fff; }
  .lb-nav--prev { left: 1rem; }
  .lb-nav--next { right: 1rem; }

  /* Image container */
  .lb-inner {
    max-width: 88vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    cursor: default;
  }

  .lb-img {
    max-width: 100%;
    max-height: 84vh;
    object-fit: contain;
    display: block;
    filter: grayscale(100%);
    /* ── remove for color in lightbox ── */
  }

  .lb-location {
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.1em;
    font-family: var(--font-display);
  }

  /* ── Mobile ── */
  @media (max-width: 600px) {
    .masonry.context { columns: 2 140px; column-gap: 0.75rem; }
    .masonry.surface { columns: 2 100px; column-gap: 1px; }
    .lb-nav { display: none; } /* swipe on mobile instead */
  }
</style>
