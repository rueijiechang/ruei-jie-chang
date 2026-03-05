<script>
  import { reveal } from '$lib/actions/reveal.js';

  // ── Add / remove projects here. slug must match folder in src/routes/projects/ ──
  const projects = [

    {
  slug: 'photography',
  title: 'Textures of the World',
  year: '2019–',
  tags: ['Photography','Archive'],   // ← shows up in filter
  desc: 'A minimalist B&W series documenting surface textures across six continents.',
  status: 'Ongoing',
  featured: true,
  },
      {
      slug: 'coffee-map',
      title: 'Coffee Tasting Map',
      year: '2025',
      tags: ['Data', 'Geo', 'API','Archive'],
      desc: 'An interactive, geocoded archive of my single-origin coffee tastings, linking sensory notes to origin regions and real-time weather data to explore the relationship between place, climate, and flavor.',
      status: 'In progress',
      featured: true,
    },
{
  slug: 'material-configurations',
  title: 'Material, ĠConfig, urations, Ġof, ĠAI, -, Gener, ated, ĠText, s',
  year: '2024',
  tags: ['Research', 'Writing','Data', 'AI'],
  desc: 'A new materialist account of how AI-generated text emerges — examining GPT-2\'s tokenization, embeddings, and attention mechanisms to argue that meaning in AI text is not absent but differently configured.',
  status: 'Unpublished',
  featured: true
},

{
  slug: 'ai-imagined',
  title: 'An AI Image of the Imagined Image of AI',
  year: '2024',
  tags: ['Research', 'Writing','Data', 'AI'],
  desc: 'What does it mean that generative AI consistently imagines itself as a feminized humanoid robot? A critical examination of visual repetition, historical imaginary, and political foreclosure in AI-generated images.',
  status: 'Unpublished',
  featured: true,
},
    // ── Add more project objects here ──
  ];

  // ── Filter state ──
  import { writable } from 'svelte/store';
  let activeTag = 'All';

  // Collect unique tags
  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];

  $: filtered = activeTag === 'All' ? projects : projects.filter(p => p.tags.includes(activeTag));
</script>

<svelte:head>
  <title>Projects — RJC</title>
</svelte:head>

<div class="container projects-page">

  <header class="projects-header fade-up" use:reveal>
    <p class="label">Work</p>
    <h1 class="display">PROJECTS / WRITINGS</h1>
  </header>

  <!-- ── Tag filter ── -->
  <div class="filter-bar fade-up" use:reveal style="transition-delay: 100ms">
    {#each allTags as tag}
      <button
        class="filter-btn label"
        class:active={activeTag === tag}
        on:click={() => activeTag = tag}
      >{tag}</button>
    {/each}
  </div>

  <!-- ── Project list ── -->
  <ul class="projects-list">
    {#each filtered as p, i}
      <li class="project-row fade-up" use:reveal style="transition-delay: {i * 60}ms">
        <a href="/projects/{p.slug}" class="project-row__inner">

          <span class="project-row__year label">{p.year}</span>

          <div class="project-row__main">
            <h2 class="project-row__title heading-sm">{p.title}</h2>
            <p class="project-row__desc">{p.desc}</p>
          </div>

          <div class="project-row__right">
            <div class="project-row__tags">
              {#each p.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
            <span class="project-row__arrow">→</span>
          </div>

        </a>
      </li>
    {/each}
  </ul>

</div>

<style>
  .projects-page {
    padding-top: 3rem;
    padding-bottom: var(--space-xl);
  }

  .projects-header {
    margin-bottom: var(--space-md);
  }

  .projects-header .label {
    margin-bottom: 1rem;
  }

  /* ── Filter bar ── */
  .filter-bar {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: var(--space-md);
  }

  .filter-btn {
    padding: 0.35rem 0.9rem;
    border: 1px solid var(--border-strong);
    background: none;
    cursor: pointer;
    color: var(--text-secondary);
    border-radius: 1px;
    transition: all var(--duration-fast) ease;
    font-family: var(--font-body);
  }

  .filter-btn:hover {
    border-color: var(--text-primary);
    color: var(--text-primary);
  }

  .filter-btn.active {
    background: var(--text-primary); /* ── active filter bg ── */
    color: var(--bg);
    border-color: var(--text-primary);
  }

  /* ── Project list ── */
  .projects-list {
    list-style: none;
    border-top: 1px solid var(--border);
  }

  .project-row {
    border-bottom: 1px solid var(--border);
  }

  .project-row__inner {
    display: grid;
    grid-template-columns: 4rem 1fr auto; /* ── year | content | tags+arrow ── */
    gap: 1.5rem 2rem;
    align-items: center;
    padding: 1.75rem 0; /* ── row vertical padding ── */
    transition: padding-left var(--duration-fast) var(--ease-out);
  }

  .project-row__inner:hover {
    padding-left: 0.5rem; /* ── subtle indent on hover ── */
  }

  .project-row__year {
    align-self: start;
    padding-top: 0.25rem;
  }

  .project-row__desc {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-top: 0.35rem;
    line-height: 1.6;
    max-width: 560px;
  }

  .project-row__right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.75rem;
  }

  .project-row__tags {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    justify-content: flex-end;
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

  .project-row__arrow {
    font-size: 1.1rem;
    color: var(--text-secondary);
    transition: transform var(--duration-fast) ease, color var(--duration-fast) ease;
  }

  .project-row__inner:hover .project-row__arrow {
    transform: translateX(4px);
    color: var(--text-primary);
  }

  /* ── Responsive: stack on small screens ── */
  @media (max-width: 640px) {
    .project-row__inner {
      grid-template-columns: 1fr;
    }
    .project-row__right {
      align-items: flex-start;
    }
  }
</style>
