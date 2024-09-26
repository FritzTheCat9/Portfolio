<script lang="ts">
  interface Props {
    description: string;
  }

  let { description }: Props = $props();
</script>

<p class="mb-4 mt-4 text-justify">
  {description}
</p>
