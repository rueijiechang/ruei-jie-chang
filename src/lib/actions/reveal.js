/**
 * Svelte action: adds "visible" class when element enters the viewport.
 * Usage in .svelte files:
 *   import { reveal } from '$lib/actions/reveal';
 *   <div class="fade-up" use:reveal>...</div>
 *
 * Customize threshold (0–1) and rootMargin below.
 */
export function reveal(node, { threshold = 0.15, rootMargin = '0px' } = {}) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('visible');
        observer.unobserve(node); // animate once — remove this line to re-animate on scroll
      }
    },
    { threshold, rootMargin }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
