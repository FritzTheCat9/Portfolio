<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    name: string;
    children: Snippet;
  }

  let { name, children }: Props = $props();
</script>

<div class="relative flex items-center m-4">
  <p class="text-2xl font-bold mb-4 text-center flex-grow">{name}</p>
  <div class="absolute right-0 flex space-x-4 z-10">
    {@render children()}
  </div>
</div>
