<script>
  import { page } from '$app/stores';

  // ── Customize nav links here ──
  const links = [
    { href: '/',         label: 'Home' },
    { href: '/about',    label: 'About' },
    { href: '/projects', label: 'Projects / Writings' },
  ];
</script>

<nav class="nav">
  <div class="container nav__inner">

    <!-- ── Logo / name — change text here ── -->
    <a href="/" class="nav__logo">
      <span class="nav__logo-text">RUEI-JIE (RACHEL) CHANG</span> <!-- initials or short name -->
    </a>

    <ul class="nav__links">
      {#each links as link}
        <li>
          <a
            href={link.href}
            class="nav__link"
            class:active={$page.url.pathname === link.href}
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
    /* ── change color of logo initials here ── */
  }

  .nav__links {
    display: flex;
    list-style: none;
    gap: 2rem; /* ── spacing between nav items ── */
  }

  .nav__link {
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-secondary);
    transition: color var(--duration-fast) ease;
    position: relative;
  }

  .nav__link::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent); /* ── underline accent color ── */
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
</style>
