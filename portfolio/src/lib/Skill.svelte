<script lang="ts">
  import type { SkillProps } from './SkillProps';

  let { name, iconPath, iconAlt }: SkillProps = $props();
</script>

<div class="flex flex-col items-center">
  {#if iconPath != undefined && iconAlt != undefined}
    <img class="w-20 h-20 object-contain" src={iconPath} alt={iconAlt} />
  {/if}
  <h2 class="text-center mt-2">{name}</h2>
</div>
