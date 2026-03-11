<script lang="ts">
  import { reveal } from '$lib/actions/reveal.js';

  const paper = {
    title: 'Material, ĠConfig, urations, Ġof, ĠAI, -, Gener, ated, ĠText, s',
    field: 'Critical AI Studies / Digital Humanities',
    year: '2024',
    pdf: '/papers/material-configurations.pdf',
    status: 'Unpublished manuscript',
  };
</script>

<svelte:head>
  <title>{paper.title} — RJC</title>
</svelte:head>

<article class="container paper-page">

  <header class="paper-header fade-up" use:reveal>
    <p class="label">{paper.field} · {paper.year}</p>
    <h1 class="display paper-title">{paper.title}</h1>
  </header>

  <div class="paper-body">

    <!-- ── Companion note ── -->
    <p class="section__body companion fade-up" use:reveal>
      A companion piece to
      <a href="/projects/ai-imagined" class="inline-link">
        An AI Image of the Imagined Image of AI
      </a>
      — where that paper examines how AI imagines itself visually,
      this one opens the machine to examine how AI-generated text
      materially comes to be.
    </p>

    <hr class="divider" />

    <!-- ── Research question ── -->
    <section class="section fade-up" use:reveal>
      <p class="label section__label">The Question</p>
      <p class="section__body">
        When you type a question into ChatGPT and press enter, what actually happens?
        Not in the hand-wavy sense of "it predicts the next word" — but materially,
        mathematically, step by step. And what does that process mean for how we
        understand language, meaning, and authorship?
      </p>
      <p class="section__body">
        This paper argues that AI-generated texts are neither meaningless statistical
        artifacts nor uncanny simulations of human writing. They are something else
        entirely: distinctive material-semiotic practices that emerge from specific
        computational configurations — and that demand their own theoretical framework.
      </p>
    </section>

    <hr class="divider" />

    <!-- ── Approach ── -->
    <section class="section fade-up" use:reveal>
      <p class="label section__label">The Approach</p>
      <p class="section__body">
        The paper takes GPT-2 as its case study — not because it is the most powerful
        model, but because its open-source architecture makes genuine technical
        examination possible, something OpenAI's later models no longer allow.
        Through close analysis of its computational processes — tokenization, vector
        embeddings, positional encoding, transformer attention mechanisms, and
        probabilistic decoding — the paper maps the specific material conditions
        through which AI text emerges.
      </p>
      <p class="section__body">
        This technical analysis is then read through the lens of new materialism,
        drawing on Coole and Frost's account of matter's inherent agency, Hayles'
        media-specific criticism, and Bajohr's concept of "dumb meaning" — a form
        of significance that operates below human cognitive processes but is not
        therefore empty. The paper argues that meaning in AI text generation is
        not absent but differently configured: emerging through geometric relationships
        in vector space, probabilistic patterns of token selection, and the dynamic
        interaction of input with materialized knowledge.
      </p>
    </section>

    <hr class="divider" />

    <!-- ── Key intervention ── -->
    <section class="section fade-up" use:reveal>
      <p class="label section__label">The Intervention</p>
      <p class="section__body">
        Two dominant positions frame most debates about AI-generated text.
        The first dismisses it as "stochastic parrots" — form without meaning,
        statistical noise dressed as language. The second overclaims, reading AI
        systems through Barthesian and Derridean frameworks in ways that flatten
        the very real differences between human and machine textual production.
      </p>
      <p class="section__body">
        This paper rejects both. Instead of asking whether AI-generated text is
        "real" language, it asks what kind of material object it actually is —
        and what theoretical tools we need to examine it on its own terms.
        The answer requires staying close to the specific material processes of
        a specific model at a specific moment, rather than generalizing across
        "AI" as though it were a stable category.
      </p>
      <p class="section__body">
        The paper also takes seriously the material constraints of these systems —
        how the biases encoded in training data are not merely a data quality
        problem but a consequence of how social relations become materialized
        into fixed computational configurations, shaping what can be expressed
        and foreclosing alternatives at every step of generation.
      </p>
    </section>

    <hr class="divider" />

    <!-- ── Quote ── -->
    <section class="section section--quote fade-up" use:reveal>
      <blockquote class="pullquote">
        The challenge is not to reject or uncritically embrace these technologies,
        but to develop frameworks that account for their distinctive material nature.
      </blockquote>
    </section>

    <hr class="divider" />

    <!-- ── Download ── -->
    <section class="section section--download fade-up" use:reveal>
      <p class="label section__label">Full Paper</p>
      <p class="section__body">
        The complete paper includes detailed technical analysis of GPT-2's
        architecture, close readings of Hayles, Bajohr, Coole and Frost,
        and a discussion of how material constraints reproduce social bias
        in AI text generation. {paper.status}.
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

  .paper-header {
    margin-bottom: var(--space-md);
  }

  .paper-header .label {
    margin-bottom: 1rem;
  }

  .paper-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.08;
  }

  .paper-body {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .companion {
    font-style: italic;
  }

  .inline-link {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color var(--duration-fast) ease;
  }

  .inline-link:hover {
    color: var(--accent-light);
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .section__label {
    margin-bottom: 0.25rem;
  }

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

  .section--quote {
    padding: var(--space-sm) 0;
  }

  .pullquote {
    font-family: var(--font-display);
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    font-weight: 500;
    color: var(--text-primary);
    line-height: 1.4;
    letter-spacing: -0.01em;
    border: none;
    padding: 0;
    margin: 0;
    max-width: 560px;
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

  @media (max-width: 640px) {
  .paper-title { font-size: 1.6rem; }
  .section__body { font-size: 0.95rem; }
  .pullquote { font-size: 1.1rem; }
  .paper-page { padding-top: var(--space-md); }
}

</style>
