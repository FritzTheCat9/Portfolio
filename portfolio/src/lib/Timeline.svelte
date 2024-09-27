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
    <div class="lg:absolute lg:left-1/2 lg:w-2 lg:h-full lg:bg-purple-500 lg:-translate-x-1/2">
    </div>

    {#each events as event, index}
      <div class="flex mb-10 justify-center lg:justify-start">
        <!-- Circle -->
        <div
          class="lg:absolute lg:left-1/2 lg:w-12 lg:h-12 lg:rounded-full lg:bg-purple-500 lg:-translate-x-1/2">
        </div>

        <!-- TimelineEvent -->
        <div class={`${index % 2 === 0 ? 'lg:mr-auto lg:ml-4' : 'lg:ml-auto lg:mr-4'}`}>
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
