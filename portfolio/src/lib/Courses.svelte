<script lang="ts">
  import type { CourseData } from './CourseData';
  interface Props {
    courses: CourseData[];
  }

  let { courses }: Props = $props();
</script>

<div class="space-y-8 my-8">
  {#each courses as course, index}
    <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
      <div class={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : ''} flex justify-center`}>
        <a href={course.website} target="_blank">
          <img src={course.image} alt={course.title} class="rounded-lg w-64 object-contain" />
        </a>
      </div>
      <div class={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : ''} flex justify-center`}>
        <a href={course.website} target="_blank">
          <h2 class="text-2xl font-bold text-gray-800 text-center">{course.title}</h2>
        </a>
      </div>
    </div>
  {/each}
</div>
