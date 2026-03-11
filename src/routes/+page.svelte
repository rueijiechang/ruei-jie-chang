<script lang="ts">
  import { onMount } from 'svelte';
  import { reveal } from '$lib/actions/reveal.js';
  import type { Poem, FeaturedProject, FragmentPart } from '$lib/types';

  // ─────────────────────────────────────────────
  // HERO
  // ─────────────────────────────────────────────
  const headline = ['TEXTS_', 'COMPUTATION', '_CriticalTheory'];
  const tagline  = 'Digital Humanities';  // ── vertical tagline left of bio ──
  const intro    = 'I study how computational systems reorganize knowledge and interpretation, situating contemporary language models within longer histories of textual mediation and material infrastructure.';

  // ─────────────────────────────────────────────
  // FEATURED PROJECTS (wiht Typescript)
  // ─────────────────────────────────────────────
  const featured: FeaturedProject[] = [
    {
      slug: 'photography',
      image: '/images/photography/84.jpg',
      title: 'Textures',
      tags: ['Photography', 'Archive'],
      desc: 'A personal black-and-white archive of surfaces gathered across geographies and time. Sea, windows, mountains, walls, fabric, skin: textures marked by moments passing and what remains.',
      status: 'Ongoing',
    },
    {
      slug: 'coffee-map',
      image: '/images/curve.JPG',
      title: 'Coffee Tasting Map',
      tags: ['Data', 'Geo', 'API','Archive'],
      desc: 'An interactive, geocoded archive of my single-origin coffee tastings, linking sensory notes to origin regions and real-time weather data to explore the relationship between place, climate, and flavor.',
      status: 'Ongoing',
    },
    {
      slug: 'ai-imagined',
      image: '/images/dot.JPG',
      title: 'An AI Image of the Imagined Image of AI',
      year: '2024',
      tags: ['Research', 'Writing', 'AI'],
      desc: 'What does it mean that generative AI consistently imagines itself as a feminized humanoid robot? A critical examination of visual repetition, historical imaginary, and political foreclosure in AI-generated images.',
      status: '',
    },
    {
      slug: 'material-configurations',
      image: '/images/blue.JPG',
      title: 'Material, ĠConfig, urations, Ġof, ĠAI, -, Gener, ated, ĠText, s',
      year: '2024',
      tags: ['Research', 'Writing', 'Data', 'AI'],
      desc: "A new materialist account of how AI-generated text emerges — examining GPT-2's tokenization, embeddings, and attention mechanisms to argue that meaning in AI text is not absent but differently configured.",
      status: '',
    },
    {
  slug: 'mother-as-other',
  image: '/images/photography/54.jpg',
  title: 'mOther as the Other: Language, Alienation, and the Impossibility of the Mother Tongue',
  year: '2024',
  tags: ['Research', 'Writing', 'Language'],
  desc: 'A theoretical memoir examining the mother tongue through Lacanian psychoanalysis, tracing the linguistic histories of Canetti, Lahiri, and my own experience as a Taiwanese speaker.',
  status: "",
},
  ];

  // ─────────────────────────────────────────────
  // HOUR to WORD MAPPING
  // ─────────────────────────────────────────────
  const hourWords: string[] = [
    'midnight','one','two','three','four','five','six','seven',
    'eight','nine','ten','eleven','noon','one','two','three',
    'four','five','six','seven','eight','nine','ten','eleven',
  ];

  const minuteWords: string[] = [
    'zero','one','two','three','four','five','six','seven','eight','nine',
    'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen',
    'seventeen','eighteen','nineteen','twenty','twenty-one','twenty-two',
    'twenty-three','twenty-four','twenty-five','twenty-six','twenty-seven',
    'twenty-eight','twenty-nine','thirty','thirty-one','thirty-two',
    'thirty-three','thirty-four','thirty-five','thirty-six','thirty-seven',
    'thirty-eight','thirty-nine','forty','forty-one','forty-two',
    'forty-three','forty-four','forty-five','forty-six','forty-seven',
    'forty-eight','forty-nine','fifty','fifty-one','fifty-two','fifty-three',
    'fifty-four','fifty-five','fifty-six','fifty-seven','fifty-eight','fifty-nine',
  ];

  const fallbackWords: string[] = ['hour', 'clock', 'time'];

  // ─────────────────────────────────────────────
  // POEM STATE for TypeScript
  // ─────────────────────────────────────────────
  let fragment:        string  = '';
  let poemTitle:       string  = '';
  let poemAuthor:      string  = '';
  let searchedWord:    string  = '';
  let loading:         boolean = true;
  let noResult:        boolean = false;
  let drawing:         boolean = false;
  let poemPool:        Poem[]  = [];
  let displayed:       string  = '';
  let typing:          boolean = false;
  let typewriterTimer: ReturnType<typeof setInterval>;

  // ─────────────────────────────────────────────
  // GETTING TIME and BUILDING TIME LABEL
  // ─────────────────────────────────────────────
  function getNow(): { hour: number; minute: number } {
    const d = new Date();
    return { hour: d.getHours(), minute: d.getMinutes() };
  }

  // Specify how to build the time label based on specific hour and minute
  function buildTimeLabel(hour: number, minute: number): string {
    const h = hourWords[hour];
    if (h === 'midnight' && minute === 0) return 'it is midnight';
    if (h === 'noon'     && minute === 0) return 'it is noon';
    if (h === 'midnight' || h === 'noon') return `The Time is twelve ${minuteWords[minute]}`;
    if (minute === 0) return `it is ${h} o'clock`;
    return `The Time is ${h} ${minuteWords[minute]}`;
  }

  // ─────────────────────────────────────────────
  // TYPEWRITER EFFECT for POEM
  // ─────────────────────────────────────────────
  function typewrite(text: string): void {
    clearInterval(typewriterTimer);
    displayed = '';
    typing    = true;
    let i = 0;
    typewriterTimer = setInterval(() => {
      displayed += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(typewriterTimer);
        typing = false;
      }
    }, 22); // ── ms per character ──
  }

  // ─────────────────────────────────────────────
  // FETCHING POEMS from poetrydb.org API
  // ─────────────────────────────────────────────

  // Async function to query poetrydb.org for poems containing a specific word
  async function queryPoetryDB(word: string): Promise<Poem[] | null> {
    const res  = await fetch(`https://poetrydb.org/lines/${encodeURIComponent(word)}`);
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;
    return data as Poem[];
  }
// extract a fragment of 1-3 lines from the poem that contains the searched word)
  function extractFragment(lines: string[], word: string): string {
    const idx = lines.findIndex(
      l => l.toLowerCase().includes(word.toLowerCase()) && l.trim().length > 3
    );
    if (idx === -1) {
      return lines.filter(l => l.trim().length > 3).slice(0, 2).join(' / ');
    }
    const matched = lines[idx].trim();
    const next1   = lines[idx + 1]?.trim();
    const next2   = lines[idx + 2]?.trim();
    if (next1 && next1.length > 4 && next2 && next2.length > 4) {
      return `${matched} / ${next1} / ${next2}`;
    }
    if (next1 && next1.length > 4) return `${matched} / ${next1}`;
    return matched;
  }

// Draw a poem from the pool based on the searched word
  function drawFromPool(word: string): void {
    const poem   = poemPool[Math.floor(Math.random() * poemPool.length)];
    poemTitle    = poem.title;
    poemAuthor   = poem.author;
    searchedWord = word;
    const text   = extractFragment(poem.lines, word);
    typewrite(`"${text}"`);
  }

  // Fetch poems from the API based on the current hour
  async function fetchPoems(): Promise<void> {
    loading  = true;
    noResult = false;
    poemPool = [];

    const { hour } = getNow();
    const primary  = hourWords[hour];
    let   word     = primary;
    let   poems    = await queryPoetryDB(primary);

// If no poems found for the primary word, try fallback words in order until we get results or exhaust the list
    if (!poems) {
      for (const fb of fallbackWords) {
        poems = await queryPoetryDB(fb);
        if (poems) { word = fb; break; }
      }
    }

    if (!poems) { noResult = true; loading = false; return; }

    poemPool = poems;
    drawFromPool(word);
    loading = false;
  }

  // Draw another poem from the pool
  function drawAnother(): void {
    if (drawing || poemPool.length === 0) return;
    drawing = true;
    drawFromPool(searchedWord);
    setTimeout(() => drawing = false, 400);
  }

  // Headline word animation
  let words: HTMLElement[] = []; // ← typed as array of HTML elements
  onMount(() => {
    words.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 120 * i + 200);
    });
    fetchPoems();
  });

  // Reactive time label
  $: now       = getNow();
  $: timeLabel = buildTimeLabel(now.hour, now.minute);

  // Split displayed string for word highlighting
  $: fragmentParts = ((): FragmentPart[] => {
    if (!searchedWord || !displayed) return [{ text: displayed, highlight: false }];
    const lower = displayed.toLowerCase();
    const idx   = lower.indexOf(searchedWord.toLowerCase());
    if (idx === -1) return [{ text: displayed, highlight: false }];
    return [
      { text: displayed.slice(0, idx),                         highlight: false },
      { text: displayed.slice(idx, idx + searchedWord.length), highlight: true  },
      { text: displayed.slice(idx + searchedWord.length),      highlight: false },
    ];
  })();
</script>

<svelte:head>
  <title>RUEI-JIE CHANG</title>
</svelte:head>


<!-- ─────────────────────────────────────────────
     HERO
───────────────────────────────────────────── -->
<section class="hero container">

  <div class="hero__top fade-up" use:reveal>

    <!-- ── Time + poetry block — top right ── -->
    <div class="time-block">
      <!-- clock label-->
      <span class="time-block__clock label">{timeLabel}</span>

      {#if loading}
        <span class="time-block__loading">—</span>
      {:else if noResult}
        <span class="time-block__loading">the archive is silent.</span>
      {:else}
        <!-- poem fragment with typewriter + word highlight -->
        <p class="time-block__fragment" aria-live="polite">
          {#each fragmentParts as part}
            {#if part.highlight}
              <em class="time-block__match">{part.text}</em>
            {:else}
              {part.text}
            {/if}
          {/each}
          <!-- blinking cursor -->
          {#if typing}
            <span class="time-block__cursor" aria-hidden="true">|</span>
          {/if}
        </p>

        <!-- attribution -->
        <p class="time-block__attr">
          — {poemAuthor}, <em>"{poemTitle}"</em>
        </p>

        <!-- draw another -->
        <button
          class="time-block__draw"
          on:click={drawAnother}
          disabled={drawing}
          aria-label="Draw another poem for this hour"
        >click to get another poem</button>
      {/if}
    </div>

  </div>


  <!-- ── Headline ── -->
  <h1 class="display hero__headline" aria-label={headline.join(' ')}>
    {#each headline as word, i}
      <span
        class="hero__word fade-up"
        bind:this={words[i]}
        style="transition-delay: {i * 80}ms"
      >{word}</span>
    {/each}
  </h1>

  <!-- ── vertical tagline ── -->
  <div class="hero__bottom fade-up" use:reveal style="transition-delay: 200ms">
    <span class="hero__tagline-vert">{tagline}</span>
    <div class="hero__right">
      <!-- ── bio ── -->
      <p class="hero__intro">{intro}</p>
      <!-- Button to other pages -->
      <div class="hero__cta">
        <a href="/projects" class="btn btn--primary">View Projects / Writings</a>
        <a href="/about"    class="btn btn--ghost">About me →</a>
      </div>
    </div>

  </div>

</section>


<!-- ─────────────────────────────────────────────
     DIVIDER (a line)
───────────────────────────────────────────── -->
<div class="container"><hr class="divider" /></div>

<!-- ─────────────────────────────────────────────
     FEATURED PROJECTS
───────────────────────────────────────────── -->
<section class="container section">

  <div class="section__header fade-up" use:reveal>
    <p class="label">Selected Work</p>
    <a href="/projects" class="section__see-all label">All Projects / Writings →</a>
  </div>

  <div class="projects-grid stagger" use:reveal>
    {#each featured as p}
      <a href="/projects/{p.slug}" class="project-card">

        <div class="project-card__thumb">
          <img src={p.image} alt={p.title} class="project-card__img" />
        </div>

        <div class="project-card__body">
          <div class="project-card__meta">
            {#each p.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
            {#if p.status}
              <span class="tag tag--status">{p.status}</span>
            {/if}
          </div>
          <h2 class="heading-sm project-card__title">{p.title}</h2>
          <p class="project-card__desc">{p.desc}</p>
        </div>

      </a>
    {/each}
  </div>

</section>


<style>
  /* ─────────────────────────────────────────────
     HERO
───────────────────────────────────────────── */
  .hero {
    padding-top: 1.5rem;
    padding-bottom: var(--space-lg);
    display: flex;
    flex-direction: column;
    width: 100%;
  }


  .hero__top {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    /* ── space between top row and headline ── */
    margin-bottom: 3.5rem;
  }


  /* ─────────────────────────────────────────────
     TIME BLOCK — top right of hero
───────────────────────────────────────────── */
  .time-block {
    display: flex;
    flex-direction: column;
    /* ── right-aligned ── */
    align-items: flex-end;
    gap: 0.4rem;
    /* ── caps width of fragment ── */
    max-width: 280px;
    text-align: right;
  }

  .time-block__clock {
    color: var(--text-muted, var(--text-secondary));
  }

  .time-block__loading {
    font-size: 0.7rem;
    color: var(--text-secondary);
    font-style: italic;
  }

  /* poem fragment — italic, right-aligned */
  .time-block__fragment {
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-style: italic;
    font-weight: 400;
    color: var(--text-secondary);
    line-height: 1.55;
    margin: 0;
  }

  /* matched word highlight */
  .time-block__match {
    font-style: normal;
    color: var(--accent);
    font-weight: 600;
  }

  /* blinking cursor during typewriter */
  .time-block__cursor {
    display: inline-block;
    color: var(--accent);
    animation: blink 0.9s step-end infinite;
    font-weight: 300;
    margin-left: 1px;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  /* "— Author, "Title"" */
  .time-block__attr {
    font-size: 0.9rem;
    color: var(--text-secondary);
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  .time-block__attr em { font-style: italic; }

.time-block__draw {
  font-family: var(--font-body);
  font-size: 0.65rem;            
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-primary);
  background: none;
  border: 1px solid var(--text-primary);
  padding: 0.4rem 1rem;
  border-radius: 2px;
  cursor: pointer;
  margin-top: 0.4rem;
  transition: all var(--duration-fast) ease;
}

  .time-block__draw:hover {
  background: var(--text-primary);
  color: var(--bg);
}

  .time-block__draw:disabled {
    opacity: 0.4;
    cursor: default;
  }

/* headline */
  .hero__headline {
    display: flex;
    /* ── stack each word on its own line ── */
    flex-direction: column;
    gap: 0;
    margin-bottom: 3rem;      
    margin-left: -0.04em;    
  }

  .hero__word { display: block; }

  /* ── vertical tagline + bio ── */
  .hero__bottom {
    display: grid;
    grid-template-columns: auto 1fr;
    /* ── space between tagline and bio ── */
    gap: 4rem;                
    align-items: start;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
  }

  .hero__tagline-vert {
    font-family: var(--font-body);
    font-size: 0.65rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-secondary);
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }

  .hero__right {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* ── bio text ── */
  .hero__intro {
    font-size: clamp(0.9rem, 1.6vw, 1.1rem);
    color: var(--text-secondary);
    max-width: 520px;   
    line-height: 1.75;
    margin-bottom: 2rem;
  }

  .hero__cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  /* ── Buttons ── */
  .btn {
    display: inline-block;
    padding: 0.75rem 1.75rem;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 2px;
    transition: all var(--duration-fast) ease;
    cursor: pointer;
    background: none;
    font-family: var(--font-body);
  }

  .btn--primary { background: var(--text-primary); color: var(--bg); border: none; }
  .btn--primary:hover { background: var(--accent); }
  .btn--ghost { border: 1px solid var(--border-strong); color: var(--text-secondary); }
  .btn--ghost:hover { border-color: var(--text-primary); color: var(--text-primary); }

  .divider { border: none; border-top: 1px solid var(--border); margin: 0; }


  /* ─────────────────────────────────────────────
     SECTION
───────────────────────────────────────────── */
  .section { padding: var(--space-lg) 0; }

  .section__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;
  }

  .section__see-all { transition: color var(--duration-fast) ease; }
  .section__see-all:hover { color: var(--text-primary); }


  /* ─────────────────────────────────────────────
     PROJECT GRID
  ───────────────────────────────────────────── */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1rem;
    border:none
  }

  .project-card {
    display: flex;
    flex-direction: column;
    /* ── card background color ── */
    background: rgb(248, 248, 248);   
    transition: background var(--duration-fast) ease;
    margin: -1px;
    border:none;
  }

  .project-card:hover { background: var(--surface-hover); }

  .project-card__thumb {
    aspect-ratio: 16 / 9;
    background: var(--surface);
    overflow: hidden;
    position: relative;
  }

  .project-card__thumb::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
  }

  .project-card__body {
    padding: 1.25rem 1.5rem 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-card__meta {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    margin-bottom: 0.25rem;
  }

  .tag {
    font-size: 0.65rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.25rem 0.6rem;
    border: 1px solid var(--border-strong);
    color: var(--text-secondary);
    border-radius: 1px;
  }

  /* ── status tag color ── */
  .tag--status {
    border-color: var(--accent-light); 
    color: var(--accent);
  }

  .project-card__title { margin-bottom: 0.25rem; }

  .project-card__desc {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.65;
  }

  .project-card__img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

/* Responsive */

@media (max-width: 640px) {
  .hero { padding-top: 2rem; }

  /* poem block left aligned on mobile */
  .time-block {
    max-width: 100%;
    align-items: flex-start;
    text-align: left;
  }
  .time-block__attr {
    white-space: normal;
  }

  .hero__bottom {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .hero__tagline-vert {
    writing-mode: horizontal-tb;
    transform: none;
  }

  .projects-grid { grid-template-columns: 1fr; }
  .hero__cta { flex-direction: column; }
  .section__header { padding: 0 0.25rem; }
  .section { padding: var(--space-md) var(--space-sm); }
}
</style>