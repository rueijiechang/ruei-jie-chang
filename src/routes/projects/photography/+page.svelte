<script lang="ts">
  import { reveal } from '$lib/actions/reveal.js';

  // ── Photo type ──
  type Photo = {
    src:      string;
    alt:      string;
    location: string;
  };

  // ── MY PHOTOS ───────────────────────────────────────────────────────
  const locations: string[] = Array.from({ length: 121 }, () => '');
  locations[0]  = 'Santa Barbara, USA';
  locations[1]  = 'Tucheng, Taiwan';
  locations[2]  = 'Cebu, Philippines';
  locations[3]  = 'Taipei, Taiwan';
  locations[4]  = 'Taipei, Taiwan';
  locations[5]  = 'Hualien, Taiwan';
  locations[6]  = 'Tuncheng, Taiwan';
  locations[7]  = 'Cebu, Philippines';
  locations[8]  = 'Northern Coast, Taiwan';
  locations[9]  = 'Tucheng, Taiwan';
  locations[10] = 'Cebu, Philippines';
  locations[11] = 'Los Angeles, USA';
  locations[12] = 'Taitung, Taiwan';
  locations[13] = 'Los Angeles, USA';
  locations[14] = 'Los Angeles, USA';
  locations[15] = 'Los Angeles, USA';
  locations[16] = 'Los Angeles, USA';
  locations[17] = 'Los Angeles, USA';
  locations[18] = 'Los Angeles, USA';
  locations[19] = 'Los Angeles, USA';
  locations[20] = 'Los Angeles, USA';
  locations[21] = 'Los Angeles, USA';
  locations[22] = 'Los Angeles, USA';
  locations[23] = 'Los Angeles, USA';
  locations[24] = 'Los Angeles, USA';
  locations[25] = 'Los Angeles, USA';
  locations[26] = 'Los Angeles, USA';
  locations[27] = 'Los Angeles, USA';
  locations[28] = 'Los Angeles, USA';
  locations[29] = 'Los Angeles, USA';
  locations[30] = 'Los Angeles, USA';
  locations[31] = 'Los Angeles, USA';
  locations[32] = 'Los Angeles, USA';
  locations[33] = 'Los Angeles, USA';
  locations[34] = 'Tamsui, Taiwan';
  locations[35] = 'Hualien, Taiwan';
  locations[36] = 'Taipei, Taiwan';
  locations[37] = 'Taipei, Taiwan';
  locations[38] = 'Taipei, Taiwan';
  locations[39] = 'Taipei, Taiwan';
  locations[40] = 'Taipei, Taiwan';
  locations[41] = 'Taipei, Taiwan';
  locations[42] = 'Taipei, Taiwan';
  locations[43] = 'Taipei, Taiwan';
  locations[44] = 'Taipei, Taiwan';
  locations[45] = 'Taipei, Taiwan';
  locations[46] = 'Taipei, Taiwan';
  locations[47] = 'Chicago, USA';
  locations[48] = 'Sanzhi, Taiwan';
  locations[49] = 'Taichung, Taiwan';
  locations[50] = 'Taichung, Taiwan';
  locations[51] = 'Taichung, Taiwan';
  locations[52] = 'Taichung, Taiwan';
  locations[53] = 'Northern Coast, Taiwan';
  locations[54] = 'Chicago, USA';
  locations[55] = 'Northern Coast, Taiwan';
  locations[56] = 'Northern Coast, Taiwan';
  locations[57] = 'Yangmingshan, Taiwan';
  locations[58] = 'Yangmingshan, Taiwan';
  locations[59] = 'Tamsui, Taiwan';
  locations[60] = 'New Taipei City, Taiwan';
  locations[61] = 'New Taipei City, Taiwan';
  locations[62] = 'Kinmen, Taiwan';
  locations[63] = 'Kinmen, Taiwan';
  locations[64] = 'Kinmen, Taiwan';
  locations[65] = 'Kinmen, Taiwan';
  locations[66] = 'Kinmen, Taiwan';
  locations[67] = 'Kinmen, Taiwan';
  locations[68] = 'Kinmen, Taiwan';
  locations[69] = 'Kinmen, Taiwan';
  locations[70] = 'Kinmen, Taiwan';
  locations[71] = 'Monument Valley, USA';
  locations[72] = 'The Arches National Park, USA';
  locations[73] = 'The Arches National Park, USA';
  locations[74] = 'The Arches National Park, USA';
  locations[75] = 'USA';
  locations[76] = 'USA';
  locations[77] = 'Colorado River, USA';
  locations[78] = 'Las Vegas, USA';
  locations[79] = 'Las Vegas, USA';
  locations[80] = 'Area 51, USA';
  locations[81] = 'Death Valley, USA';
  locations[82] = 'Death Valley, USA';
  locations[83] = 'Death Valley, USA';
  locations[84] = 'Death Valley, USA';
  locations[85] = 'Death Valley, USA';
  locations[86] = 'Death Valley, USA';
  locations[87] = 'Death Valley, USA';
  locations[88] = 'Yosemite National Park, USA';
  locations[89] = 'Yosemite National Park, USA';
  locations[90] = 'Kamikōchi, Japan';
  locations[91] = 'Kurobe Damu, Japan';
  locations[92] = 'Kenroku-en, Japan';
  locations[93] = 'Kenroku-en, Japan';
  locations[94] = 'Kenroku-en, Japan';
  locations[95] = 'Nagoya, Japan';
  locations[96] = 'Nagoya, Japan';
  locations[97] = 'Nagoya, Japan';
  locations[98] = 'Arashiyama, Japan';
  locations[99] = 'Otagi Nenbutsu-ji, Japan';
  locations[100] = 'Otagi Nenbutsu-ji, Japan';
  locations[101] = 'Otagi Nenbutsu-ji, Japan';
  locations[102] = 'Osaka, Japan';
  locations[103] = 'Osaka, Japan';
  locations[104] = 'Wat Rong Khun, Thailand';
  locations[105] = 'Millenium Park, USA';
  locations[106] = 'Marina City, USA';
  locations[107] = 'Chicago, USA';
  locations[108] = 'River City, USA';
  locations[109] = 'Chicago, USA';
  locations[110] = 'Chicago, USA';
  locations[111] = 'Chicago, USA';
  locations[112] = 'Chicago, USA';
  locations[113] = 'Chicago, USA';
  locations[114] = 'Chicago, USA';
  locations[115] = 'Hualien, Taiwan';
  locations[116] = 'Hualien, Taiwan';
  locations[117] = 'Santa Barbara, USA';
  locations[118] = 'Iceland';
  locations[119] = 'Iceland';
  locations[120] = 'Taipei, Taiwan';

  // Base photo array
  const base: Photo[] = Array.from({ length: 121 }, (_, i) => ({
    src:      `/images/photography/${i + 1}.jpg`,
    alt:      `Texture ${i + 1}`,
    location: locations[i] ?? '',
  }));

  // ── Fisher-Yates shuffle (randomly shuffle array) ──
  function shuffle(arr: Photo[]): Photo[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // State
  let view:     string       = 'context';
  let photos:   Photo[]      = shuffle(base);
  let lightbox: Photo | null = null;

  function doShuffle(): void {
    photos = shuffle(photos);
  }

  // Lightbox keyboard close
  function onKey(e: KeyboardEvent): void {
    // close lightbox on Escape, navigate prev/next with arrow keys
    if (e.key === 'Escape') lightbox = null;
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  }

  // Navigate lightbox prev / next
  function prev(): void {
    if (!lightbox) return;
    const i = photos.indexOf(lightbox);
    lightbox = photos[(i - 1 + photos.length) % photos.length];
  }

  function next(): void {
    if (!lightbox) return;
    const i = photos.indexOf(lightbox);
    lightbox = photos[(i + 1) % photos.length];
  }
</script>

<svelte:head>
  <title>Photography — RJC</title>
</svelte:head>

<svelte:window on:keydown={onKey} />


<div class="container photo-page">

  <!-- Header -->
  <header class="photo-header fade-up" use:reveal>
    <p class="label">Photography</p>
    <h1 class="display">Textures</h1>
    <p class="photo-header__sub">
      A personal black-and-white archive of surfaces gathered across geographies and time.
      Sea, windows, mountains, walls, fabric, skin: textures marked by moments passing and what remains.
      Shot on film and digital, the world rendered as a continuous material field, beyond borders, beyond categories.
    </p>
  </header>

  <!-- Controls -->
  <div class="controls fade-up" use:reveal style="transition-delay: 80ms">

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

    <button class="shuffle-btn label" on:click={doShuffle} aria-label="Shuffle photos">
      Shuffle
    </button>

  </div>

  <!-- ────────────────────────────────────
       MASONRY GRID
──────────────────────────────────── -->
  <div
    class="masonry"
    class:context={view === 'context'}
    class:surface={view === 'surface'}
  >
    {#each photos as photo (photo.src)}
      <div
        class="photo-item"
        role="button"
        tabindex="0"
        aria-label="Open photo from {photo.location || 'unknown location'}"
        on:click={() => lightbox = photo}
        on:keydown={(e: KeyboardEvent) => e.key === 'Enter' && (lightbox = photo)}
      >
        <div class="photo-item__frame">
          <img
            src={photo.src}
            alt={photo.location ? `Texture from ${photo.location}` : photo.alt}
            class="photo-item__img"
            loading="lazy"
          />
          <div class="photo-item__grain" aria-hidden="true"></div>
        </div>

        {#if photo.location}
          <p class="photo-item__location label">{photo.location}</p>
        {/if}
      </div>
    {/each}
  </div>

</div>

<!-- ──────────────────────────────────
     LIGHTBOX
────────────────────────────────── -->
{#if lightbox}
  <div
    class="lb-overlay"
    role="dialog"
    aria-modal="true"
    aria-label="Photo lightbox"
    tabindex="-1"
    on:click={() => lightbox = null}
    on:keydown={(e: KeyboardEvent) => e.key === 'Escape' && (lightbox = null)}
  >
    <button class="lb-close label" on:click={() => lightbox = null} aria-label="Close lightbox">✕</button>

    <button class="lb-nav lb-nav--prev" on:click|stopPropagation={prev} aria-label="Previous photo">←</button>
    <button class="lb-nav lb-nav--next" on:click|stopPropagation={next} aria-label="Next photo">→</button>

    <div class="lb-inner" role="presentation" on:click|stopPropagation on:keydown|stopPropagation>
      <img
        src={lightbox.src}
        alt={lightbox.location ? `Texture from ${lightbox.location}` : lightbox.alt}
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

  .shuffle-btn {
    padding: 0.35rem 0.9rem;
    border: 1px dashed var(--border-strong);
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

  /* ──────────────────────────────────
     MASONRY spelling out CSS columns
────────────────────────────────── */
  .masonry {
    transition: column-gap 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                column-count 0.45s ease;
  }

  .masonry.context {
     /* ── 3 cols min 220px wide ── */
    columns: 3 220px;
    column-gap: 1.5rem;
  }

  .masonry.surface {
     /* ── 4 cols in context mode ── */
    columns: 4 160px;
    column-gap: 0px;
  }

  .photo-item {
    break-inside: avoid;
    cursor: zoom-in;
    display: block;
  }

  .masonry.context .photo-item { margin-bottom: 1.5rem; }
  .masonry.surface .photo-item { margin-bottom: 0px; }

  .photo-item__frame {
    position: relative;
    overflow: hidden;
    background: var(--surface);
    display: block;
  }

  .photo-item__img {
    width: 100%;
    height: auto; 
    display: block;
    filter: grayscale(100%);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                filter 0.4s ease;
  }

  .masonry.context .photo-item:hover .photo-item__img {
    transform: scale(1.03);
    filter: grayscale(50%);
  }

  .masonry.surface .photo-item:hover .photo-item__img {
    transform: none;
    filter: grayscale(100%);
  }

  /* adding grain effect */
  .photo-item__grain {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.055; /* ── 0 = off, 0.12 = heavy grain ── */
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px;
  }

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

  .masonry.surface .photo-item__location {
    opacity: 0;
    max-height: 0;
    padding: 0;
    pointer-events: none;
  }

  /* ──────────────────────────────────
     LIGHTBOX
 ────────────────────────────────── */
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
  }

  .lb-location {
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.1em;
    font-family: var(--font-display);
  }

  /* ── Responsive ── */
  @media (max-width: 600px) {
    .masonry.context { columns: 2 140px; column-gap: 0.75rem; }
    .masonry.surface { columns: 2 100px; column-gap: 1px; }
    .lb-nav { display: none; }
  }
</style>