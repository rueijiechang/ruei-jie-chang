<script lang="ts">
  // Links and information to display in the footer
  const name = 'Ruei-Jie (Rachel) Chang';
  const year = new Date().getFullYear();

  const socials = [
    { label: 'GitHub',   href: 'https://github.com/rueijiechang' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ruei-jie-chang-24798623b/' },
    { label: 'Email', href: 'mailto:rueijiechang@uchicago.edu' }
  ];
</script>

<footer class="footer">
  <div class="container footer__inner">
    <span class="footer__name label">{name} © {year} Built with SvelteKit</span>

    <ul class="footer__links">
      {#each socials as s}
        <li>
          <a href={s.href} target="_blank" rel="noopener" class="footer__link label">
            {s.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--border);
    padding: 2rem 0;
    margin-top: var(--space-xl);
  }

  .footer__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer__links {
    display: flex;
    list-style: none;
    /* ── spacing between footer links ── */
    gap: 1.5rem;
  }

  .footer__link {
    transition: color var(--duration-fast) ease;
  }

  .footer__link:hover {
    color: var(--accent);
  }
</style>
