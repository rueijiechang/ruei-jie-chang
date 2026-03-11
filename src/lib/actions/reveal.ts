// adds visible class when element enters the viewport
// Used in  <div class="fade-up" use:reveal>
export function reveal(node: HTMLElement, { threshold = 0.15, rootMargin = '0px' } = {}) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('visible');
        // animate once 
        observer.unobserve(node);
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