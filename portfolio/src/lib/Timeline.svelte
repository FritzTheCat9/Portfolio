<script lang="ts">
  import type { TimelineEvent } from './TimelineEvent';

  interface Props {
    events: TimelineEvent[];
  }

  let { events = [] }: Props = $props();

  function formatDateRange(startDate: Date, endDate: Date) {
    const start = new Intl.DateTimeFormat('en-US', { month: '2-digit', year: 'numeric' }).format(
      startDate
    );
    const end = new Intl.DateTimeFormat('en-US', { month: '2-digit', year: 'numeric' }).format(
      endDate
    );
    return `${start} - ${end}`;
  }
</script>

<div class="relative mt-4">
  {#if events.length}
    <!-- Line -->
    <div class="md:absolute md:left-1/2 md:w-2 md:h-full md:bg-purple-500 md:-translate-x-1/2">
    </div>

    {#each events as event, index}
      <div class="flex mb-10 justify-center md:justify-start">
        <!-- Circle -->
        <div
          class="md:absolute md:left-1/2 md:w-12 md:h-12 md:rounded-full md:bg-purple-500 md:-translate-x-1/2">
        </div>

        <!-- TimelineEvent -->
        <div class={`${index % 2 === 0 ? 'md:mr-auto md:ml-4' : 'md:ml-auto md:mr-4'}`}>
          <div class="flex items-center flex-col">
            <img src={event.image} alt={event.company} class="h-20 mb-2 object-contain" />
            <h1 class="text-lg text-center font-bold">{event.company}</h1>
            <h1 class="text-md text-center font-semibold text-gray-800 italic">{event.position}</h1>
            <p class="text-center text-gray-700">
              {formatDateRange(event.dateFrom, event.dateTo)}
            </p>
            <h2 class="text-center text-gray-600 max-w-xs">{event.description}</h2>
          </div>
        </div>
      </div>
    {/each}
  {/if}
</div>
