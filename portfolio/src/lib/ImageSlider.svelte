<script lang="ts">
  interface Props {
    images: string[];
    startIndex?: number;
  }

  let { images, startIndex = 0 }: Props = $props();

  let currentIndex = $state(startIndex);

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
</script>

<div class="relative">
  {#if images.length}
    <button onclick={prevImage} class="absolute left-0 w-1/2 h-full text-black">
      <div class="w-5 h-5">❮</div>
    </button>
    <button
      onclick={nextImage}
      class="absolute right-0 w-1/2 h-full text-black flex items-center justify-end">
      <div class="w-5 h-5">❯</div>
    </button>

    <div class="flex justify-center">
      <img src={images[currentIndex]} alt={images[currentIndex]} class="rounded-lg" />
    </div>

    <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
      {#each images as _, index}
        <button
          aria-label="Slider Image Button"
          class="w-2 md:w-3 lg:w-4 h-2 md:h-3 lg:h-4 rounded-full bg-gray-500"
          class:bg-purple-500={index === currentIndex}
          onclick={() => (currentIndex = index)}>
        </button>
      {/each}
    </div>
  {/if}
</div>
