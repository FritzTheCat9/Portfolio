<script lang="ts">
  interface Props {
    images: string[];
    startIndex?: number;
  }

  let { images, startIndex = 0 }: Props = $props();

  let currentIndex = $state(startIndex);
  let isZoomed = $state(false);

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function toggleZoom() {
    isZoomed = !isZoomed;
  }

  function closeZoom() {
    isZoomed = false;
  }
</script>

{#snippet sliderDotsSnippet(images: string[])}
  <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
    {#each images as _, index}
      <button
        aria-label="Slider Image Button"
        class="h-2 w-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full bg-gray-500"
        class:bg-purple-500={index === currentIndex}
        onclick={() => (currentIndex = index)}>
      </button>
    {/each}
  </div>
{/snippet}

<div class="relative">
  {#if images.length}
    <div class="absolute left-0 h-full text-white flex items-center">
      <button class="w-10 h-10 bg-black bg-opacity-50 rounded-full ml-4" onclick={prevImage}>
        ❮
      </button>
    </div>
    <div class="absolute right-0 h-full text-white flex items-center">
      <button class="w-10 h-10 bg-black bg-opacity-50 rounded-full mr-4" onclick={nextImage}>
        ❯
      </button>
    </div>

    <div class="flex justify-center">
      <button onclick={toggleZoom}>
        <img
          src={images[currentIndex]}
          alt={images[currentIndex]}
          class="rounded-lg max-h-96 cursor-pointer" />
      </button>
    </div>

    {@render sliderDotsSnippet(images)}
  {/if}

  {#if isZoomed}
    <div
      class="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
      role="button"
      aria-label="Close zoomed view"
      tabindex="0"
      onclick={closeZoom}
      onkeydown={(e) => e.key === 'Enter' && closeZoom()}>
      <div
        class="relative max-w-[90%] max-h-[90%] w-full h-full bg-black rounded-lg"
        role="button"
        aria-label="Close zoomed view"
        tabindex="0"
        onclick={(e) => e.stopPropagation()}
        onkeydown={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={images[currentIndex]}
          class="w-full h-full object-contain rounded-lg" />

        <button
          onclick={prevImage}
          class="absolute left-0 top-0 w-1/2 h-full text-white flex items-center justify-start">
          <div
            class="w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center ml-4">
            ❮
          </div>
        </button>

        <button
          onclick={nextImage}
          class="absolute right-0 top-0 w-1/2 h-full text-white flex items-center justify-end">
          <div
            class="w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center mr-4">
            ❯
          </div>
        </button>

        <button
          class="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 rounded-full text-white"
          onclick={closeZoom}>
          ✕
        </button>

        {@render sliderDotsSnippet(images)}
      </div>
    </div>
  {/if}
</div>
