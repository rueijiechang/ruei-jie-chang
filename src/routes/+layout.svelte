<script lang="ts">
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Nav />

<main class="main-content">
  <slot />
</main>

<Footer />

<style>
  .main-content {
    padding-top: 5rem; 
    min-height: 100vh;
  }
</style>
