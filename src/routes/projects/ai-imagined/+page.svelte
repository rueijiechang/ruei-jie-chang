<script lang="ts">
  import { reveal } from '$lib/actions/reveal.js';

  const paper = {
    title:  'An AI Image of the Imagined Image of AI',
    course: 'Digital Visual Studies',
    year:   '2024',
    pdf:    '/papers/ai-imagined-image.pdf',
    status: 'Unpublished manuscript',
  };
</script>

<svelte:head>
  <title>{paper.title} — RJC</title>
</svelte:head>

<article class="container paper-page">

  <header class="paper-header fade-up" use:reveal>
    <p class="label">{paper.course} · {paper.year}</p>
    <h1 class="display paper-title">{paper.title}</h1>
  </header>

  <div class="paper-body">

    <!-- ── Companion note ── -->
    <p class="section__body companion fade-up" use:reveal>
      A companion piece to
      <a href="/projects/material-configurations" class="inline-link">
        Material Configurations of AI-Generated Texts
      </a>
      — where that paper opens the machine to examine how AI text materially emerges,
      this one asks what it means that AI consistently imagines itself the same way.
    </p>

    <hr class="divider" />

    <!-- ── Top ── -->
    <figure class="figure fade-up" use:reveal>
      <img
        src="/images/papers/ai-grid.jpg"
        alt="A grid of Midjourney outputs for the prompt Artificial Intelligence, showing repeated anthropomorphized feminized side-profile robot faces"
        class="figure__img"
      />
      <figcaption class="label figure__caption">
        Midjourney generated images using the prompt "Artificial Intelligence" (2024).
        A hundred iterations reveal the same pattern: anthropomorphized, feminized, side profiles.
      </figcaption>
    </figure>

    <hr class="divider" />

    <!-- ── Intro ── -->
    <p class="section__body fade-up" use:reveal style="transition-delay: 60ms">
      If you type <em>/imagine Artificial Intelligence</em> in Midjourney's Discord server,
      you would probably get an image of a robot with a female white face, and you might think,
      "Yeah, that's about right." It might not stray too far from how you imagined AI.
      At least it's not giving you a picture of a cat or a plate of pancakes.
    </p>

    <p class="section__body fade-up" use:reveal style="transition-delay: 100ms">
      Yet, upon repeating this process a hundred times, a striking pattern emerges:
      anthropomorphized, feminized, and presented as side profiles. These images exhibit high
      visual repetitiveness, which implies underlying socio-political issues. The reasons we
      imagine AI in this manner are shaped by historical and cultural antecedents. Similarly,
      the data that determine how generative image models visualize AI are also produced within
      the same contexts. The limited variability in AI's representation holds further negative
      societal consequences, determined not only by how we imagine data but by the logic of
      generative models actively foreclosing political potential.
    </p>

    <hr class="divider" />

    <!-- ── Section (Argument) ── -->
    <section class="section fade-up" use:reveal>
      <p class="label section__label">The Argument</p>
      <p class="section__body">
        The paper traces three overlapping patterns in AI's visual representation:
        anthropomorphization, feminization, and the prevalence of side profiles back to
        their historical and sociocultural roots. From Alan Turing's Imitation Game to Ovid's
        Pygmalion, the imaginary of AI has always been entangled with the imaginary of the
        human, and specifically of the woman as a synthetic subordinate.
      </p>
      <p class="section__body">
        Generative image models do not invent these representations. They inherit and
        amplify them. Trained on data produced within the same cultural contexts, they create
        a feedback loop: biased inputs produce biased outputs, which become new data,
        foreclosing the possibility of transformation. The limited variability in how AI is
        depicted is not a technical accident. It is a political condition.
      </p>
    </section>

    <!-- ── Images ── -->
    <div class="figure__trio-grid fade-up" use:reveal>
      <figure class="figure__trio-item">
        <img src="/images/papers/ameca.jpg" alt="Ameca humanoid robot by Engineered Arts, with a grey face and expressive features" class="figure__img" />
        <figcaption class="label figure__caption">Ameca — Engineered Arts</figcaption>
      </figure>
      <figure class="figure__trio-item">
        <img src="/images/papers/sophia.jpg" alt="Sophia humanoid robot by Hanson Robotics, with a realistic female face" class="figure__img" />
        <figcaption class="label figure__caption">Sophia — Hanson Robotics</figcaption>
      </figure>
      <figure class="figure__trio-item">
        <img src="/images/papers/ava.jpg" alt="Ava, the fictional AI robot from the film Ex Machina, with a transparent mechanical body and human face" class="figure__img" />
        <figcaption class="label figure__caption">Ava — Ex Machina</figcaption>
      </figure>
    </div>

    <hr class="divider" />

    <!-- ── Section (Benjamin) ── -->
    <section class="section fade-up" use:reveal>
      <p class="label section__label">Aura, Reproducibility & the Paradigm Shift</p>
      <p class="section__body">
        Beyond the sociopolitical critique, these images also demand a rethinking of what
        kind of art object they actually are.
      </p>
      <p class="section__body">
        The paper turns to Walter Benjamin's framework of aura and technological
        reproducibility to ask this question. AI-generated images are neither copies nor
        originals, they are simulacra of an aggregated cultural concept, each output unique
        yet none traceable to a single author or origin. Aura, in this context, resides not
        in the image itself but in the opaque, unpredictable interplay between human
        prompting and machine generation.
      </p>
      <p class="section__body">
        This does not grant generative models inherent political power. Their democratizing
        potential is real but partial, constrained by the same biases encoded in their
        training data, and by the asymmetry of power between the corporations that control
        data extraction and the users who type the prompts.
      </p>
    </section>

    <figure class="figure figure--inline fade-up" use:reveal>
      <img
        src="/images/papers/dalle-foot.jpg"
        alt="A DALL-E generated pic of a non-anthropomorphized machine wiht obe big foot"
        class="figure__img figure__img--contained"
      />
      <figcaption class="label figure__caption">
        DALL-E 3, prompted to generate a machine resembling a human with only a foot and no face.
        After multiple failed attempts producing conventional anthropomorphized robots,
        this image emerged as an "error" — the system noting it had trouble generating a full-body image (2024).
      </figcaption>
    </figure>

    <hr class="divider" />

    <!-- ── Quote ── -->
    <section class="section section--quote fade-up" use:reveal>
      <blockquote class="pullquote">
        Just as we make AI human, we make it a woman.
      </blockquote>
    </section>

    <hr class="divider" />

    <!-- ── Download ── -->
    <section class="section section--download fade-up" use:reveal>
      <p class="label section__label">Full Paper</p>
      <p class="section__body">
        The complete paper includes extended analysis of the historical feminization of robots,
        close readings of Benjamin and Offert, and a discussion of the political limits
        of generative image models as art objects. {paper.status}.
      </p>
      <a href={paper.pdf} download class="download-btn label">
        ↓ Download PDF
      </a>
    </section>

  </div>

</article>

<style>
  .paper-page {
    padding-top: var(--space-lg);
    padding-bottom: var(--space-xl);
    max-width: 760px;
  }

  .paper-header { margin-bottom: var(--space-md); }
  .paper-header .label { margin-bottom: 1rem; }

  .paper-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.08;
  }

  .paper-body {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .section__label { margin-bottom: 0.25rem; }

  .section__body {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    max-width: 640px;
  }

  .divider {
    border: none;
    border-top: 1px solid var(--border);
  }

  .figure {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .figure__img {
    width: 100%;
    display: block;
  }

  .figure__img--contained {
    max-width: 110px;
  }

  .figure__caption {
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 580px;
  }

  /* a div wrapper, each child is its own <figure> ── */
  .figure__trio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .figure__trio-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0;
  }

  .figure__trio-item .figure__img {
    aspect-ratio: 3/2;
    object-fit: cover;
    object-position: center top;
  }

  .section--quote { padding: var(--space-sm) 0; }

  .pullquote {
    font-family: var(--font-display);
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    font-weight: 500;
    color: var(--text-primary);
    line-height: 1.3;
    letter-spacing: -0.01em;
    border: none;
    padding: 0;
    margin: 0;
    max-width: 540px;
  }

  .download-btn {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.75rem 1.75rem;
    border: 1px solid var(--border-strong);
    color: var(--text-secondary);
    border-radius: 1px;
    transition: all var(--duration-fast) ease;
    font-family: var(--font-body);
  }

  .download-btn:hover {
    background: var(--text-primary);
    color: var(--bg);
    border-color: var(--text-primary);
  }

  .companion { font-style: italic; }

  .inline-link {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color var(--duration-fast) ease;
  }

  .inline-link:hover { color: var(--accent-light); }

  @media (max-width: 600px) {
    .figure__trio-grid { grid-template-columns: 1fr; }
    .figure__img--contained { max-width: 100%; }
  }
</style>