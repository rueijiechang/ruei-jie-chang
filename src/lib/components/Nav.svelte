<script lang="ts">
  import { page } from '$app/state';

// Links to pages to display in the nav
  const links = [
    { href: '/',         label: 'Home' },
    { href: '/about',    label: 'About' },
    { href: '/projects', label: 'Projects / Writings' },
    { href: '/contact',  label: 'Contact' },
  ];
</script>

<nav class="nav" aria-label="Main navigation">
  <div class="container nav__inner">
  <!-- logo back to home  -->
    <a href="/" class="nav__logo">
      <span class="nav__logo-text">RUEI-JIE (RACHEL) CHANG</span>
    </a>

    <ul class="nav__links">
      {#each links as link}
        <li>
          <a
            href={link.href}
            class="nav__link"
            class:active={page.url.pathname === link.href}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>

  </div>
</nav>

<style>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 1.25rem 0;
    background: color-mix(in oklch, var(--bg) 85%, transparent);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  .nav__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav__logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .nav__logo-text {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: var(--text-primary);
  }

  .nav__links {
    display: flex;
    list-style: none;
    /* ── spacing between nav items ── */
    gap: 2rem;
  }

  .nav__link {
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-secondary);
    transition: color var(--duration-fast) ease;
    position: relative;
    white-space: nowrap; 
  }

  .nav__link::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent);
    transition: width var(--duration-mid) var(--ease-out);
  }

  .nav__link:hover,
  .nav__link.active {
    color: var(--text-primary);
  }

  .nav__link:hover::after,
  .nav__link.active::after {
    width: 100%;
  }

/* Responsive */
  @media (max-width: 640px) {
  .nav__logo-text { font-size: 0.7rem; letter-spacing: 0.04em; } /* ← shrink logo */
  .nav__links { gap: 0.75rem; }                                   /* ← tighter gap */
  .nav__link { font-size: 0.65rem; letter-spacing: 0.04em; }     /* ← shrink links */
}
</style>