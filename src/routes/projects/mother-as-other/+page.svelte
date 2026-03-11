<script lang="ts">
  import { reveal } from '$lib/actions/reveal.js';

  // ── Essay metadata 
  const paper = {
    title:  'mOther as the Other:',
    subtitle: 'Language, Alienation, and the Impossibility of the Mother Tongue',
    field:  'Comparative Literature / Critical Theory',
    year:   '2024',
    status: '',
  };
</script>

<svelte:head>
  <title>{paper.title} — RJC</title>
  <meta name="description" content="An essay on language, alienation, and the impossibility of the mother tongue, drawing on Lacan, Canetti, and Lahiri." />
</svelte:head>

<article class="container paper-page">

  <header class="paper-header fade-up" use:reveal>
    <p class="label">{paper.field} · {paper.year}</p>
    <h1 class="display paper-title">{paper.title}</h1>
    <p class="paper-subtitle">{paper.subtitle}</p>
  </header>

  <div class="paper-body">

    <!-- ── Introduction ── -->
    <section class="section fade-up" use:reveal>
      <p class="section__body">
        The mother tongue is commonly understood through a cluster of intuitive associations: it is the language of one's parents, the first language acquired, the language that confers belonging, or the language that feels like home. Yet these definitions, however resonant, remain insufficient. They presuppose a stable, transparent relationship between a speaking subject and a language, one that dissolves upon closer examination. Drawing on Jacques Lacan's theorization of language and otherness, this essay argues that the mother tongue cannot be located in any singular, originary language. Rather, all language operates as the symbolic order into which the subject is thrown, irreducibly alien, structured by the discourse of Others before the subject's arrival. As Bruce Fink writes in <em>The Lacanian Subject</em>, language brings "the fundamental form of alienation that is part and parcel of learning one's mother tongue." The mother tongue, reframed through this lens, is not a site of transparency or natural belonging but of constitutive estrangement, a negotiation of desires, a translation of the self into the symbolic. Through the cases of Elias Canetti, Jhumpa Lahiri, and my own linguistic history, I examine how the mother tongue resists fixed definition, how languages interact with and transform subjectivity, and why the hierarchical distinction between a first and second language ultimately fails to hold.
      </p>
    </section>

    <hr class="divider" />

    <!-- ── Canetti ── -->
    <section class="section fade-up" use:reveal>
      <p class="label section__label">Elias Canetti: The Traumatic Implantation of German</p>
      <p class="section__body">
        Canetti's multilingual trajectory, spanning Bulgarian, Ladino, German, French, and English, offers a compelling case against the equation of mother tongue with familiarity or chronological primacy. Born into a Sephardic Jewish family in Bulgaria, Canetti first acquired Ladino. Yet German, the language his parents spoke privately among themselves, functioned initially as a language of exclusion and secrecy before becoming, through his mother's insistence, what he himself described as "a mother tongue implanted belatedly, and in true pain." He wrote of being "reborn under my mother's influence to the German language," the "spasm of that birth" producing an enduring passion binding him simultaneously to the language and to the figure of the mother, both quoted in Daniel Heller-Roazen's essay "Hubda," collected in <em>Echolalias</em>. What this account reveals is that the mother tongue need not emerge naturally or painlessly; it can be traumatically enforced, its intimacy inseparable from its violence. Heller-Roazen extends this point, observing that "after having taken up residence in the ordered system of a foreign grammar, speaking beings can never fully return to the unruly medium of their first speech." Each subsequent language Canetti encountered did not displace its predecessors but accumulated, layering new structures of meaning over prior ones. As Heller-Roazen concludes, "no tongue is truly a mother tongue, not even one's mother's": all languages are mutually constitutive, collectively shaping the subject rather than any single one serving as an originary ground.
      </p>
    </section>

    <hr class="divider" />

    <!-- ── Lahiri ── -->
    <section class="section fade-up" use:reveal>
      <p class="label section__label">Jhumpa Lahiri: Exile Among Languages</p>
      <p class="section__body">
        Lahiri's linguistic situation complicates the mother tongue further by foregrounding the role of environment, immigration, and disjunction between ancestry and lived experience. Born into an Indian immigrant family in the United States, Lahiri grew up most fluent in English, yet Bengali retained the nominal status of mother tongue by virtue of familial and ethnic inheritance. In her essay "Exile," collected in <em>In Other Words</em>, she articulates the alienation produced by this disjunction: "When you live in a country where your own language is considered foreign, you can feel a sense of estrangement." Bengali, though maternally transmitted, became a language of distance rather than intimacy, disconnected from the environment in which her subjectivity was formed. This estrangement led her to describe herself as linguistically orphaned, a condition that finds its resolution not in Bengali or English but in Italian, acquired as an adult in Italy. In <em>Translating Myself and Others</em>, Lahiri describes this acquisition in terms that echo the very logic of the mother tongue: learning Italian felt "like parents with their children, the way one learns one's native language," producing a sense of interiority that neither English nor Bengali afforded. Her case demonstrates that the experiential dimensions attributed to the mother tongue, belonging, interiority, nativeness, are not inherent to any particular language but contingent, produced through circumstances of acquisition and environment. If all languages are products of derivation, translation, and imitation, the claim that any language belongs exclusively to a person, family, or nation becomes untenable.
      </p>
    </section>

    <hr class="divider" />

    <!-- ── Personal section ── -->
    <section class="section fade-up" use:reveal>
      <p class="label section__label">Taiwanese, Mandarin, English, and I</p>
      <p class="section__body">
        My own linguistic history makes this impossibility acutely felt. As a Taiwanese, the language I am most fluent in is Mandarin, the language of my schooling, my friendships, my everyday life. And yet Mandarin does not feel like home. The language that confers on me a sense of identity and affective belonging is Taiwanese, a language I cannot speak fluently, a language of my grandparents, a language that is vanishing as younger generations increasingly abandon it.
      </p>
      <p class="section__body">
        Taiwanese was once spoken by the majority of Taiwan's population. Under successive colonial regimes, Japanese colonization followed by the Chinese Nationalist Party's authoritarian rule, it was systematically suppressed. The Nationalist government's "Speak Mandarin, not dialects" campaign did not merely shift linguistic practice; it imposed a symbolic violence that rendered Taiwanese speakers subordinate within their own land, encoding a hierarchy of legitimacy into the architecture of daily speech. Though these events precede my birth, their consequences are not historical abstractions. They persist as an inheritance, a collective memory and national trauma sedimented into the political significance Taiwanese carries for me today.
      </p>
      <p class="section__body">
        This significance has only intensified since my arrival in the United States. Speaking Mandarin here produces a particular misrecognition: I am frequently perceived as Chinese, as though linguistic overlap implies political assimilation, as though Taiwan's distinctiveness is erased by the accident of a shared official language. This misrecognition resonates with a deeper political anxiety. In the context of China's ongoing threats of forcible unification and Taiwan's precarious international standing, being perceived as Chinese feels like a symbolic enactment of the very erasure I fear. Taiwanese thus functions for me not simply as a marker of cultural identity but as a political and ethical declaration, an insistence on Taiwan's irreducible particularity and on my belonging to it rather than to the state that claims sovereignty over it.
      </p>
      <p class="section__body">
        What I am left with is a paradox that illuminates the Lacanian structure of the mother tongue: I feel most at home in a language I cannot fully speak. Taiwanese is home, it carries the figure of the mother, and yet I have left home. I remain bound to it not through fluency but through its existence as a signifier of what has been lost, suppressed, and must be claimed.
      </p>
    </section>

    <hr class="divider" />

    <!-- Quote -->
    <section class="section section--quote fade-up" use:reveal>
      <blockquote class="pullquote">
        I feel most at home in a language I cannot fully speak.
      </blockquote>
    </section>

    <hr class="divider" />

    <!-- ── Conclusion ── -->
    <section class="section fade-up" use:reveal>
      <p class="label section__label">Conclusion</p>
      <p class="section__body">
        The cases examined here converge on a single insight: the mother tongue is not a stable origin but a retroactive construction, always marked by alienation, loss, and the constitutive otherness of language itself. Canetti's traumatically implanted German, Lahiri's Italian intimacy, my own attachment to a Taiwanese I cannot speak, each instance reveals that what we call the mother tongue is less a natural possession than a relation: contingent, contested, and irreducibly complex. To reframe the mother tongue as Other, in the Lacanian sense, is not to diminish its significance but to account more honestly for what it does, how it shapes desire, structures memory, and mediates belonging without ever fully delivering it. Language is never simply one's own. It is always, in some measure, inherited, imposed, and transforming, a medium through which we negotiate, incompletely, who we are.
      </p>
    </section>

    <hr class="divider" />

    <!-- ── References ── -->
    <section class="section fade-up" use:reveal>
      <p class="label section__label">References</p>
      <ul class="references-list">
        <li>Fink, Bruce. <em>The Lacanian Subject.</em> Princeton University Press, 1995.</li>
        <li>Heller-Roazen, Daniel. "Hubda." <em>Echolalias.</em> Zone Books, 2005.</li>
        <li>Lahiri, Jhumpa. "Exile." <em>In Other Words.</em> Vintage, 2016.</li>
        <li>Lahiri, Jhumpa. <em>Translating Myself and Others.</em> Princeton University Press, 2022.</li>
      </ul>
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
    margin-bottom: 0.75rem;
  }

  .paper-subtitle {
    font-size: clamp(2rem, 2vw, 2rem);
    color: var(--text-primary);
    line-height: 1.4;
    font-weight: 800;
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

  .section__label {
    margin-bottom: 0.25rem;
    font-size: 1.25rem;
    color: var(--text-primary);
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

  .references-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .references-list li {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }


  @media (max-width: 640px) {
    .paper-title { font-size: 1.6rem; }
    .section__body { font-size: 0.95rem; }
    .pullquote { font-size: 1.1rem; }
    .paper-page { padding-top: var(--space-md); }
  }
</style>