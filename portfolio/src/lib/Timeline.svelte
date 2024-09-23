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

<div class="relative m-16">
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
        <div
          class={`lg:${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} lg:${index % 2 === 0 ? 'ml-12' : 'mr-12'}`}>
          <div class="flex items-center flex-col">
            <img src={event.image} alt={event.company} class="h-20 mb-2" />
            <h3 class="text-lg text-center font-semibold text-gray-700">{event.company}</h3>
            <p class="text-gray-600 text-center">
              {formatDateRange(event.dateFrom, event.dateTo)}
            </p>
            <p class="text-gray-500 text-center max-w-xs">{event.description}</p>
          </div>
        </div>
      </div>
    {/each}
  {/if}
</div>
