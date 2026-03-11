<script lang="ts">
  import { reveal } from '$lib/actions/reveal.js';

  const email = 'rueijiechang@uchicago.edu'; // ── update if email changes ──

  const openTo = [
    {
      title: 'Research Collaborations',
      desc: 'Collaborative projects in computational literary studies, cultural studies and critical theory of technology.'
    },
    {
      title: 'Corpus Building & Digital Editing',
      desc: 'TEI encoding, metadata schema design, and corpus curation for literary and historical materials.'
    },
    {
      title: 'Comparative Literature & Translation',
      desc: 'Cross-linguistic research and translation in English, Mandarin, and French across academic and literary contexts.'
    },
  ];
</script>

<svelte:head>
  <title>Contact — RJC</title>
</svelte:head>

<div class="container contact">

  <!-- ── Page header ── -->
  <header class="contact__header fade-up" use:reveal>
    <p class="label">Contact</p>
    <h1 class="display">Get in Touch.</h1> <!-- ── edit heading ── -->
  </header>


  <hr class="divider" />
  
  <!-- ── Open to ── -->
  <section class="contact__open fade-up" use:reveal>
    <p class="label section-label">Open To</p>
    <div class="open-grid">
      {#each openTo as item}
        <div class="open-item">
          <p class="open-item__title">{item.title}</p>
          <p class="open-item__desc">{item.desc}</p>
        </div>
      {/each}
    </div>
  </section>

  <hr class="divider" />

  <section class="contact__cta fade-up" use:reveal>
    <p class="label section-label">Reach Out</p>
    <p class="contact__cta-text">
    I am always happy to hear from researchers, collaborators, and curious readers.
    Email is the best way to reach me (rueijiechang@uchicago.edu). I usually respond within a few days.
    </p>
    <a href="mailto:{email}" class="contact__email">{email} →</a>
  </section>

</div>

<style>
  .contact {
    padding-top: 3rem;
    padding-bottom: var(--space-xl);
    max-width: 860px;
  }

  .contact__header {
    margin-bottom: 1.5rem;
  }

  .contact__header .label {
    margin-bottom: 1rem;
  }


  .divider {
    border: none;
    border-top: 1px solid var(--border);
    margin: 2.5rem 0;
  }

  .section-label {
    margin-bottom: 2rem;
  }

  .open-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); /* ── column width ── */
    gap: 2rem 3rem;
  }

  .open-item__title {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 0.4rem;
  }

  .open-item__desc {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .contact__cta-text {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
    line-height: 1.7;
  }

  .contact__email {
    font-family: var(--font-body);
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-secondary);
    transition: color var(--duration-fast) ease;
  }

  .contact__email:hover {
    color: var(--text-primary);
  }

  @media (max-width: 640px) {
    .open-grid { grid-template-columns: 1fr; }
  }
</style>