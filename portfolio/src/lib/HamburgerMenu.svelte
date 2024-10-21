<script>
  import NavLink from './NavLink.svelte';
  import DownloadCVButton from './DownloadCVButton.svelte';
  import HamburgerIcon from '../public/menu.png';

  let isOpen = $state(false);
</script>

<nav
  class="bg-gray-200 p-8 flex flex-col items-center md:flex-row md:justify-end md:space-x-8 space-y-2 md:space-y-0">
  <button class="md:hidden self-end" onclick={() => (isOpen = !isOpen)} aria-label="Toggle menu">
    <img src={HamburgerIcon} alt="Toggle menu" class="h-8 w-8" />
  </button>

  <div
    class={`${
      isOpen ? 'flex' : 'hidden'
    } flex-col items-center md:flex md:flex-row md:space-x-8 space-y-2 md:space-y-0`}>
    <NavLink href="#info" text="Info" />
    <NavLink href="#experience" text="Experience" />
    <NavLink href="#projects" text="Projects" />
    <NavLink href="#courses" text="Courses" />
    <NavLink href="#skills" text="Skills" />
    <NavLink href="#contact" text="Contact" />
    <div class="flex-none">
      <DownloadCVButton />
    </div>
  </div>
</nav>
