<script lang="ts">
  import Skill from './Skill.svelte';
  import type { SkillGroupProps } from './SkillGroupProps';

  let { name, skills }: SkillGroupProps = $props();
</script>

<div class="flex flex-col items-center mt-4">
  <h2 class="text-2xl font-bold mb-4">{name}</h2>
  <div class="flex flex-wrap justify-center gap-4">
    {#each skills as skill}
      <div class="border-4 border-gray-300 p-3 w-[200px]">
        <Skill name={skill.name} iconPath={skill.iconPath} iconAlt={skill.iconAlt} />
      </div>
    {/each}
  </div>
</div>
