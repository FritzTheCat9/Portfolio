<script lang="ts">
  import Counter from './lib/Counter.svelte'
  
  function scrollIntoView(event: MouseEvent) {
    const target = event.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute('href');
    if (!href) return;
    
    const el = document.querySelector(href);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
    });
  }
</script>

<!-- change tailwind font to roboto -->

<main>
  <nav>
    <a href="#info" on:click|preventDefault={scrollIntoView}>Info</a>
    <a href="#projects" on:click|preventDefault={scrollIntoView}>Projects</a>
    <a href="#experience" on:click|preventDefault={scrollIntoView}>Experience</a>
    <a href="#skills" on:click|preventDefault={scrollIntoView}>Skills</a>
    <a href="#contact" on:click|preventDefault={scrollIntoView}>Contact</a>
    <!-- download resume button -->
  </nav>

	<section id="info">
		<h2>
			Info
		</h2>
    <div>
      <h1 class="text-3xl font-bold">Bartłomiej Umiński</h1>
      <!-- image -->
      <!-- about me -->
      <!-- social media (github, linkedin)-->
    </div>
	</section>
	<section id="projects">
		<h2>
			Projects
		</h2>
	</section>
	<section id="experience">
		<h2>
			Experience
		</h2>
	</section>
	<section id="skills">
		<h2>
			Skills
		</h2>
	</section>
	<section id="contact">
		<h2>
			Contact
		</h2>
	</section>

  <Counter />
</main>

<style>
	section {
		min-height: 100vh;
	}
</style>