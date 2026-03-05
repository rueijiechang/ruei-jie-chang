<script>
  import { reveal } from '$lib/actions/reveal.js';

  // ── Edit all your personal info here ──
  const name    = 'RUEI-JIE (RACHEL) CHANG';
  const role    = 'M.A. Digital Texts and Culture'; // degree / year / role
  const email   = 'rueijiechang@uchicago.edu';

  // Paragraphs for the bio section — add/remove as needed
  // ── Bio paragraphs — use highlight() to wrap words in <mark> spans ──
  // Syntax: wrap any word/phrase in [[double brackets]] to highlight it
  const bioRaw = [
    "I am an M.A. student in Digital Studies of Language, Culture, and History at the University of Chicago. My research examines the cultural and literary history of [[imaginaries of machine intelligence]] and the [[epistemologies of large language models]].",

    "Methodologically, I combine [[close reading]] with [[computational analysis]]. I build and curate structured textual corpora, encode materials in TEI, design metadata schemas, and apply machine learning and other quantitative methods to trace conceptual shifts across time. My approach is both [[technical and critical]]: I am interested not only in what models reveal, but also in how their assumptions structure interpretation, and how editorial decisions in data preparation shape the worldviews reflected in computational outputs.",
  ];

  // Converts [[phrase]] → <mark class="highlight">phrase</mark>
  // ── You never need to edit this function ──
  function highlight(text) {
    return text.replace(/\[\[(.+?)\]\]/g, '<mark class="bio-highlight">$1</mark>');
  }

const education = [
  {
    year: '2025 – 2027',
    degree: 'M.A. in Digital Studies of Language, Culture, and History (DIGS)',
    sub: 'Two-year concentration with Thesis in Digital Texts and Culture',
    school: 'University of Chicago (UChicago), Illinois, US'
  },
  {
    year: '2020 – 2025',
    degree: 'B.A. in Foreign Languages and Literatures (DFLL)',
    sub: "Certificate Program in Women's and Gender Studies Research",
    school: 'National Taiwan University (NTU), Taipei, Taiwan'
  },
  {
    year: '2023 – 2024',
    degree: 'Exchange: College of Letters and Science (UCEAP Program)',
    sub: 'English and Comparative Literature',
    school: 'University of California, Santa Barbara (UCSB), California, US'
  },
];

  // Skills/tools — shown as a simple list
  const skills = [
    { category: 'Languages',  items: ['English', 'Mandarin', 'French', 'Japanese', 'Latin'] },
    { category: 'Programming Languages',  items: ['Python', 'JavaScript'] },
    { category: 'Databases',  items: ['SQLite', 'Neo4j'] },
    { category: 'Web Technologies',  items: ['HTML', 'CSS', 'Svelte'] },
    // add more rows as needed
  ];

const researchAreas = [
  {
    title: 'Literary History & Cultural Theory',
    desc: 'Close reading and historical analysis of literary texts to trace how cultural, technological, and philosophical ideas are articulated across literary traditions.'
  },
  {
    title: 'Machine Consciousness & AI Imaginaries',
    desc: 'Cultural histories of how machine minds are imagined across literature and technological discourse from the nineteenth century to the present.'
  },
  {
    title: 'Media Archaeologies of Artificial Intelligence',
    desc: 'Historical approaches to artificial intelligence across earlier media, automata, and computational systems, tracing how technological imaginaries of intelligence emerge over time.'
  },
  {
    title: 'Large Language Models & Epistemology',
    desc: 'How probabilistic language models produce meaning, how scale reshapes interpretation, and how computational infrastructures influence what counts as knowledge and representation.'
  },
  {
    title: 'Critical Theory of AI & Subjectivity',
    desc: 'Drawing on feminist and queer theory to examine how artificial intelligence reconfigures embodiment, normativity, and forms of knowledge.'
  },
  {
    title: 'Computational Literary Studies',
    desc: 'Topic modeling, NLP, and temporal analysis applied to literary corpora to trace conceptual and cultural shifts across time.'
  },
  {
    title: 'Digital Scholarly Editing & Text Infrastructure',
    desc: 'TEI encoding, metadata schema design, and corpus curation for structured literary and historical materials.'
  },
];
</script>

<svelte:head>
  <title>About — RJC</title>
</svelte:head>

<div class="container about">

  <!-- ── Page header ── -->
  <header class="about__header fade-up" use:reveal>
    <p class="label">About</p>
    <h1 class="display">{name}</h1>
    <p class="about__role heading-sm">{role}</p>
  </header>

  <!-- ── Bio ── -->
  <div class="about__bio container--narrow fade-up" use:reveal>
    {#each bioRaw as para}
      <p>{@html highlight(para)}</p>
    {/each}
    <a href="mailto:{email}" class="about__email label">{email} →</a>
  </div>

  <hr class="divider" />

  <!-- ── Education ── -->
<section class="about__education fade-up" use:reveal>
  <p class="label section-label">Education</p>
  <ul class="education-list">
    {#each education as entry}
      <li class="education-item">
        <span class="label education-item__year">{entry.year}</span>
        <div>
          <p class="education-item__degree">{entry.degree}</p>
          <p class="education-item__sub">{entry.sub}</p>
          <p class="label education-item__school">{entry.school}</p>
        </div>
      </li>
    {/each}
  </ul>
</section>

<hr class="divider" />

  <!-- ── Skills ── -->
  <section class="about__skills stagger" use:reveal>
    <p class="label section-label">Skills &amp; Tools</p>
    <div class="skills-grid">
      {#each skills as group}
        <div class="skill-group">
          <p class="label skill-group__cat">{group.category}</p>
          <ul class="skill-group__items">
            {#each group.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>

  <hr class="divider" />

<!-- ── Research Areas ── -->
<section class="about__research fade-up" use:reveal>
  <p class="label section-label">Research Areas</p>
  <div class="research-grid">
    {#each researchAreas as area}
      <div class="research-item">
        <p class="research-item__title">{area.title}</p>
        <p class="research-item__desc">{area.desc}</p>
      </div>
    {/each}
  </div>
</section>

</div>

<style>
  .about {
    padding-top: 3rem;
    padding-bottom: var(--space-xl);
  }

  /* ── Header ── */
  .about__header {
    margin-bottom: 1.5rem;
  }

  .about__header .label {
    margin-bottom: 1rem;
  }

  .about__role {
    color: var(--accent); /* ── role/degree accent color ── */
    margin-top: 1.5rem;
    margin-bottom: 0;

   
  }

  /* ── Bio ── */
  .about__bio {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: var(--space-lg);
    padding-left: 0; /* reset container narrow inline padding if needed */
  }

  .about__bio p {
    font-size: 1.5rem;
    color: var(--text-secondary);
    line-height: 1.02;
  }

  .about__email {
    margin-top: 0.5rem;
    display: inline-block;
    transition: color var(--duration-fast) ease;
  }

  .about__email:hover {
    color: var(--text-primary);
  }

  .divider {
    border: none;
    border-top: 1px solid var(--border);
    /* margin: var(--space-lg) 0; */
    margin: 2.5rem 0;
  }

:global(.bio-highlight) {
  background: none;
  color: var(--text-secondary);
  text-decoration: underline;
  text-decoration-color: var(--accent);
  text-decoration-thickness: 2px;
  text-underline-offset: 3px; /* ── increase to push line further, decrease to bring closer ── */
}

  /* ── Section label ── */
  .section-label {
    margin-bottom: 2rem;
  }

  /* ── Skills ── */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); /* ── column width ── */
    gap: 2rem 3rem;
  }

  .skill-group__cat {
    margin-bottom: 0.75rem;
  }

  .skill-group__items {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .skill-group__items li {
    font-size: 0.95rem;
    color: var(--text-secondary);
  }
.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* ── column width ── */
  gap: 2rem 3rem;
}

.research-item__title {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 0.4rem;
}

.research-item__desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.education-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.education-item {
  display: flex;
  gap: 2rem;
}

.education-item__year {
  min-width: 90px; /* ── adjust to align columns ── */
  color: var(--text-secondary);
}

.education-item__degree {
  font-size: 1.25rem;
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 0.2rem;
}

.education-item__sub {
  color: var(--text-primary);
  font-weight: 500;
  font-size:1rem;
  margin-bottom: 0.2rem;
}

.education-item__school {
  color: var(--text-primary);
  font-size: 0.95rem;
}
</style>
